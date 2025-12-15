import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      {title && (
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-peena-black mb-4">
            {title}
          </h2>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
