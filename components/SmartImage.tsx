import React, { useEffect } from 'react';
import { useAssets } from '../context/AssetContext';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className = '', containerClassName = '', ...props }) => {
  const { assets, loadAsset } = useAssets();
  const status = assets[src] || 'idle';

  useEffect(() => {
    loadAsset(src);
  }, [src, loadAsset]);

  const isLoaded = status === 'loaded';
  const isError = status === 'error';

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Skeleton / Placeholder */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
          <div className="w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-toon-secondary to-transparent scale-150"></div>
          <span className="material-icons-round text-gray-300 text-4xl animate-bounce">image</span>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center z-10 p-4 text-center">
          <span className="material-icons-round text-gray-400 text-4xl mb-2">broken_image</span>
          <span className="text-xs text-gray-400 font-bold uppercase">No signal</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-700 ease-out ${className} ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-md'
        }`}
        {...props}
      />
    </div>
  );
};