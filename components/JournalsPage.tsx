import React, { useState, useMemo } from 'react';
import { TransitionLink } from './TransitionLink';
import { Journal } from '../types';
import { Clock, Search, Heart } from 'lucide-react';
import { JOURNALS, JOURNAL_CATEGORIES } from '../data/journalData';
import { useSavedItems } from '../hooks/useSavedItems';
import { generateSlug } from '../utils/slugs';

export const JournalsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const { isJournalSaved, toggleJournal } = useSavedItems();

  // Filter journals based on category and search
  const filteredJournals = useMemo(() => {
    return JOURNALS.filter(journal => {
      const matchesCategory = selectedCategory === 'All' || journal.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        journal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        journal.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        journal.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        journal.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedJournals = filteredJournals.slice(0, visibleCount);
  const hasMore = visibleCount < filteredJournals.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, filteredJournals.length));
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-peena-red text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Editorial</span>
          <h1 className="text-5xl md:text-7xl font-serif text-peena-black mb-6">The Journal</h1>
          <p className="text-gray-500 font-light text-lg">
            Deep dives into drink culture, history, and the people behind the bar.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-4 rounded-full border border-gray-200 focus:border-peena-black focus:outline-none transition-colors text-sm bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {JOURNAL_CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  selectedCategory === cat 
                    ? 'bg-peena-black text-white border-peena-black' 
                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-peena-black hover:text-peena-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
            {filteredJournals.length} {filteredJournals.length === 1 ? 'Article' : 'Articles'}
          </div>
        </div>

        {/* Featured Article */}
        {displayedJournals.length > 0 && (
          <div className="mb-24 relative group">
            <TransitionLink to={`/journal/${generateSlug(displayedJournals[0].title)}`} className="block">
              <div className="relative h-[60vh] w-full rounded-[2rem] overflow-hidden shadow-lg">
                <img 
                  src={displayedJournals[0].imageUrl} 
                  alt={displayedJournals[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-3xl">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span className="bg-peena-red px-3 py-1 rounded-full">{displayedJournals[0].category}</span>
                    <span className="flex items-center gap-2">
                      <Clock size={12} />
                      {displayedJournals[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">{displayedJournals[0].title}</h2>
                  <p className="text-lg text-white/80 font-light mb-4 line-clamp-2">{displayedJournals[0].excerpt}</p>
                  <div className="text-sm font-light">By {displayedJournals[0].author}</div>
                </div>
              </div>
            </TransitionLink>
            <button 
              onClick={(e) => {
                e.preventDefault();
                toggleJournal(displayedJournals[0].id);
              }}
              className={`absolute top-8 right-8 bg-white/10 backdrop-blur-md p-3 rounded-full transition-all hover:bg-white/20 z-10 ${isJournalSaved(displayedJournals[0].id) ? 'text-peena-red' : 'text-white'}`}
            >
              <Heart size={24} fill={isJournalSaved(displayedJournals[0].id) ? "currentColor" : "none"} />
            </button>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayedJournals.slice(1).map((journal) => (
            <article 
              key={journal.id} 
              className="group relative flex flex-col h-full"
            >
              <TransitionLink to={`/journal/${generateSlug(journal.title)}`} className="flex flex-col h-full">
                <div className="overflow-hidden mb-6 aspect-[4/5] rounded-[2rem] relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={journal.imageUrl} 
                    alt={journal.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-peena-black">
                      {journal.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span>{journal.date}</span>
                    <span className="w-4 h-px bg-gray-200"></span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {journal.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-peena-black mb-3 group-hover:text-peena-red transition-colors duration-300 leading-tight">
                    {journal.title}
                  </h3>
                  
                  <p className="text-gray-500 font-light leading-relaxed mb-4 line-clamp-3">
                    {journal.excerpt}
                  </p>

                  <div className="text-sm font-light text-gray-400 mb-4">
                    By {journal.author}
                  </div>

                  <div className="mt-auto">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] border-b border-black/20 pb-1 group-hover:border-peena-red group-hover:text-peena-red transition-all">Read Article</span>
                  </div>
                </div>
              </TransitionLink>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleJournal(journal.id);
                }}
                className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 duration-300 shadow-sm z-10 ${isJournalSaved(journal.id) ? 'text-peena-red' : 'text-peena-black hover:text-peena-red'}`}
              >
                <Heart size={16} fill={isJournalSaved(journal.id) ? "currentColor" : "none"} />
              </button>
            </article>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-16">
            <button 
              onClick={handleLoadMore}
              className="px-12 py-4 border-2 border-peena-black text-peena-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-peena-black hover:text-white transition-all duration-300"
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredJournals.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg font-light">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};
