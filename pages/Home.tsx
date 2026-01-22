import React, { useState, useMemo } from 'react';
import { COCKTAILS } from '../constants';
import { CocktailCard } from '../components/CocktailCard';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Added 'Mexicano' to the categories list
  const categories = ['Todos', 'Populares', 'Mexicano', 'Clásico', 'Verano', 'Tequila', 'Vodka'];

  const filteredCocktails = useMemo(() => {
    return COCKTAILS.filter(cocktail => {
      // Filter by Search
      const matchesSearch = cocktail.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            cocktail.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Filter by Category
      const matchesCategory = activeCategory === 'Todos' || 
                              cocktail.tags.map(t => t.toUpperCase()).includes(activeCategory.toUpperCase()) ||
                              (activeCategory === 'Populares' && cocktail.likes > 1000);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pb-24 pt-8 px-4 max-w-7xl mx-auto">
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-toon-border hover:bg-white transition-colors">
            <span className="material-icons-round text-3xl text-toon-dark">menu</span>
          </button>
          <div>
            <h1 className="font-display text-4xl mb-1 text-center md:text-left">Toon Bar</h1>
            <p className="text-gray-500 font-medium md:hidden">¿Qué mezclamos hoy?</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* Search Bar - Moved here for tablet/desktop */}
          <div className="relative group w-full md:w-96 order-2 md:order-1">
            <input 
              type="text" 
              placeholder="Buscar cócteles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-3 border-toon-border rounded-2xl py-3 pl-10 pr-4 font-bold shadow-toon focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-toon-active transition-all placeholder:text-gray-400"
            />
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-toon-primary transition-colors">search</span>
          </div>

          <div className="w-12 h-12 bg-toon-secondary rounded-full border-3 border-toon-border overflow-hidden order-1 md:order-2 self-end md:self-auto">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full" />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar mb-4">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-xl font-bold border-3 border-toon-border shadow-toon transition-all active:scale-95 ${activeCategory === cat ? 'bg-toon-primary text-white shadow-toon-active translate-y-[2px] translate-x-[2px]' : 'bg-white text-toon-dark hover:bg-gray-50'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feed */}
      {filteredCocktails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCocktails.map(cocktail => (
            <div key={cocktail.id} className="flex justify-center">
              <CocktailCard cocktail={cocktail} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 opacity-50">
          <span className="material-icons-round text-6xl mb-4">sentiment_dissatisfied</span>
          <p className="font-bold text-xl">No encontramos esa bebida...</p>
        </div>
      )}
    </div>
  );
};