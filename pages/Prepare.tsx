import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COCKTAILS } from '../constants';
import { Button } from '../components/Button';

export const Prepare: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cocktail = COCKTAILS.find(c => c.id === id);
  const [currentStep, setCurrentStep] = useState(0);

  if (!cocktail || !cocktail.steps) return <div>Error</div>;

  const step = cocktail.steps[currentStep];
  const isLastStep = currentStep === cocktail.steps.length - 1;

  const nextStep = () => {
    if (isLastStep) {
      navigate('/');
    } else {
      setCurrentStep(curr => curr + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(curr => curr - 1);
  };

  return (
    <div className={`min-h-screen flex flex-col ${step.bgColor} transition-colors duration-500`}>
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
          <span className="material-icons-round text-toon-dark">close</span>
        </button>
        <div className="font-display text-xl text-toon-dark uppercase tracking-widest">
          {cocktail.name}
        </div>
        <div className="w-10 h-10 flex items-center justify-center font-bold bg-white rounded-full border-2 border-toon-border shadow-sm">
          {currentStep + 1}/{cocktail.steps.length}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24 max-w-md mx-auto w-full text-center">
        
        {/* Dynamic Image Container */}
        <div className="relative w-full aspect-square mb-8 group">
          <div className="absolute inset-0 bg-white rounded-[3rem] border-4 border-toon-border transform rotate-3 transition-transform group-hover:rotate-6"></div>
          <div className="absolute inset-0 bg-toon-dark rounded-[3rem] border-4 border-toon-border transform -rotate-2 opacity-10"></div>
          <div className="relative w-full h-full rounded-[3rem] border-4 border-toon-border overflow-hidden shadow-toon bg-white">
            <img 
              src={step.image} 
              alt={step.title} 
              className="w-full h-full object-cover animate-bounce-slight"
            />
          </div>
          
          {/* Floating Sticker */}
          <div className="absolute -bottom-6 -right-4 bg-toon-primary text-white font-display text-2xl px-6 py-2 rounded-full border-3 border-toon-border shadow-toon transform -rotate-12">
            {step.title}
          </div>
        </div>

        <h2 
          key={currentStep}
          className="font-display text-4xl mb-4 text-toon-dark drop-shadow-sm mt-4 uppercase animate-pop-bounce"
        >
          {step.title}
        </h2>
        
        <p className="text-lg font-bold text-gray-700 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border-2 border-white/50">
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