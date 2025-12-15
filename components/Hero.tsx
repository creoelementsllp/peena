import React from 'react';
import { TransitionLink } from './TransitionLink';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const buttonBaseStyle = "px-8 py-3 transition-all duration-500 ease-out font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-full inline-block text-center flex items-center justify-center";

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
      ></div>
      
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        
        <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in-up">
          Est. 2024
        </span>

        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif font-normal mb-8 animate-fade-in-up delay-100 leading-none tracking-tight opacity-95">
          The Art of <br/>
          {/* Changed text color to white for contrast, kept red accent in the underline svg */}
          <span className="italic font-light text-white relative inline-block">
            Sipping
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-peena-red opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-lg mb-12 font-light animate-fade-in-up delay-200 leading-relaxed tracking-wide">
          Curated teas, coffees, wines & beers for the modern connoisseur.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up delay-300">
          <TransitionLink 
            to="/recipes"
            className={`${buttonBaseStyle} backdrop-blur-sm bg-white/10 border border-white/40 text-white hover:bg-white hover:text-black hover:border-white min-w-[160px]`}
          >
            Explore
          </TransitionLink>
          <TransitionLink 
            to="/join-club"
            className={`${buttonBaseStyle} bg-peena-red/90 text-white hover:bg-peena-red border border-transparent min-w-[160px]`}
          >
            Join Club
          </TransitionLink>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/30 flex flex-col items-center gap-3 animate-pulse">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>
    </header>
  );
};