import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-6 left-4 right-4 z-50 pointer-events-none">
      <div className="bg-toon-dark text-white rounded-full p-2 pl-8 pr-8 shadow-2xl flex justify-between items-center border-2 border-white/10 max-w-md mx-auto pointer-events-auto md:pl-12 md:pr-12 md:max-w-lg md:py-3">
        <Link to="/" className={`flex flex-col items-center transition-colors group ${isActive('/') ? 'text-toon-primary' : 'text-gray-400 hover:text-white'}`}>
          <span className="material-icons-round text-2xl md:text-[32px] group-hover:-translate-y-1 transition-transform">home</span>
          <span className="text-[10px] font-bold mt-1 hidden md:block tracking-wide">INICIO</span>
        </Link>
        
        <Link to="/" className="relative -top-8 md:-top-10">
          <div className="bg-toon-primary w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-toon-bg flex items-center justify-center shadow-toon transform transition-transform hover:-translate-y-1 hover:scale-105 hover:rotate-3">
            <span className="material-icons-round text-3xl md:text-4xl text-white">local_bar</span>
          </div>
        </Link>
        
        <button className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group">
          <span className="material-icons-round text-2xl md:text-[32px] group-hover:-translate-y-1 transition-transform">favorite</span>
          <span className="text-[10px] font-bold mt-1 hidden md:block tracking-wide">FAVORITOS</span>
        </button>
      </div>
    </nav>
  );
};