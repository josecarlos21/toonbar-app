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
  const baseStyle = "font-sans font-bold transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-toon-active disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-toon-primary text-white border-3 border-toon-border shadow-toon rounded-xl py-3 px-6 hover:shadow-toon-hover",
    secondary: "bg-toon-secondary text-white border-3 border-toon-border shadow-toon rounded-xl py-3 px-6 hover:shadow-toon-hover",
    outline: "bg-white text-toon-dark border-3 border-toon-border shadow-toon rounded-xl py-3 px-6 hover:bg-gray-50",
    icon: "bg-white/20 backdrop-blur-md border-2 border-white/50 text-white p-3 rounded-full hover:bg-white/30"
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