import { useState, useEffect } from 'react';
import { Recipe, Journal, Product } from '../types';

interface SavedItems {
  recipes: Recipe[];
  journals: Journal[];
  products: Product[];
}

export function useSavedItems() {
  const [savedItems, setSavedItems] = useState<SavedItems>({
    recipes: [],
    journals: [],
    products: []
  });

  useEffect(() => {
    const stored = localStorage.getItem('peena-saved-items');
    if (stored) {
      setSavedItems(JSON.parse(stored));
    }
  }, []);

  const toggleSave = (type: 'recipe' | 'journal' | 'product', item: Recipe | Journal | Product) => {
    setSavedItems(current => {
      let updated: SavedItems;
      
      if (type === 'recipe') {
        const recipes = current.recipes as Recipe[];
        const exists = recipes.some(r => r.id === item.id);
        updated = {
          ...current,
          recipes: exists 
            ? recipes.filter(r => r.id !== item.id)
            : [...recipes, item as Recipe]
        };
      } else if (type === 'journal') {
        const journals = current.journals as Journal[];
        const exists = journals.some(j => j.id === item.id);
        updated = {
          ...current,
          journals: exists
            ? journals.filter(j => j.id !== item.id)
            : [...journals, item as Journal]
        };
      } else {
        const products = current.products as Product[];
        const exists = products.some(p => p.id === item.id);
        updated = {
          ...current,
          products: exists
            ? products.filter(p => p.id !== item.id)
            : [...products, item as Product]
        };
      }
      
      localStorage.setItem('peena-saved-items', JSON.stringify(updated));
      return updated;
    });
  };

  // Legacy methods for backward compatibility
  const toggleRecipe = (id: string) => {
    const recipe = savedItems.recipes.find(r => r.id === id);
    if (recipe) toggleSave('recipe', recipe);
  };

  const toggleJournal = (id: string) => {
    const journal = savedItems.journals.find(j => j.id === id);
    if (journal) toggleSave('journal', journal);
  };

  const isRecipeSaved = (id: string) => savedItems.recipes.some(r => r.id === id);
  const isJournalSaved = (id: string) => savedItems.journals.some(j => j.id === id);

  return {
    savedItems,
    savedRecipes: savedItems.recipes.map(r => r.id),
    savedJournals: savedItems.journals.map(j => j.id),
    toggleSave,
    toggleRecipe,
    toggleJournal,
    isRecipeSaved,
    isJournalSaved
  };
}
