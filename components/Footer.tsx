import React from 'react';
import { TransitionLink } from './TransitionLink';
import { Logo } from './Logo';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-peena-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo variant="light" className="mb-6" />
            <p className="text-gray-500 font-light leading-relaxed mb-6">
              Peena is a digital sanctuary for those who appreciate the art of tea, coffee, wine & beer. We bring the café experience home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Discover</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><TransitionLink to="/recipes" className="hover:text-peena-red transition-colors">Latest Recipes</TransitionLink></li>
              <li><TransitionLink to="/recipes" className="hover:text-peena-red transition-colors">Trending Now</TransitionLink></li>
              <li><TransitionLink to="/recipes" className="hover:text-peena-red transition-colors">Staff Picks</TransitionLink></li>
              <li><TransitionLink to="/video-tutorials" className="hover:text-peena-red transition-colors">Video Tutorials</TransitionLink></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-serif text-lg mb-6">Community</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><TransitionLink to="/submit-recipe" className="hover:text-peena-red transition-colors">Submit a Recipe</TransitionLink></li>
              <li><TransitionLink to="/journal" className="hover:text-peena-red transition-colors">The Journal Blog</TransitionLink></li>
              <li><TransitionLink to="/events" className="hover:text-peena-red transition-colors">Events</TransitionLink></li>
              <li><TransitionLink to="/ambassadors" className="hover:text-peena-red transition-colors">Ambassadors</TransitionLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><TransitionLink to="/about" className="hover:text-peena-red transition-colors">About Us</TransitionLink></li>
              <li><TransitionLink to="/contact" className="hover:text-peena-red transition-colors">Contact</TransitionLink></li>
              <li><TransitionLink to="/privacy" className="hover:text-peena-red transition-colors">Privacy Policy</TransitionLink></li>
              <li><TransitionLink to="/terms" className="hover:text-peena-red transition-colors">Terms of Service</TransitionLink></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Peena.com. All rights reserved.</p>
          <p>Sip Mindfully.</p>
        </div>
      </div>
    </footer>
  );
};