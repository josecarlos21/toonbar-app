import React from 'react';
import { usePullToRefresh } from '../utils/usePullToRefresh';

interface PullToRefreshProps {
  onRefresh: () => Promise<void> | void;
  children: React.ReactNode;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({ onRefresh, children }) => {
  const { ref, status, pullDistance } = usePullToRefresh({ onRefresh });

  // Calcular opacidad y rotación basada en la distancia
  const rotation = Math.min(pullDistance * 2, 180);

  // Solo aplicar transform si hay distancia o estamos refrescando
  // Esto evita crear un contexto de apilamiento (stacking context) innecesario que rompe position: fixed/sticky
  const transformStyle = pullDistance > 0 || status === 'refreshing' 
    ? `translateY(${pullDistance}px)` 
    : undefined;

  return (
    <div ref={ref} className="min-h-screen relative bg-toon-bg">
      {/* Indicador Visual */}
      <div 
        className="fixed top-0 left-0 right-0 flex justify-center pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{ 
          transform: `translateY(${Math.max(pullDistance - 20, -100)}px)`,
          opacity: status === 'idle' ? 0 : 1
        }}
      >
        <div className={`
            flex items-center gap-3 px-6 py-3 rounded-full 
            bg-white border-3 border-toon-border shadow-toon 
            transition-all duration-300
            ${status === 'ready' ? 'bg-toon-accent scale-110' : ''}
            ${status === 'refreshing' ? 'bg-toon-primary text-white' : 'text-toon-dark'}
        `}>
          
          {/* Icono Cambiante */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            {status === 'refreshing' ? (
              <span className="material-icons-round animate-spin text-2xl">autorenew</span>
            ) : (
              <span 
                className="material-icons-round text-2xl transition-transform duration-200"
                style={{ transform: `rotate(${status === 'ready' ? 180 : rotation}deg)` }}
              >
                arrow_downward
              </span>
            )}
          </div>

          {/* Texto de Estado */}
          <span className="font-display text-lg tracking-wider uppercase">
            {status === 'pulling' && 'Jala más...'}
            {status === 'ready' && '¡Suelta!'}
            {status === 'refreshing' && 'Mezclando...'}
          </span>

        </div>
      </div>

      {/* Contenido con efecto de resistencia */}
      <div 
        style={{ 
            transform: transformStyle,
            transition: status === 'refreshing' || status === 'idle' ? 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
};