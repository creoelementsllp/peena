import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Search, User, X, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { Logo } from './Logo';
import { TransitionLink } from './TransitionLink';
import { useTransition } from '../context/TransitionContext';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { navigateWithTransition } = useTransition();
  const { totalItems } = useCart();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigateWithTransition(path);
    setIsMenuOpen(false);
  };

  // Text color logic - always dark if menu is open
  const textColorClass = isMenuOpen ? 'text-white' : (isScrolled || !isHome ? 'text-peena-black' : 'text-white');
  const iconHoverClass = isMenuOpen ? 'hover:text-peena-red' : (isScrolled || !isHome ? 'hover:text-peena-red' : 'hover:text-white/70');
  const bgClass = isMenuOpen ? 'bg-transparent' : (isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8');

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${bgClass}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Left: Menu */}
          <div className="flex items-center gap-6 relative z-50">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1 transition-colors group ${textColorClass}`}
            >
              {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} className={`${iconHoverClass} transition-colors`} />}
            </button>
            <span className={`hidden lg:block text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 lg:opacity-100 transition-opacity duration-500 ${textColorClass}`}>
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-50 cursor-pointer" onClick={() => handleNavClick('/')}>
            <Logo variant={(isScrolled || isMenuOpen || !isHome) ? 'dark' : 'light'} />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-8 relative z-50">
            {!isMenuOpen && (
              <div className="hidden md:flex items-center gap-8">
                <TransitionLink 
                  to="/recipes"
                  className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${textColorClass} hover:text-peena-red ${isActive('/recipes') ? 'text-peena-red' : ''}`}
                >
                  Recipes
                </TransitionLink>
                <TransitionLink 
                  to="/journal"
                  className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${textColorClass} hover:text-peena-red ${isActive('/journal') ? 'text-peena-red' : ''}`}
                >
                  Journal
                </TransitionLink>
              </div>
            )}
            
            <div className="flex items-center gap-6">
              <button className={`transition-colors ${textColorClass} ${iconHoverClass}`}>
                <Search size={20} strokeWidth={1} />
              </button>
              <TransitionLink to="/saved" className={`transition-colors ${textColorClass} ${iconHoverClass} ${isActive('/saved') ? 'text-peena-red' : ''}`}>
                <Heart size={20} strokeWidth={1} />
              </TransitionLink>
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`relative transition-colors ${textColorClass} ${iconHoverClass}`}
              >
                <ShoppingCart size={20} strokeWidth={1} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-peena-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className={`transition-colors ${textColorClass} ${iconHoverClass}`}>
                <User size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-peena-black z-40 transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex">
          <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-32 space-y-4 md:space-y-6">
            {[
              { label: 'Home', path: '/' },
              { label: 'Shop', path: '/shop' },
              { label: 'Recipes', path: '/recipes' },
              { label: 'Journal', path: '/journal' },
              { label: 'Events', path: '/events' },
              { label: 'Saved', path: '/saved' },
            ].map((item, index) => (
              <button 
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="group block text-5xl md:text-7xl font-serif text-white hover:text-peena-red transition-colors duration-300 flex items-center gap-4 text-left w-full"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-8 md:-ml-12 text-peena-red">
                  <ChevronRight size={32} />
                </span>
                {item.label}
              </button>
            ))}
          </div>
            
          <div className="hidden md:flex flex-col justify-center border-l border-white/10 pl-12 text-white/60 space-y-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-peena-red mb-4">Featured</h4>
              <div className="aspect-video w-full max-w-sm bg-white/5 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img src="/images/hero-bg.jpg" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Featured" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-serif text-2xl">Summer Collections</span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};