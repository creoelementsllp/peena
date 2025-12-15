import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TransitionLink } from './TransitionLink';
import { Journal } from '../types';
import { Clock, ArrowLeft, Calendar, User, Tag, Share2, Heart } from 'lucide-react';
import { Button } from './Button';
import { JOURNALS } from '../data/journalData';
import { useSavedItems } from '../hooks/useSavedItems';
import { generateSlug } from '../utils/slugs';

export const JournalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [journal, setJournal] = useState<Journal | null>(null);
  const { isJournalSaved, toggleJournal } = useSavedItems();
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundJournal = JOURNALS.find(j => generateSlug(j.title) === slug);
      if (foundJournal) {
        setJournal(foundJournal);
      } else {
        navigate('/journal');
      }
    }
  }, [slug, navigate]);

  if (!journal) return null;

  const isSaved = isJournalSaved(journal.id);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    });
  };

  // Get 3 random journals for "You May Also Like", excluding current one
  const relatedJournals = JOURNALS
    .filter(j => j.id !== journal.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <TransitionLink 
          to="/journal"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-peena-black hover:text-peena-red transition-colors mb-8 inline-flex"
        >
          <ArrowLeft size={16} />
          Back to Journal
        </TransitionLink>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-6 flex justify-between items-start">
            <span className="bg-peena-red text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block">
              {journal.category}
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => toggleJournal(journal.id)}
                className={`p-2 rounded-full transition-all ${isSaved ? 'text-peena-red' : 'text-gray-400 hover:text-peena-red'}`}
              >
                <Heart size={24} fill={isSaved ? "currentColor" : "none"} />
              </button>
              <div className="relative">
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-full text-gray-400 hover:text-peena-red transition-all"
                >
                  <Share2 size={24} />
                </button>
                {showShareTooltip && (
                  <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Link Copied!
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-peena-black mb-8 leading-tight">
            {journal.title}
          </h1>
          
          <p className="text-2xl text-gray-600 font-light leading-relaxed mb-8">
            {journal.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-200 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <User size={16} className="text-peena-red" />
              <span className="font-medium">By {journal.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} className="text-peena-red" />
              <span>{journal.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={16} className="text-peena-red" />
              <span>{journal.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl aspect-[16/9]">
            <img 
              src={journal.imageUrl} 
              alt={journal.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-stone max-w-none">
            {journal.content.map((paragraph, index) => (
              <p 
                key={index}
                className="text-gray-700 font-light leading-relaxed mb-6 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <Tag size={20} className="text-peena-red mt-1 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {journal.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-peena-stone rounded-full text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-peena-black hover:text-white transition-all cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Author Bio Section */}
          <div className="mt-12 p-8 bg-peena-stone rounded-[2rem]">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-peena-black flex items-center justify-center text-white font-serif text-3xl flex-shrink-0">
                {journal.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-serif text-peena-black mb-2">
                  Written by {journal.author}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  A passionate contributor to The Journal, exploring the rich world of cocktails, spirits, and drink culture.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-12">
            <Button variant="primary" className="flex-1" onClick={handleShare}>
              Share Article
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => toggleJournal(journal.id)}>
              {isSaved ? 'Saved' : 'Save for Later'}
            </Button>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="max-w-5xl mx-auto mt-20 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-serif text-peena-black mb-12 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedJournals.map((relatedJournal) => (
              <TransitionLink key={relatedJournal.id} to={`/journal/${generateSlug(relatedJournal.title)}`} className="group cursor-pointer block">
                <div className="overflow-hidden mb-6 h-64 w-full relative rounded-[2rem] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                   <img 
                    src={relatedJournal.imageUrl} 
                    alt={relatedJournal.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    <span>{relatedJournal.category}</span>
                    <span>{relatedJournal.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-peena-black group-hover:text-peena-red transition-colors duration-300 leading-tight">
                    {relatedJournal.title}
                  </h3>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
