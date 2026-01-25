
import React, { useState, useEffect, useRef } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className = '', containerClassName = '', ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setStatus('loading');
  }, [src]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observerRef.current?.disconnect();
      }
    }, { rootMargin: '100px' });

    if (containerRef.current) observerRef.current.observe(containerRef.current);
    return () => observerRef.current?.disconnect();
  }, []);

  const handleRetry = () => {
    setStatus('loading');
    const separator = src.includes('?') ? '&' : '?';
    setCurrentSrc(`${src}${separator}retry=${Date.now()}`);
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-gray-100 ${containerClassName}`}>
      {status !== 'loaded' && status !== 'error' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
           <span className="material-icons-round text-gray-400 text-3xl animate-bounce">image</span>
        </div>
      )}
      
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-50 text-center">
           <span className="material-icons-round text-toon-primary text-4xl mb-2">broken_image</span>
           <button 
            onClick={handleRetry}
            className="text-xs font-bold uppercase tracking-widest text-toon-dark underline"
           >
             Reintentar
           </button>
        </div>
      )}

      {isVisible && (
        <img
          src={currentSrc}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`${className} transition-opacity duration-500 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};
