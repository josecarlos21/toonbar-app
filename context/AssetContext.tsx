import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

type LoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface AssetContextType {
  assets: Record<string, LoadStatus>;
  loadAsset: (url: string, force?: boolean) => void;
}

const AssetContext = createContext<AssetContextType>({
  assets: {},
  loadAsset: () => {},
});

export const useAssets = () => useContext(AssetContext);

const STORAGE_KEY = 'toon-bar-assets';

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Hidratación: Recuperamos el estado de la sesión anterior para evitar parpadeos
  const [assets, setAssets] = useState<Record<string, LoadStatus>>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // 2. Control de Peticiones: Iniciamos el Set con las que ya sabemos que están cargadas.
  // Esto evita crear objetos Image() redundantes al recargar la página.
  // Inicializamos con las keys que ya tenemos en el estado (hidratado).
  const requestsRef = useRef<Set<string>>(new Set(Object.keys(assets)));

  // 3. Persistencia: Guardamos en SessionStorage solo las exitosas
  useEffect(() => {
    const loadedAssets = Object.entries(assets)
      .filter(([_, status]) => status === 'loaded')
      .reduce((acc, [key, status]) => ({ ...acc, [key]: status }), {});
    
    if (Object.keys(loadedAssets).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(loadedAssets));
    }
  }, [assets]);

  const loadAsset = useCallback((url: string, force = false) => {
    // Si ya está en proceso y NO estamos forzando, salimos.
    if (!force && requestsRef.current.has(url)) {
      return;
    }

    // Marcamos como iniciada
    requestsRef.current.add(url);

    // Actualizamos estado visual
    setAssets(prev => {
        // Si ya está cargada y no forzamos, no hacemos nada
        if (!force && prev[url] === 'loaded') return prev;
        return { ...prev, [url]: 'loading' };
    });

    const img = new Image();
    img.src = url;

    // Aumentado a 10 segundos según requerimiento
    const timeoutId = setTimeout(() => {
      setAssets(prev => {
        if (prev[url] === 'loaded') return prev;
        // Si falla por timeout, permitimos reintentar borrando del ref
        requestsRef.current.delete(url);
        return { ...prev, [url]: 'error' };
      });
    }, 10000);

    img.onload = () => {
      clearTimeout(timeoutId);
      setAssets(prev => ({ ...prev, [url]: 'loaded' }));
      // Se queda en requestsRef para no volver a pedirla en esta sesión
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      // Permitimos reintento en caso de error de red
      requestsRef.current.delete(url);
      setAssets(prev => ({ ...prev, [url]: 'error' }));
    };
  }, []); // Dependencias vacías = Rendimiento máximo

  return (
    <AssetContext.Provider value={{ assets, loadAsset }}>
      {children}
    </AssetContext.Provider>
  );
};