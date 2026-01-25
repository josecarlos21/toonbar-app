import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-6 left-4 right-4 z-50 pointer-events-none">
      <div className="bg-toon-dark text-white rounded-full p-2 pl-8 pr-8 shadow-2xl flex justify-between items-center border-2 border-white/10 max-w-md mx-auto pointer-events-auto md:pl-12 md:pr-12 md:max-w-lg md:py-3 transition-transform hover:scale-[1.02]">
        <Link to="/" className={`flex flex-col items-center transition-colors group ${isActive('/') ? 'text-toon-primary' : 'text-gray-400 hover:text-white'}`}>
          <span className="material-icons-round text-2xl md:text-[32px] group-hover:-translate-y-1 transition-transform">home</span>
          <span className="text-[10px] font-bold mt-1 hidden md:block tracking-wide">INICIO</span>
        </Link>
        
        <Link to="/" className="relative -top-8 md:-top-10">
          <div className="bg-toon-primary w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-toon-bg flex items-center justify-center shadow-toon transform transition-all hover:-translate-y-2 hover:rotate-6 active:scale-90">
            <span className="material-icons-round text-3xl md:text-4xl text-white">local_bar</span>
          </div>
        </Link>
        
        <Link to="/favorites" className={`flex flex-col items-center transition-colors group ${isActive('/favorites') ? 'text-toon-primary' : 'text-gray-400 hover:text-white'}`}>
          <span className="material-icons-round text-2xl md:text-[32px] group-hover:-translate-y-1 transition-transform">favorite</span>
          <span className="text-[10px] font-bold mt-1 hidden md:block tracking-wide">FAVS</span>
        </Link>
      </div>
    </nav>
  );
};