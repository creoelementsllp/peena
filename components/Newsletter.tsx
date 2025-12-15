import React from 'react';
import { Button } from './Button';

export const Newsletter: React.FC = () => {
  return (
    <section id="newsletter-section" className="relative py-32 bg-peena-stone overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-peena-black mb-6">
            Join the <span className="italic text-peena-red">Inner Circle</span>
          </h2>
          <p className="text-lg text-gray-500 font-light mb-12 leading-relaxed">
            Curated recipes and exclusive invitations. No noise, just taste.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white border border-gray-200 px-8 py-4 rounded-full text-peena-black placeholder-gray-400 focus:outline-none focus:border-peena-red/30 focus:ring-1 focus:ring-peena-red/30 transition-all text-sm"
            />
            <Button variant="primary" className="px-10">Sign Up</Button>
          </form>
        </div>
      </div>
    </section>
  );
};