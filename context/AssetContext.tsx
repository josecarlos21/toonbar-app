import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

type LoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface AssetContextType {
  assets: Record<string, LoadStatus>;
  loadAsset: (url: string) => void;
}

const AssetContext = createContext<AssetContextType>({
  assets: {},
  loadAsset: () => {},
});

export const useAssets = () => useContext(AssetContext);

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [assets, setAssets] = useState<Record<string, LoadStatus>>({});
  // Ref para rastrear intentos y evitar lógica duplicada (timers/requests) si el componente se remonta
  const initiatedRequests = useRef<Set<string>>(new Set());

  const loadAsset = useCallback((url: string) => {
    // Optimización: Si ya iniciamos la carga de esta URL, ignoramos llamadas subsecuentes
    // Esto previene múltiples timers corriendo simultáneamente para la misma imagen.
    if (initiatedRequests.current.has(url)) {
      return;
    }
    initiatedRequests.current.add(url);

    setAssets(prev => ({ ...prev, [url]: 'loading' }));

    const img = new Image();
    img.src = url;

    // Timeout aumentado a 10 segundos según requerimiento
    const timeoutId = setTimeout(() => {
      setAssets(prev => {
        // Si ya cargó exitosamente, no sobrescribimos el estado
        if (prev[url] === 'loaded') return prev;
        // Si sigue en loading tras 10s, marcamos error o fallback
        return { ...prev, [url]: 'error' };
      });
    }, 10000); 

    img.onload = () => {
      clearTimeout(timeoutId);
      setAssets(prev => ({ ...prev, [url]: 'loaded' }));
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      setAssets(prev => ({ ...prev, [url]: 'error' }));
    };
  }, []);

  return (
    <AssetContext.Provider value={{ assets, loadAsset }}>
      {children}
    </AssetContext.Provider>
  );
};