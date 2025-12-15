import React from 'react';
import { TransitionLink } from './TransitionLink';
import { Heart } from 'lucide-react';
import { RECIPES } from '../data/recipeData';
import { generateSlug } from '../utils/slugs';
import { useSavedItems } from '../hooks/useSavedItems';

export const RecipeGrid: React.FC = () => {
  // Get first 4 recipes for trending section
  const TRENDING_RECIPES = RECIPES.slice(0, 4);
  const { isRecipeSaved, toggleRecipe } = useSavedItems();

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-peena-red text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-peena-black">Trending Now</h2>
          </div>
          <TransitionLink 
            to="/recipes"
            className="hidden md:block border-b border-gray-300 pb-1 text-xs font-bold tracking-[0.2em] uppercase hover:text-peena-red hover:border-peena-red transition-all"
          >
            View All
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {TRENDING_RECIPES.map((recipe) => (
            <div 
              key={recipe.id} 
              className="group relative"
            >
              <TransitionLink to={`/recipes/${generateSlug(recipe.title)}`} className="block">
                <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-[2rem] shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={recipe.imageUrl} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-peena-black">{recipe.category}</span>
                  </div>
                </div>
                
                <div className="text-center space-y-2 px-2">
                  <h3 className="text-xl font-serif text-peena-black group-hover:text-peena-red transition-colors duration-300">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium tracking-wide uppercase">
                    By {recipe.author}
                  </p>
                </div>
              </TransitionLink>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleRecipe(recipe.id);
                }}
                className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 duration-300 shadow-sm z-10 ${isRecipeSaved(recipe.id) ? 'text-peena-red' : 'text-peena-black hover:text-peena-red'}`}
              >
                <Heart size={16} fill={isRecipeSaved(recipe.id) ? "currentColor" : "none"} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 md:hidden">
           <TransitionLink 
             to="/recipes"
             className="border-b border-gray-300 pb-1 text-xs font-bold tracking-[0.2em] uppercase"
           >
            View All
          </TransitionLink>
        </div>
      </div>
    </section>
  );
};
