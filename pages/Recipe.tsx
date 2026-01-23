import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COCKTAILS } from '../constants';
import { Button } from '../components/Button';
import { CocktailCard } from '../components/CocktailCard';
import { isFavorite, toggleFavorite } from '../utils/storage';

export const Recipe: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [isFav, setIsFav] = useState(false);

  // Find current cocktail
  const cocktail = COCKTAILS.find(c => c.id === id);
  
  // Find related cocktails (Fractal logic: same family, excluding current)
  const relatedCocktails = cocktail 
    ? COCKTAILS.filter(c => c.family === cocktail.family && c.id !== cocktail.id)
    : [];

  useEffect(() => {
    if (cocktail) {
      setIsFav(isFavorite(cocktail.id));
    }
    window.scrollTo(0, 0);
    setCheckedIngredients([]);
  }, [id, cocktail]);

  if (!cocktail) return <div>Coctel no encontrado</div>;

  const toggleIngredient = (name: string) => {
    setCheckedIngredients(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Toon Bar: ${cocktail.name}`,
          text: `Aprende a preparar un ${cocktail.name} en Toon Bar.`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleFavClick = () => {
    const newState = toggleFavorite(cocktail.id);
    setIsFav(newState);
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-32 animate-fade-in-up">
      <div className="md:flex md:items-start md:min-h-[60vh] max-w-7xl mx-auto">
        {/* Left: Hero Image Section */}
        <div className="relative h-[50vh] w-full md:h-[600px] md:w-2/5 md:sticky md:top-0">
          <img src={cocktail.image} alt={cocktail.name} className="w-full h-full object-cover md:rounded-br-[3rem] shadow-lg" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white md:hidden"></div>
          
          {/* Navigation */}
          <div className="absolute top-6 left-4 right-4 flex justify-between items-start z-10">
            <Button variant="icon" onClick={() => navigate(-1)}>
              <span className="material-icons-round">arrow_back</span>
            </Button>
            <div className="flex gap-3">
              <Button variant="icon" onClick={handleShare}>
                <span className="material-icons-round">share</span>
              </Button>
              <Button variant="icon" onClick={handleFavClick} className={isFav ? '!bg-toon-primary !border-toon-primary' : ''}>
                <span className={`material-icons-round ${isFav ? 'text-white' : 'text-white'}`}>
                  {isFav ? 'favorite' : 'favorite_border'}
                </span>
              </Button>
            </div>
          </div>

          {/* Floating Title Card - Mobile Only */}
          <div className="absolute -bottom-16 left-4 right-4 md:hidden z-20">
            <div className="bg-toon-accent border-3 border-toon-border rounded-3xl p-6 shadow-toon text-center transform -rotate-1">
              <h1 className="font-display text-4xl text-toon-dark mb-1">{cocktail.name}</h1>
              <div className="flex justify-center gap-4 text-sm font-bold opacity-80">
                <span className="flex items-center gap-1"><span className="material-icons-round text-base">timer</span> {cocktail.time}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><span className="material-icons-round text-base">bolt</span> {cocktail.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="mt-20 px-6 max-w-lg mx-auto md:mt-0 md:w-3/5 md:px-12 md:max-w-none md:py-12">
          
          {/* Desktop Title Header */}
          <div className="hidden md:block mb-8">
            <div className="flex items-center gap-4 mb-2">
               <span className="bg-toon-dark text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{cocktail.family}</span>
            </div>
            <h1 className="font-display text-6xl text-toon-dark mb-4">{cocktail.name}</h1>
            <div className="flex gap-6 text-lg font-bold text-gray-500">
              <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full"><span className="material-icons-round">timer</span> {cocktail.time}</span>
              <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full"><span className="material-icons-round">bolt</span> {cocktail.difficulty}</span>
              <span className="flex items-center gap-2 bg-toon-primary/10 text-toon-primary px-4 py-2 rounded-full"><span className="material-icons-round">star</span> {cocktail.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-center md:text-left mb-8 font-medium leading-relaxed text-lg border-l-4 border-toon-secondary pl-4">
            "{cocktail.description}"
          </p>

          {/* Ingredients */}
          <div className="mb-10">
            <h2 className="font-display text-3xl mb-6 flex items-center gap-3">
              <span className="bg-toon-secondary w-10 h-10 rounded-xl border-3 border-toon-border flex items-center justify-center text-white shadow-[3px_3px_0_#000]">
                <span className="material-icons-round">shopping_basket</span>
              </span>
              Ingredientes
            </h2>
            <div className="space-y-3">
              {cocktail.ingredients.map(ing => (
                <div 
                  key={ing.name} 
                  onClick={() => toggleIngredient(ing.name)}
                  className={`flex items-center p-4 rounded-2xl border-3 cursor-pointer transition-all duration-200 select-none ${
                    checkedIngredients.includes(ing.name) 
                      ? 'bg-green-50 border-green-500 opacity-60 scale-[0.99]' 
                      : 'bg-white border-gray-200 hover:border-toon-border hover:shadow-toon hover:-translate-y-1'
                  }`}
                >
                  <div className={`w-12 h-12 ${ing.color} rounded-full flex items-center justify-center mr-4 border-2 border-toon-border`}>
                    <span className="material-icons-round text-toon-dark">{ing.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-toon-dark">{ing.name}</p>
                  </div>
                  <div className="font-bold text-toon-secondary bg-toon-secondary/10 px-3 py-1 rounded-lg whitespace-nowrap">
                    {ing.amount}
                  </div>
                  <div className={`ml-4 w-6 h-6 rounded-full border-2 border-toon-border flex items-center justify-center transition-colors ${checkedIngredients.includes(ing.name) ? 'bg-green-500 border-green-500' : 'bg-white'}`}>
                    {checkedIngredients.includes(ing.name) && <span className="material-icons-round text-white text-sm">check</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Sections */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        
        {/* Pairing Section */}
        {cocktail.pairing && (
          <div>
            <h2 className="font-display text-3xl mb-6 flex items-center gap-3">
              <span className="bg-toon-primary w-10 h-10 rounded-xl border-3 border-toon-border flex items-center justify-center text-white shadow-[3px_3px_0_#000]">
                <span className="material-icons-round">restaurant</span>
              </span>
              Maridaje Perfecto (Guak!)
            </h2>
            <div className="bg-white rounded-3xl border-3 border-toon-border shadow-toon overflow-hidden group md:flex transform transition-all hover:-translate-y-1 hover:shadow-toon-hover">
              <div className="relative h-48 md:h-auto md:w-1/2 overflow-hidden">
                <img 
                  src={cocktail.pairing.image} 
                  alt={cocktail.pairing.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <h3 className="font-display text-3xl text-white tracking-wide drop-shadow-md">{cocktail.pairing.name}</h3>
                </div>
              </div>
              <div className="p-6 bg-yellow-50 md:w-1/2 flex items-center">
                <p className="font-bold text-gray-700 text-lg leading-relaxed">{cocktail.pairing.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Start Button */}
        <div className="flex justify-center">
          <Button 
            fullWidth 
            onClick={() => navigate(`/prepare/${id}`)}
            className="flex items-center justify-center gap-3 text-xl py-4 md:max-w-md w-full shadow-toon-active hover:shadow-toon-hover transition-all animate-bounce-slight"
          >
            <span>COMENZAR PREPARACIÓN</span>
            <span className="material-icons-round text-2xl">play_circle</span>
          </Button>
        </div>

        {/* Fractal Suggestions: Other cocktails in same family */}
        {relatedCocktails.length > 0 && (
          <div className="border-t-3 border-gray-100 pt-10">
            <h3 className="font-display text-2xl text-gray-400 mb-6 text-center uppercase tracking-widest">
              Más de la familia {cocktail.family}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCocktails.map(related => (
                <CocktailCard key={related.id} cocktail={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};