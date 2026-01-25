
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { COCKTAILS } from '../constants';
import { FamilyCard } from '../components/FamilyCard';
import { PullToRefresh } from '../components/PullToRefresh';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  const categories = ['Todos', 'Mexicano', 'Clásico', 'Refrescante', 'Sin Alcohol', 'Tequila', 'Gin', 'Ron', 'Vodka'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Lógica de refresco
  const handleRefresh = async () => {
    // Simulamos una carga de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reseteamos estados
    setSearchTerm('');
    setActiveCategory('Todos');
    setExpandedFamily(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Group cocktails by family
  const families = useMemo(() => {
    const groups: Record<string, typeof COCKTAILS> = {};
    COCKTAILS.forEach(c => {
      const fam = c.family || 'Otros';
      
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || 
          c.name.toLowerCase().includes(searchLower) || 
          c.tags.some(t => t.toLowerCase().includes(searchLower)) ||
          fam.toLowerCase().includes(searchLower);

      let matchesCategory = true;
      if (activeCategory !== 'Todos') {
          const catLower = activeCategory.toLowerCase();
          matchesCategory = c.tags.some(t => t.toLowerCase() === catLower) || 
                            c.tags.some(t => t.toLowerCase().includes(catLower));
      }

      if (matchesSearch && matchesCategory) {
        if (!groups[fam]) groups[fam] = [];
        groups[fam].push(c);
      }
    });
    return groups;
  }, [searchTerm, activeCategory]);

  const handleToggle = (family: string) => {
    setExpandedFamily(prev => prev === family ? null : family);
  };

  const handleRandom = () => {
    const randomCocktail = COCKTAILS[Math.floor(Math.random() * COCKTAILS.length)];
    navigate(`/recipe/${randomCocktail.id}`);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="pb-24 pt-8 px-4 max-w-7xl mx-auto min-h-screen">
        <header className="mb-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4 animate-fade-in-up">
              <div className="w-14 h-14 bg-toon-accent rounded-full border-3 border-toon-border flex items-center justify-center shadow-toon-sm rotate-3 hover:rotate-12 transition-transform cursor-pointer" onClick={handleRandom} title="¡Sorpréndeme!">
                  <span className="material-icons-round text-3xl text-toon-dark">shuffle</span>
              </div>
              <div>
                  <h1 className="font-display text-5xl mb-0 text-toon-dark leading-none">Toon Bar</h1>
                  <p className="text-gray-500 font-bold text-sm tracking-wider">FRACTAL EDITION</p>
              </div>
              </div>
              
              <div className="w-full md:w-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="relative group w-full md:w-80">
                  <input 
                  type="text" 
                  placeholder="Busca tu veneno..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border-3 border-toon-border rounded-2xl py-3 pl-12 pr-4 font-bold shadow-toon focus:outline-none focus:shadow-toon-active focus:translate-x-[2px] focus:translate-y-[2px] transition-all placeholder:text-gray-300"
                  />
                  <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl group-focus-within:text-toon-primary transition-colors">search</span>
              </div>
              </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {categories.map((cat) => (
                  <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold border-2 border-toon-border shadow-sm transition-all active:scale-95 min-h-[48px] flex items-center ${
                          activeCategory === cat 
                          ? 'bg-toon-dark text-white shadow-toon' 
                          : 'bg-white text-gray-500 hover:bg-gray-50'
                      }`}
                  >
                      {cat}
                  </button>
              ))}
          </div>
        </header>

        <div className="space-y-2">
          {Object.keys(families).length > 0 ? (
            Object.entries(families).map(([family, cocktails], idx) => (
              <div key={family} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <FamilyCard 
                  family={family} 
                  cocktails={cocktails} 
                  isExpanded={expandedFamily === family || searchTerm !== '' || activeCategory !== 'Todos'} 
                  onToggle={() => handleToggle(family)}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-50 flex flex-col items-center animate-pop-in">
              <span className="material-icons-round text-8xl mb-4 text-gray-300">liquor</span>
              <p className="font-bold text-2xl text-gray-400">¡Se acabó el alcohol!</p>
              <p className="text-gray-400">No encontramos esa bebida.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('Todos'); }} 
                className="mt-4 text-toon-primary font-bold underline"
              >
                Ver todo
              </button>
            </div>
          )}
        </div>
        
        {/* Footer Info */}
        <div className="mt-16 mb-8 text-center border-t-2 border-gray-100 pt-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <p className="font-display text-gray-300 text-xl tracking-wider uppercase">Toon Bar &copy; 2024</p>
          <p className="text-xs text-gray-400 font-bold mt-1">Beba con responsabilidad • Estilo Fractal</p>
        </div>

        <div className="h-10"></div>
      </div>
    </PullToRefresh>
  );
};
