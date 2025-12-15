import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedDaily } from './components/FeaturedDaily';
import { RecipeGrid } from './components/RecipeGrid';
import { BlogSection } from './components/BlogSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { RecipesPage } from './components/RecipesPage';
import { JournalsPage } from './components/JournalsPage';
import { RecipeDetailPage } from './components/RecipeDetailPage';
import { JournalDetailPage } from './components/JournalDetailPage';
import { SavedItemsPage } from './components/SavedItemsPage';
import { SimplePage } from './components/SimplePage';
import { ProductsPage } from './components/ProductsPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ShopPreview } from './components/ShopPreview';
import { PageTransition } from './components/PageTransition';
import { TransitionContext } from './context/TransitionContext';
import { CartProvider } from './context/CartContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const [transitionState, setTransitionState] = useState<'idle' | 'covering' | 'revealing'>('idle');

  const navigateWithTransition = useCallback((path: string) => {
    if (window.location.pathname === path) return;
    
    setTransitionState('covering');
    
    // Wait for cover animation
    setTimeout(() => {
      navigate(path);
      setTransitionState('revealing');
      
      // Wait for reveal animation
      setTimeout(() => {
        setTransitionState('idle');
      }, 800);
    }, 800);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      <div className="min-h-screen bg-peena-stone selection:bg-peena-red selection:text-white">
        <PageTransition state={transitionState} />
        <ScrollToTop />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedDaily />
                <RecipeGrid />
                
                {/* Visual Break / Quote Section */}
                <section className="py-24 bg-white text-center px-6">
                  <div className="container mx-auto">
                     <blockquote className="font-serif text-3xl md:text-5xl italic leading-tight max-w-4xl mx-auto text-peena-black/90">
                      <span className="text-peena-red">"</span>First you take a drink, then the drink takes a drink, then the drink takes you.<span className="text-peena-red">"</span>
                    </blockquote>
                    <cite className="block mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">— F. Scott Fitzgerald</cite>
                  </div>
                </section>

                <ShopPreview />
                <BlogSection />
                <Newsletter />
              </>
            } />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
            <Route path="/journal" element={<JournalsPage />} />
            <Route path="/journal/:slug" element={<JournalDetailPage />} />
            <Route path="/saved" element={<SavedItemsPage />} />
            <Route path="/shop" element={<ProductsPage />} />
            <Route path="/shop/:slug" element={<ProductDetailPage />} />
            
            <Route path="/about" element={
              <SimplePage title="About Us">
                <p>Welcome to Peena, where the art of mixology meets the comfort of home. We are dedicated to curating the finest recipes and stories for the modern connoisseur.</p>
                <p className="mt-4">Our mission is to demystify the world of cocktails and spirits, making it accessible to everyone from the curious beginner to the seasoned bartender.</p>
              </SimplePage>
            } />
            
            <Route path="/contact" element={
              <SimplePage title="Contact Us">
                <p>We'd love to hear from you! Whether you have a question about a recipe, a suggestion for our journal, or just want to say cheers.</p>
                <p className="mt-4">Email us at: <a href="mailto:hello@peena.com" className="text-peena-red hover:underline">hello@peena.com</a></p>
              </SimplePage>
            } />
            
            <Route path="/privacy" element={
              <SimplePage title="Privacy Policy">
                <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>
                <p className="mt-4">We do not sell your data to third parties. We only use your information to improve your experience on Peena.com.</p>
              </SimplePage>
            } />
            
            <Route path="/terms" element={
              <SimplePage title="Terms of Service">
                <p>By using Peena.com, you agree to these terms. Please read them carefully.</p>
                <p className="mt-4">All content on this site is for informational purposes only. Please drink responsibly.</p>
              </SimplePage>
            } />
            
            <Route path="/submit-recipe" element={
              <SimplePage title="Submit a Recipe">
                <p>Have a signature cocktail you'd like to share with the world? We'd love to feature it!</p>
                <p className="mt-4">Send your recipe, a photo, and a brief story to <a href="mailto:submit@peena.com" className="text-peena-red hover:underline">submit@peena.com</a>.</p>
              </SimplePage>
            } />
            
            <Route path="/events" element={
              <SimplePage title="Events">
                <p>Join us for exclusive tastings, masterclasses, and community gatherings.</p>
                <p className="mt-4">Check back soon for our upcoming event schedule.</p>
              </SimplePage>
            } />
            
            <Route path="/ambassadors" element={
              <SimplePage title="Ambassadors">
                <p>Meet the passionate individuals who represent Peena around the world.</p>
                <p className="mt-4">Interested in becoming an ambassador? Contact us!</p>
              </SimplePage>
            } />
            
            <Route path="/video-tutorials" element={
              <SimplePage title="Video Tutorials">
                <p>Watch and learn from expert bartenders as they demonstrate techniques and recipes.</p>
                <p className="mt-4">Coming soon to Peena.com.</p>
              </SimplePage>
            } />
            
            <Route path="/join-club" element={
              <SimplePage title="Join the Club">
                <p>Join our exclusive club for special offers and updates.</p>
              </SimplePage>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </TransitionContext.Provider>
  );
}

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;