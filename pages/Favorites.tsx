
import React, { useState, useEffect, useCallback } from 'react';
import { COCKTAILS } from '../constants';
import { CocktailCard } from '../components/CocktailCard';
import { getFavorites } from '../utils/storage';
import { Link } from 'react-router-dom';
import { PullToRefresh } from '../components/PullToRefresh';

export const Favorites: React.FC = () => {
  const [favIds, setFavIds] = useState<string[]>([]);
  // Estado para forzar re-render de las animaciones
  const [key, setKey] = useState(0);

  const loadFavorites = useCallback(() => {
    setFavIds(getFavorites());
  }, []);

  const handleRefresh = async () => {
    // Simular carga y forzar actualización
    await new Promise(resolve => setTimeout(resolve, 800));
    loadFavorites();
    setKey(prev => prev + 1); // Forzar re-mount para animaciones
  };

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favorites-updated', loadFavorites);
    return () => {
      window.removeEventListener('favorites-updated', loadFavorites);
    };
  }, [loadFavorites]);

  const favCocktails = COCKTAILS.filter(c => favIds.includes(c.id));

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div key={key} className="pb-24 pt-8 px-4 max-w-7xl mx-auto min-h-screen">
         <header className="mb-10 flex items-center gap-4 animate-fade-in-up">
            <div className="w-14 h-14 bg-toon-primary text-white rounded-full border-3 border-toon-border flex items-center justify-center shadow-toon-sm">
              <span className="material-icons-round text-3xl">favorite</span>
            </div>
            <div>
              <h1 className="font-display text-5xl mb-0 text-toon-dark leading-none">Mis Favoritos</h1>
              <p className="text-gray-500 font-bold text-sm tracking-wider">TU BAR PERSONAL ({favCocktails.length})</p>
            </div>
         </header>

         {favCocktails.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
             {favCocktails.map(c => (
               <CocktailCard key={c.id} cocktail={c} />
             ))}
           </div>
         ) : (
           <div className="flex flex-col items-center justify-center py-20 opacity-60 animate-pop-in text-center">
              <div className="bg-gray-100 p-8 rounded-full mb-4">
                <span className="material-icons-round text-6xl text-gray-400">heart_broken</span>
              </div>
              <h3 className="font-display text-3xl text-gray-400 mb-2">Sin Favoritos</h3>
              <p className="text-gray-500 max-w-xs mx-auto mb-6">Aún no has guardado ningún cóctel. Explora el menú y dales amor.</p>
              <Link to="/" className="font-bold text-toon-primary hover:underline">Ir al Inicio</Link>
           </div>
         )}
      </div>
    </PullToRefresh>
  );
};
