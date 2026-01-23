import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { COCKTAILS } from '../constants';
import { FamilyCard } from '../components/FamilyCard';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);
  const navigate = useNavigate();

  // Group cocktails by family
  const families = useMemo(() => {
    const groups: Record<string, typeof COCKTAILS> = {};
    COCKTAILS.forEach(c => {
      const fam = c.family || 'Otros';
      
      // Search logic: If search matches cocktail name, family name, or tags, include it
      const matchesSearch = searchTerm === '' || 
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          c.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
          fam.toLowerCase().includes(searchTerm.toLowerCase());

      if (matchesSearch) {
        if (!groups[fam]) groups[fam] = [];
        groups[fam].push(c);
      }
    });
    return groups;
  }, [searchTerm]);

  const handleToggle = (family: string) => {
    setExpandedFamily(prev => prev === family ? null : family);
  };

  const handleRandom = () => {
    const randomCocktail = COCKTAILS[Math.floor(Math.random() * COCKTAILS.length)];
    navigate(`/recipe/${randomCocktail.id}`);
  };

  return (
    <div className="pb-24 pt-8 px-4 max-w-7xl mx-auto min-h-screen">
      <header className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
      </header>

      <div className="space-y-2">
        {Object.keys(families).length > 0 ? (
          Object.entries(families).map(([family, cocktails], idx) => (
            <div key={family} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <FamilyCard 
                family={family} 
                cocktails={cocktails} 
                isExpanded={expandedFamily === family || searchTerm !== ''} // Auto expand on search
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
              onClick={() => setSearchTerm('')} 
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
  );
};