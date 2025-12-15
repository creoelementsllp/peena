import React, { useState, useMemo } from 'react';
import { ProductGrid } from './ProductGrid';
import { products, productCategories } from '../data/productData';
import { Filter, SlidersHorizontal, Grid3x3, LayoutGrid } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  const currentCategory = productCategories.find(cat => cat.id === selectedCategory);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        case 'newest':
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedSubcategory, sortBy]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-peena-stone">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-7xl text-peena-black mb-4">
            Shop
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover premium coffee equipment, brewing machines, and accessories for the perfect cup.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors"
            >
              <Filter size={18} />
              <span className="text-sm font-medium">Filters</span>
            </button>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-peena-red text-sm"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 rounded-lg transition-colors ${
                  gridCols === 3 
                    ? 'bg-peena-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 rounded-lg transition-colors ${
                  gridCols === 4 
                    ? 'bg-peena-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <LayoutGrid size={18} />
              </button>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">{filteredProducts.length}</span> products found
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== 'all' || selectedSubcategory) && (
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-peena-red text-white text-xs font-medium rounded-full flex items-center gap-2">
                  {currentCategory?.name}
                  <button onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory(null);
                  }}>×</button>
                </span>
              )}
              {selectedSubcategory && (
                <span className="px-3 py-1 bg-peena-red text-white text-xs font-medium rounded-full flex items-center gap-2">
                  {selectedSubcategory}
                  <button onClick={() => setSelectedSubcategory(null)}>×</button>
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`
            w-64 flex-shrink-0 
            ${showFilters ? 'block' : 'hidden lg:block'}
          `}>
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-peena-black">Categories</h3>
                <SlidersHorizontal size={18} className="text-gray-400" />
              </div>

              {/* Categories */}
              <div className="space-y-2 mb-8">
                {productCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSelectedSubcategory(null);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-peena-black text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>

                    {/* Subcategories */}
                    {category.subcategories && selectedCategory === category.id && (
                      <div className="ml-4 mt-2 space-y-1">
                        {category.subcategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setSelectedSubcategory(sub)}
                            className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors text-xs ${
                              selectedSubcategory === sub
                                ? 'bg-peena-red text-white'
                                : 'hover:bg-gray-50 text-gray-600'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Reset Filters */}
              {(selectedCategory !== 'all' || selectedSubcategory) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory(null);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${
              gridCols === 4 ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'
            } gap-8`}>
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory(null);
                  }}
                  className="px-6 py-3 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Import ProductCard
import { ProductCard } from './ProductCard';
