import React, { useState, useEffect } from 'react';
import { Cocktail } from '../types';
import { Link } from 'react-router-dom';
import { isFavorite, toggleFavorite } from '../utils/storage';

export const CocktailCard: React.FC<{ cocktail: Cocktail }> = ({ cocktail }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isFavorite(cocktail.id));
  }, [cocktail.id]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the recipe
    e.stopPropagation();
    const newState = toggleFavorite(cocktail.id);
    setLiked(newState);
    
    // Dispatch custom event to update other components if needed
    window.dispatchEvent(new Event('favorites-updated'));
  };

  return (
    <Link to={`/recipe/${cocktail.id}`} className="block group w-full max-w-[400px]">
      <article className="bg-white rounded-3xl border-3 border-toon-border shadow-toon overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-toon-hover">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img 
            src={cocktail.image} 
            alt={cocktail.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={handleLike}
              className={`p-2 rounded-full border-2 border-toon-border shadow-sm transition-all active:scale-90 ${liked ? 'bg-toon-primary' : 'bg-white hover:bg-red-50'}`}
            >
              <span className={`material-icons-round text-xl ${liked ? 'text-white animate-heart-burst' : 'text-toon-primary'}`}>
                {liked ? 'favorite' : 'favorite_border'}
              </span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
             {/* Gradient overlay for contrast if needed */}
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {cocktail.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-toon-accent/20 text-toon-dark text-xs font-bold rounded-full uppercase tracking-wider border border-toon-accent">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-3xl text-toon-dark leading-tight">{cocktail.name}</h3>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-semibold text-gray-500 mt-auto pt-4">
            <div className="flex items-center gap-1">
              <span className="material-icons-round text-base">schedule</span>
              {cocktail.time}
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons-round text-base">bolt</span>
              {cocktail.difficulty}
            </div>
            <div className="flex items-center gap-1 ml-auto text-toon-primary">
              <span className="material-icons-round text-base">star</span>
              {cocktail.rating}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};