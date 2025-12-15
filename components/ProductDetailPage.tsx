import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/productData';
import { unslugify } from '../utils/slugs';
import { ShoppingCart, Heart, Star, Check, Truck, RotateCcw, Shield, ChevronLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSavedItems } from '../hooks/useSavedItems';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { savedItems, toggleSave } = useSavedItems();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-peena-stone">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-3 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const isSaved = savedItems.products?.some(p => p.id === product.id) || false;
  const images = product.images || [product.imageUrl];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleToggleSave = () => {
    toggleSave('product', product);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-peena-stone">
      <div className="container mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-gray-600 hover:text-peena-black mb-8 transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-medium">Back to Shop</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden mb-4 aspect-square">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-peena-red'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                {product.subcategory || product.category}
              </span>
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating!)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 fill-current'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl text-peena-black mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-peena-black">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="px-3 py-1 bg-peena-red text-white text-sm font-bold rounded-full">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check size={20} />
                  <span className="font-medium">In Stock</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <span className="font-medium">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

            {/* Quantity & Add to Cart */}
            {product.inStock && (
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 py-3 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors font-medium"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button
                  onClick={handleToggleSave}
                  className={`px-4 py-3 rounded-lg border transition-colors ${
                    isSaved
                      ? 'bg-peena-red text-white border-peena-red'
                      : 'border-gray-300 hover:border-peena-red'
                  }`}
                >
                  <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
                </button>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-white rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-white rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    value && (
                      <div key={key} className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                          {key}
                        </span>
                        <span className="text-gray-700">{value}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Truck size={24} className="text-peena-red flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm mb-1">Free Shipping</h4>
                  <p className="text-xs text-gray-600">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <RotateCcw size={24} className="text-peena-red flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm mb-1">Easy Returns</h4>
                  <p className="text-xs text-gray-600">7 days return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                <Shield size={24} className="text-peena-red flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm mb-1">Warranty</h4>
                  <p className="text-xs text-gray-600">
                    {product.specifications?.warranty || 'Manufacturer warranty'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
