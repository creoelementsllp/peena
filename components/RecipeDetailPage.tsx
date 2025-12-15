import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TransitionLink } from './TransitionLink';
import { Recipe } from '../types';
import { Clock, Users, ChefHat, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from './Button';
import { RECIPES } from '../data/recipeData';
import { useSavedItems } from '../hooks/useSavedItems';
import { generateSlug } from '../utils/slugs';

export const RecipeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const { isRecipeSaved, toggleRecipe } = useSavedItems();
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundRecipe = RECIPES.find(r => generateSlug(r.title) === slug);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        // Handle not found
        navigate('/recipes');
      }
    }
  }, [slug, navigate]);

  if (!recipe) return null;

  const isSaved = isRecipeSaved(recipe.id);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    });
  };

  // Get 3 random recipes for "You May Also Like", excluding current one
  const relatedRecipes = RECIPES
    .filter(r => r.id !== recipe.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="pt-32 pb-20 bg-peena-stone min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <TransitionLink 
          to="/recipes"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-peena-black hover:text-peena-red transition-colors mb-8 inline-flex"
        >
          <ArrowLeft size={16} />
          Back to Recipes
        </TransitionLink>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/5]">
                <img 
                  src={recipe.imageUrl} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-peena-black">
                    {recipe.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6 flex flex-col gap-4">
                  <button 
                    onClick={() => toggleRecipe(recipe.id)}
                    className={`bg-white/90 backdrop-blur-sm p-3 rounded-full transition-all shadow-md ${isSaved ? 'text-peena-red' : 'text-peena-black hover:text-peena-red'}`}
                  >
                    <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
                  </button>
                  <div className="relative">
                    <button 
                      onClick={handleShare}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-peena-black hover:text-peena-red transition-all shadow-md"
                    >
                      <Share2 size={20} />
                    </button>
                    {showShareTooltip && (
                      <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Link Copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-10">
            
            {/* Header */}
            <div className="space-y-4">
              <span className="text-peena-red text-[10px] font-bold tracking-[0.3em] uppercase block">
                Signature Recipe
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-peena-black">
                {recipe.title}
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {recipe.description}
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="font-medium">By</span>
                <span className="text-peena-black font-bold">{recipe.author}</span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-peena-stone p-3 rounded-full">
                  <Clock size={20} className="text-peena-red" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Prep Time</p>
                  <p className="text-lg font-bold text-peena-black">{recipe.prepTime}</p>
                </div>
              </div>
              
              {recipe.servings && (
                <div className="flex items-center gap-3">
                  <div className="bg-peena-stone p-3 rounded-full">
                    <Users size={20} className="text-peena-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Servings</p>
                    <p className="text-lg font-bold text-peena-black">{recipe.servings}</p>
                  </div>
                </div>
              )}
              
              {recipe.difficulty && (
                <div className="flex items-center gap-3">
                  <div className="bg-peena-stone p-3 rounded-full">
                    <ChefHat size={20} className="text-peena-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Difficulty</p>
                    <p className="text-lg font-bold text-peena-black">{recipe.difficulty}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Ingredients */}
            {recipe.ingredients && (
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-peena-black">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-4 text-gray-700 group"
                    >
                      <span className="min-w-[8px] h-[8px] rounded-full bg-peena-red mt-2 group-hover:scale-125 transition-transform"></span>
                      <span className="text-lg font-light">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructions */}
            {recipe.instructions && (
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-peena-black">Instructions</h2>
                <ol className="space-y-5">
                  {recipe.instructions.map((instruction, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-5 text-gray-700 group"
                    >
                      <span className="min-w-[32px] h-[32px] rounded-full bg-peena-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-peena-red transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-lg font-light leading-relaxed pt-1">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button variant="primary" className="flex-1" onClick={() => toggleRecipe(recipe.id)}>
                {isSaved ? 'Saved' : 'Save Recipe'}
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleShare}>
                Share
              </Button>
            </div>

          </div>
        </div>

        {/* Related Recipes Section */}
        <div className="mt-32 border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <span className="text-peena-red text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
              Explore More
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-peena-black">
              You Might Also Like
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedRecipes.map((relatedRecipe) => (
              <TransitionLink key={relatedRecipe.id} to={`/recipes/${generateSlug(relatedRecipe.title)}`} className="group cursor-pointer block">
                <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-[2rem] shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={relatedRecipe.imageUrl} 
                    alt={relatedRecipe.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <div className="text-center space-y-2 px-2">
                  <h3 className="text-xl font-serif text-peena-black group-hover:text-peena-red transition-colors duration-300">
                    {relatedRecipe.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium tracking-wide uppercase">
                    {relatedRecipe.category}
                  </p>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
