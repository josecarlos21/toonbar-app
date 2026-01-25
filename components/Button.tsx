import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyle = "font-sans font-bold transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-toon-active disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center";
  
  const variants = {
    primary: "bg-toon-primary text-white border-3 border-toon-border shadow-toon rounded-xl py-3 px-6 hover:shadow-toon-hover",
    secondary: "bg-toon-secondary text-white border-3 border-toon-border shadow-toon rounded-xl py-3 px-6 hover:shadow-toon-hover",
    outline: "bg-white text-toon-dark border-3 border-toon-border shadow-toon rounded-xl py-3 px-6 hover:bg-gray-50",
    // Cambio: Icon button ahora tiene fondo blanco sólido y borde para visibilidad garantizada
    icon: "bg-white border-2 border-toon-border text-toon-dark w-12 h-12 rounded-full hover:bg-gray-50 shadow-sm p-0 z-20"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};