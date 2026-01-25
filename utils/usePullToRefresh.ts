
import { useState, useEffect, useCallback, useRef } from 'react';

type PullStatus = 'idle' | 'pulling' | 'ready' | 'refreshing';

interface UsePullToRefreshOptions {
  onRefresh: () => Promise<void> | void;
  threshold?: number; // Píxeles necesarios para activar (default 80)
}

export const usePullToRefresh = ({ onRefresh, threshold = 100 }: UsePullToRefreshOptions) => {
  const [status, setStatus] = useState<PullStatus>('idle');
  const [pullDistance, setPullDistance] = useState(0);
  const touchStartRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const reset = useCallback(() => {
    setStatus('idle');
    setPullDistance(0);
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      // Solo activar si estamos en el tope del scroll
      if (window.scrollY === 0) {
        touchStartRef.current = e.touches[0].clientY;
        isDraggingRef.current = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      
      const currentY = e.touches[0].clientY;
      const dy = currentY - touchStartRef.current;

      // Si arrastramos hacia arriba o no estamos en el tope, ignorar
      if (dy < 0 || window.scrollY > 0) {
        return;
      }

      // Física de resistencia: cuanto más jalas, más cuesta (logarítmico)
      const dampening = 0.5; 
      const resistedDistance = dy * dampening;

      if (resistedDistance > 0) {
        // Prevenir el refresh nativo de Chrome/Safari si estamos gestionando el nuestro
        if (e.cancelable) e.preventDefault();
        
        setPullDistance(resistedDistance);

        if (status !== 'refreshing') {
          if (resistedDistance >= threshold) {
            if (status !== 'ready') {
                setStatus('ready');
                // Haptic feedback ligero estilo "click"
                if (navigator.vibrate) navigator.vibrate(10);
            }
          } else {
            setStatus('pulling');
          }
        }
      }
    };

    const handleTouchEnd = async () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      if (status === 'ready') {
        setStatus('refreshing');
        setPullDistance(threshold); // Mantener en posición visible
        
        // Haptic feedback de éxito
        if (navigator.vibrate) navigator.vibrate([10, 30, 10]);

        try {
          await onRefresh();
          // Pequeño delay artificial para que se vea la animación de éxito
          setTimeout(() => reset(), 800); 
        } catch (error) {
          reset();
        }
      } else {
        reset();
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false }); // Passive false para poder prevenir default
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [status, threshold, onRefresh, reset]);

  return {
    ref: containerRef,
    status,
    pullDistance,
  };
};
