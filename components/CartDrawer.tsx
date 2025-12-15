import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    // In a real app, this would navigate to checkout
    alert('Checkout functionality - Coming soon!');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <ShoppingBag size={24} className="text-peena-red" />
              <h2 className="text-2xl font-bold text-peena-black">
                Shopping Cart
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some products to get started!</p>
                <button
                  onClick={() => {
                    onClose();
                    navigate('/shop');
                  }}
                  className="px-6 py-3 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-peena-black mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {item.subcategory || item.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-peena-red">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors self-start"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}

                {/* Clear Cart Button */}
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="w-full py-2 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Subtotal */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-medium">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">
                    {totalPrice >= 999 ? 'FREE' : '₹50'}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-peena-red">
                  ₹{(totalPrice + (totalPrice >= 999 ? 0 : 50)).toLocaleString('en-IN')}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-peena-black text-white rounded-lg hover:bg-peena-red transition-colors font-medium text-lg"
              >
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => {
                  onClose();
                  navigate('/shop');
                }}
                className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
