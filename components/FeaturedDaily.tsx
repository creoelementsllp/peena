import React from 'react';
import { TransitionLink } from './TransitionLink';
import { Button } from './Button';
import { Clock, Users, Award } from 'lucide-react';
import { generateSlug } from '../utils/slugs';

export const FeaturedDaily: React.FC = () => {
  const featuredSlug = generateSlug('Golden Oolong Sunrise');

  return (
    <section className="py-32 bg-peena-stone relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
          
          {/* Image Side with soft rounding */}
          <div className="w-full lg:w-5/12 relative group">
            <TransitionLink to={`/recipes/${featuredSlug}`} className="block relative z-10 aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/5">
              <img 
                src="/images/golden-oolong-sunrise.jpg" 
                alt="Tea of the Day" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-peena-black px-6 py-2 rounded-full shadow-sm">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Daily Pick</span>
              </div>
            </TransitionLink>
            
            {/* Subtle blurred accent behind */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-peena-red/5 rounded-[3rem] -z-10 blur-2xl"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-6/12 space-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif text-peena-black leading-[0.95] tracking-tight mb-6">
                Golden <span className="italic text-peena-red">Oolong</span> <br/> Sunrise
              </h2>
              <div className="w-12 h-1 bg-peena-red/20 rounded-full"></div>
            </div>
            
            <p className="text-gray-500 leading-loose text-lg font-light max-w-md">
              A masterfully crafted oolong tea with honey undertones and floral complexity. The perfect balance of tradition and refinement.
            </p>
            
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} />
                <span className="text-xs font-bold uppercase tracking-widest text-peena-black">8 Mins</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Users size={16} />
                <span className="text-xs font-bold uppercase tracking-widest text-peena-black">Serves 1</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Award size={16} />
                <span className="text-xs font-bold uppercase tracking-widest text-peena-black">Medium</span>
              </div>
            </div>
            
            <div className="pt-4">
              <TransitionLink to={`/recipes/${featuredSlug}`}>
                <Button variant="outline">View Recipe</Button>
              </TransitionLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
