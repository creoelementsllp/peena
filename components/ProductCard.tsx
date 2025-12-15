import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';
import { TransitionLink } from './TransitionLink';
import { useCart } from '../context/CartContext';
import { useSavedItems } from '../hooks/useSavedItems';
import { slugify } from '../utils/slugs';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { savedItems, toggleSave } = useSavedItems();
  const isSaved = savedItems.products?.some(p => p.id === product.id) || false;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave('product', product);
  };

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <TransitionLink 
      to={`/shop/${slugify(product.name)}`}
      className="group block"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {!product.inStock && (
              <span className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Out of Stock
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 bg-peena-red text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {discount}% Off
              </span>
            )}
            {product.featured && (
              <span className="px-3 py-1 bg-peena-black text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleToggleSave}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isSaved 
                  ? 'bg-peena-red text-white' 
                  : 'bg-white/90 text-gray-700 hover:bg-peena-red hover:text-white'
              }`}
            >
              <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
            </button>
            {product.inStock && (
              <button
                onClick={handleAddToCart}
                className="p-2 bg-white/90 text-gray-700 rounded-full hover:bg-peena-black hover:text-white transition-colors backdrop-blur-sm"
              >
                <ShoppingCart size={18} />
              </button>
            )}
          </div>

          {/* Quick View on Hover */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs line-clamp-2">{product.description}</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {product.subcategory || product.category}
            </span>
          </div>
          
          <h3 className="font-serif text-lg mb-2 text-peena-black group-hover:text-peena-red transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating!) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300 fill-current'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-peena-black">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {product.inStock ? (
            <p className="text-xs text-green-600 mt-2 font-medium">In Stock</p>
          ) : (
            <p className="text-xs text-red-600 mt-2 font-medium">Out of Stock</p>
          )}
        </div>
      </div>
    </TransitionLink>
  );
};
