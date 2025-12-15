import React from 'react';
import { TransitionLink } from './TransitionLink';
import { JOURNALS } from '../data/journalData';
import { generateSlug } from '../utils/slugs';

export const BlogSection: React.FC = () => {
  // Get the 3 most recent articles
  const recentArticles = JOURNALS.slice(0, 3);

  return (
    <section className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="max-w-xl">
            <span className="text-peena-red text-[10px] font-bold tracking-[0.3em] uppercase block mb-6">Editorial</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white/90">The Cellar Journal</h2>
          </div>
          <TransitionLink 
            to="/journal"
            className="text-white/60 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all text-xs font-bold tracking-[0.2em] uppercase"
          >
            Read All Stories
          </TransitionLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {recentArticles.map((article) => (
            <TransitionLink 
              key={article.id} 
              to={`/journal/${generateSlug(article.title)}`}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-8 h-80 w-full relative rounded-[2rem] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                 <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="space-y-4 pr-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-white group-hover:text-peena-red transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-white/50 font-light leading-relaxed text-sm line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
};