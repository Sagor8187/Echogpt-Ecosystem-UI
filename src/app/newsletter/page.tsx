"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { MdVerifiedUser, MdAutoGraph } from 'react-icons/md';

// --- Types ---
interface FeatureCard {
  id: string;
  title: string;
  description: string;
}

// --- Data ---
const featureCards: FeatureCard[] = [
  {
    id: 'industry-trends',
    title: 'Industry Trends',
    description: 'Stay updated with the latest breakthroughs in LLMs and generative AI.'
  },
  {
    id: 'power-usage',
    title: 'Power Usage',
    description: "Advanced techniques to get the most out of EchoGPT's toolset."
  },
  {
    id: 'early-access',
    title: 'Early Access',
    description: 'Be the first to test new models and experimental features.'
  }
];

export default function NewsletterComponent() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center pt-16 md:pt-24 px-4 pb-20 transition-colors duration-300 custom-scrollbar overflow-x-hidden">
      
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Semantic Header with Framer Motion */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-3xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Elevate Your <span className="text-blue-600 dark:text-blue-500">AI Strategy</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Join 50,000+ professionals receiving curated insights on AI productivity, industry trends, and exclusive EchoGPT features.
          </p>
        </motion.header>

        {/* Newsletter Form Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="w-full max-w-md mb-20" 
          aria-label="Newsletter Subscription Form"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Email Input */}
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <FiMail size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                required
                className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors shadow-md shadow-blue-600/20"
            >
              <span>Join the Newsletter</span>
              <FiArrowRight size={18} className="mt-0.5" />
            </motion.button>
          </form>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
              <MdVerifiedUser className="text-blue-600 dark:text-blue-500" size={16} />
              <span>No Spam Policy</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
              <MdAutoGraph className="text-blue-600 dark:text-blue-500" size={16} />
              <span>Premium Insights</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Feature Cards Section */}
        <section className="w-full" aria-label="Newsletter Benefits">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featureCards.map((card, index) => (
              <motion.article 
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-colors flex flex-col"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}