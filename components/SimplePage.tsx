import React from 'react';

interface SimplePageProps {
  title: string;
  children: React.ReactNode;
}

export const SimplePage: React.FC<SimplePageProps> = ({ title, children }) => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-peena-stone">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif text-peena-black mb-12">{title}</h1>
        <div className="prose prose-lg prose-stone">
          {children}
        </div>
      </div>
    </div>
  );
};
