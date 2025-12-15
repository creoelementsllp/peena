import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  state: 'idle' | 'covering' | 'revealing';
}

export const PageTransition: React.FC<PageTransitionProps> = ({ state }) => {
  // Internal state to handle the "snap back" without animation when going to idle
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (state === 'idle') {
      // Small timeout to allow the render cycle to catch the class change to 'duration-0'
      const timer = setTimeout(() => {
          setIsResetting(true);
      }, 0);
      
      // Remove resetting flag after it's moved back
      const resetTimer = setTimeout(() => setIsResetting(false), 100);
      
      return () => {
          clearTimeout(timer);
          clearTimeout(resetTimer);
      };
    }
  }, [state]);

  const getTransform = () => {
    if (state === 'idle') return 'translate-y-[120%]';
    if (state === 'covering') return 'translate-y-0';
    if (state === 'revealing') return 'translate-y-[-120%]';
    return 'translate-y-[120%]';
  };
  
  // When resetting (idle), we want 0 duration to snap back instantly to bottom
  const transitionClass = (state === 'idle' || isResetting) 
    ? 'transition-transform duration-0' 
    : 'transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]';

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center">
       {/* The Liquid Layer */}
       <div className={`absolute left-0 right-0 h-[100vh] bg-peena-red flex items-center justify-center ${getTransform()} ${transitionClass}`}>
          
          {/* Top Liquid Surface (Convex) */}
          <div className="absolute -top-24 left-0 w-full h-24 overflow-hidden">
             <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-peena-red fill-current">
                 <path d="M0,320 L0,160 C220,280, 500,320, 720,160 C940,0, 1220,40, 1440,160 L1440,320 Z"></path>
             </svg>
          </div>

          {/* Bottom Liquid Surface (Concave/Convex depending on direction) */}
          <div className="absolute -bottom-24 left-0 w-full h-24 overflow-hidden rotate-180">
             <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-peena-red fill-current">
                 <path d="M0,320 L0,160 C220,280, 500,320, 720,160 C940,0, 1220,40, 1440,160 L1440,320 Z"></path>
             </svg>
          </div>

          {/* Logo in the middle of the transition */}
          <div className={`text-white transform transition-all duration-700 delay-100 ${state === 'covering' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}`}>
             <span className="font-serif text-6xl font-bold tracking-tight">Peena<span className="text-peena-black">.</span>com</span>
          </div>

       </div>
    </div>
  );
}
