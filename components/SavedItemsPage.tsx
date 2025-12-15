import React from 'react';
import { TransitionLink } from './TransitionLink';
import { useSavedItems } from '../hooks/useSavedItems';
import { generateSlug } from '../utils/slugs';
import { ArrowRight, Clock, ChefHat, ShoppingCart } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const SavedItemsPage: React.FC = () => {
  const { savedItems } = useSavedItems();

  const savedRecipeItems = savedItems.recipes || [];
  const savedJournalItems = savedItems.journals || [];
  const savedProductItems = savedItems.products || [];

  const hasAnySavedItems = savedRecipeItems.length > 0 || savedJournalItems.length > 0 || savedProductItems.length > 0;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-peena-stone">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif text-peena-black mb-12">Your Saved Collection</h1>

        {!hasAnySavedItems ? (
          <div className="text-center py-20">
            <p className="text-xl text-peena-black/60 mb-8">You haven't saved any items yet.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <TransitionLink to="/recipes" className="inline-block bg-peena-black text-white px-8 py-3 rounded-full hover:bg-peena-red transition-colors">
                Explore Recipes
              </TransitionLink>
              <TransitionLink to="/shop" className="inline-block bg-peena-black text-white px-8 py-3 rounded-full hover:bg-peena-red transition-colors">
                Shop Products
              </TransitionLink>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {savedRecipeItems.length > 0 && (
              <section>
                <h2 className="text-2xl font-serif text-peena-black mb-8 border-b border-peena-black/10 pb-4">Saved Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {savedRecipeItems.map(recipe => (
                    <TransitionLink key={recipe.id} to={`/recipes/${generateSlug(recipe.title)}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={recipe.imageUrl} 
                          alt={recipe.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-peena-black/60 mb-3 uppercase tracking-wider font-medium">
                          <span className="flex items-center gap-1"><Clock size={14} /> {recipe.prepTime}</span>
                          <span className="flex items-center gap-1"><ChefHat size={14} /> {recipe.difficulty}</span>
                        </div>
                        <h3 className="text-xl font-serif text-peena-black mb-2 group-hover:text-peena-red transition-colors">{recipe.title}</h3>
                        <p className="text-peena-black/70 text-sm line-clamp-2 mb-4">{recipe.description}</p>
                        <div className="flex items-center text-peena-red text-sm font-bold tracking-widest uppercase">
                          View Recipe <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </TransitionLink>
                  ))}
                </div>
              </section>
            )}

            {savedJournalItems.length > 0 && (
              <section>
                <h2 className="text-2xl font-serif text-peena-black mb-8 border-b border-peena-black/10 pb-4">Saved Journals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {savedJournalItems.map(journal => (
                    <TransitionLink key={journal.id} to={`/journal/${generateSlug(journal.title)}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img 
                          src={journal.imageUrl} 
                          alt={journal.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center md:w-3/5">
                        <div className="flex items-center gap-3 text-xs text-peena-black/60 mb-3 uppercase tracking-wider font-medium">
                          <span className="text-peena-red">{journal.category}</span>
                          <span>•</span>
                          <span>{journal.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif text-peena-black mb-3 group-hover:text-peena-red transition-colors">{journal.title}</h3>
                        <p className="text-peena-black/70 text-sm line-clamp-2 mb-6">{journal.excerpt}</p>
                        <div className="flex items-center text-peena-red text-sm font-bold tracking-widest uppercase mt-auto">
                          Read Article <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </TransitionLink>
                  ))}
                </div>
              </section>
            )}

            {savedProductItems.length > 0 && (
              <section>
                <h2 className="text-2xl font-serif text-peena-black mb-8 border-b border-peena-black/10 pb-4">Saved Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {savedProductItems.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
