import React from 'react';
import { Cocktail } from '../types';
import { CocktailCard } from './CocktailCard';

interface FamilyCardProps {
  family: string;
  cocktails: Cocktail[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const FamilyCard: React.FC<FamilyCardProps> = ({ family, cocktails, isExpanded, onToggle }) => {
  // Generate a composite image or use the first one
  const coverImage = cocktails[0].image;
  const count = cocktails.length;

  return (
    <div className={`mb-6 transition-all duration-500 ease-in-out ${isExpanded ? 'scale-[1.01]' : 'hover:scale-[1.01]'}`}>
      {/* Header / Trigger */}
      <div 
        onClick={onToggle}
        className={`bg-white rounded-3xl border-3 border-toon-border shadow-toon cursor-pointer overflow-hidden relative z-10 transition-shadow duration-300 ${isExpanded ? 'shadow-toon-active translate-y-[4px] translate-x-[4px]' : 'hover:shadow-toon-hover'}`}
      >
        <div className="relative h-40 md:h-48">
          <img src={coverImage} alt={family} className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-toon-dark/90 to-transparent flex items-center px-6 md:px-10">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-white drop-shadow-md tracking-wide transform transition-transform group-hover:translate-x-2">
                {family}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                 <span className="bg-toon-primary text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white/20 shadow-sm">
                   {count} Variantes
                 </span>
                 <span className={`material-icons-round text-white text-3xl transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                   expand_more
                 </span>
              </div>
            </div>
          </div>
          
          {/* Stack effect visual */}
          <div className="absolute right-4 bottom-4 flex -space-x-3">
            {cocktails.slice(0, 3).map((c, i) => (
              <img 
                key={c.id} 
                src={c.image} 
                alt="" 
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                style={{ zIndex: 30 - i * 10 }}
              />
            ))}
            {count > 3 && (
              <div className="w-10 h-10 rounded-full border-2 border-white bg-toon-dark text-white flex items-center justify-center text-xs font-bold z-0">
                +{count-3}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}>
        {cocktails.map((c, index) => (
          <div key={c.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
            <CocktailCard cocktail={c} />
          </div>
        ))}
      </div>
    </div>
  );
};