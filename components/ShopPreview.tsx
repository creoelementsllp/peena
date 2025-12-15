import React from 'react';
import { TransitionLink } from './TransitionLink';
import { products } from '../data/productData';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const ShopPreview: React.FC = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag size={24} className="text-peena-red" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
                Featured Products
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-peena-black">
              Shop Coffee Essentials
            </h2>
          </div>
          <TransitionLink
            to="/shop"
            className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-peena-black hover:text-peena-red transition-colors group"
          >
            View All
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </TransitionLink>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {featuredProducts.map((product) => (
            <TransitionLink
              key={product.id}
              to={`/shop/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="group"
            >
              <div className="bg-peena-stone rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="aspect-square overflow-hidden bg-white">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    {product.subcategory}
                  </span>
                  <h3 className="font-serif text-lg mb-3 text-peena-black group-hover:text-peena-red transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-peena-black">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>

        {/* Mobile View All Button */}
        <TransitionLink
          to="/shop"
          className="md:hidden flex items-center justify-center gap-2 w-full py-4 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors font-medium"
        >
          View All Products
          <ArrowRight size={18} />
        </TransitionLink>
      </div>
    </section>
  );
};
