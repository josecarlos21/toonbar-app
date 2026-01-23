import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COCKTAILS } from '../constants';
import { Button } from '../components/Button';
import { SmartImage } from '../components/SmartImage';

export const Prepare: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cocktail = COCKTAILS.find(c => c.id === id);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Scroll top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep, isCompleted]);

  if (!cocktail || !cocktail.steps) return <div>Error</div>;

  const step = cocktail.steps[currentStep];
  const isLastStep = currentStep === cocktail.steps.length - 1;

  const nextStep = () => {
    if (isLastStep) {
      setIsCompleted(true);
    } else {
      setCurrentStep(curr => curr + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(curr => curr - 1);
  };

  // Completion Screen
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-toon-accent flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
        {/* Confetti Elements */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="confetti-piece rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFFFFF', '#292F36'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random()}s`
            }}
          ></div>
        ))}

        <div className="bg-white p-8 rounded-[3rem] border-4 border-toon-border shadow-toon-active animate-pop-in relative z-10 max-w-sm w-full transform rotate-1">
          <div className="w-24 h-24 bg-toon-primary rounded-full border-3 border-toon-border flex items-center justify-center mx-auto mb-6 shadow-sm">
             <span className="material-icons-round text-5xl text-white">local_bar</span>
          </div>
          <h1 className="font-display text-5xl text-toon-dark mb-2">¡SALUD!</h1>
          <p className="text-xl font-bold text-gray-500 mb-6">Has preparado un magnífico<br/><span className="text-toon-primary">{cocktail.name}</span></p>
          
          <div className="space-y-3">
             <Button fullWidth onClick={() => navigate('/')} className="!bg-toon-dark !text-white hover:!bg-gray-800">
               VOLVER A LA BARRA
             </Button>
             <Button fullWidth variant="outline" onClick={() => navigate(`/recipe/${id}`)}>
               VER RECETA
             </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${step.bgColor} transition-colors duration-500`}>
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/40 transition-colors border border-white/30">
          <span className="material-icons-round text-toon-dark">close</span>
        </button>
        <div className="font-display text-xl text-toon-dark uppercase tracking-widest bg-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
          {cocktail.name}
        </div>
        <div className="w-10 h-10 flex items-center justify-center font-bold bg-white rounded-full border-2 border-toon-border shadow-sm">
          {currentStep + 1}/{cocktail.steps.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24 max-w-md mx-auto w-full text-center">
        
        {/* Dynamic Image Container */}
        <div className="relative w-full aspect-square mb-8 group cursor-pointer" onClick={nextStep}>
          <div className="absolute inset-0 bg-white rounded-[3rem] border-4 border-toon-border transform rotate-3 transition-transform group-hover:rotate-6"></div>
          <div className="absolute inset-0 bg-toon-dark rounded-[3rem] border-4 border-toon-border transform -rotate-2 opacity-10"></div>
          <div className="relative w-full h-full rounded-[3rem] border-4 border-toon-border overflow-hidden shadow-toon bg-white">
            <SmartImage 
              src={step.image} 
              alt={step.title} 
              className="w-full h-full object-cover animate-bounce-slight"
              containerClassName="w-full h-full"
            />
          </div>
          
          {/* Floating Sticker */}
          <div className="absolute -bottom-6 -right-4 bg-toon-primary text-white font-display text-2xl px-6 py-2 rounded-full border-3 border-toon-border shadow-toon transform -rotate-12 z-20">
            {step.title}
          </div>
        </div>

        <h2 
          key={currentStep}
          className="font-display text-4xl mb-4 text-toon-dark drop-shadow-sm mt-4 uppercase animate-pop-in"
        >
          {step.title}
        </h2>
        
        <p className="text-lg font-bold text-gray-700 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/50 shadow-sm">
          {step.description}
        </p>

      </div>

      {/* Footer Controls */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t-3 border-toon-border rounded-t-[2.5rem] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4 max-w-md mx-auto">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={currentStep === 0}
            className="flex-1"
          >
            ATRÁS
          </Button>
          <Button 
            variant="primary" 
            onClick={nextStep} 
            className="flex-[2] flex items-center justify-center gap-2"
          >
            <span>{isLastStep ? '¡TERMINAR!' : 'SIGUIENTE'}</span>
            <span className="material-icons-round">{isLastStep ? 'celebration' : 'arrow_forward'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};