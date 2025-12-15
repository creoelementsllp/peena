import React, { useState, useMemo } from 'react';
import { TransitionLink } from './TransitionLink';
import { Recipe } from '../types';
import { Heart, SlidersHorizontal, Search } from 'lucide-react';
import { Button } from './Button';
import { RECIPES, CATEGORIES } from '../data/recipeData';
import { useSavedItems } from '../hooks/useSavedItems';
import { generateSlug } from '../utils/slugs';

export const RecipesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const { isRecipeSaved, toggleRecipe } = useSavedItems();

  // Filter recipes based on category and search
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter(recipe => {
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedRecipes = filteredRecipes.slice(0, visibleCount);
  const hasMore = visibleCount < filteredRecipes.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, filteredRecipes.length));
  };

  return (
    <div className="pt-32 pb-20 bg-peena-stone min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-peena-red text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">The Archive</span>
          <h1 className="text-5xl md:text-7xl font-serif text-peena-black mb-6">Signature Recipes</h1>
          <p className="text-gray-500 font-light text-lg">
            Explore our complete collection of handcrafted drinks, from timeless classics to avant-garde creations.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-4 rounded-full border border-gray-200 focus:border-peena-black focus:outline-none transition-colors text-sm bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  selectedCategory === cat 
                    ? 'bg-peena-black text-white border-peena-black' 
                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-peena-black hover:text-peena-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Recipe' : 'Recipes'}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayedRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="group relative"
            >
              <TransitionLink to={`/recipes/${generateSlug(recipe.title)}`} className="block">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={recipe.imageUrl} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-peena-black">
                          {recipe.category}
                      </span>
                  </div>
                </div>
                
                <div className="space-y-1 px-1">
                  <h3 className="text-2xl font-serif text-peena-black group-hover:text-peena-red transition-colors duration-300">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                      <span>By {recipe.author}</span>
                      <span>{recipe.prepTime}</span>
                  </div>
                </div>
              </TransitionLink>

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleRecipe(recipe.id);
                }}
                className={`absolute top-[calc(aspect-[4/5]-4rem)] right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full transition-all shadow-sm translate-y-12 group-hover:translate-y-0 duration-300 z-10 ${isRecipeSaved(recipe.id) ? 'text-peena-red' : 'text-peena-black hover:text-peena-red'}`}
                style={{ top: 'auto', bottom: '5.5rem' }} // Adjust position to be inside the image area at the bottom right
              >
                <Heart size={18} fill={isRecipeSaved(recipe.id) ? "currentColor" : "none"} />
              </button>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {hasMore && (
          <div className="mt-20 text-center">
            <Button variant="outline" className="min-w-[200px]" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-serif text-gray-400 mb-4">No recipes found</p>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};