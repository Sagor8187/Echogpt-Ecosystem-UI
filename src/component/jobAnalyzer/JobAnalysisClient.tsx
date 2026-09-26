"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiClock, FiSend, FiFolder } from 'react-icons/fi';
import { TfiLightBulb } from "react-icons/tfi";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  defaultPrompt: string;
}

const featureCards: FeatureCard[] = [
  {
    id: 'analyze-jd',
    title: 'Analyze Job Description',
    description: 'Instantly get AI-powered insights for any job posting.',
    defaultPrompt: 'Analyze this job posting and give me key insights: '
  },
  {
    id: 'tailor-resume',
    title: 'Tailor Your Resume',
    description: 'Get suggestions to match your CV to the job requirements.',
    defaultPrompt: 'Suggest how to tailor my resume for this job role: '
  },
  {
    id: 'prepare-interviews',
    title: 'Prepare for Interviews',
    description: 'Practice with AI-generated interview questions and tips.',
    defaultPrompt: 'Generate top 10 interview questions and tips for this job: '
  },
  {
    id: 'skill-gap',
    title: 'Skill Gap Analysis',
    description: 'Discover key skills to focus on for your target role.',
    defaultPrompt: 'Perform a skill gap analysis for this position: '
  }
];

export default function JobAnalysisClient() {
  const [jobText, setJobText] = useState('');
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardClick = (card: FeatureCard) => {
    setSelectedCardId(card.id);
    if (!jobText.startsWith(card.defaultPrompt)) {
      setJobText(card.defaultPrompt);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobText.trim()) return;
    console.log('Analyzing Job:', jobText);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300 pb-20 custom-scrollbar">
      
      {/* Semantic Header with Framer Motion */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-4xl mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 tracking-tight flex flex-wrap items-center justify-center gap-3">
          <span>EchoGPT – AI Job Insight</span>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl md:text-4xl px-6 py-2 rounded-2xl shadow-lg shadow-blue-500/25 inline-block border border-blue-400/20">
            Assistant
          </span>
        </h1>
      </motion.header>

      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        {/* 2x2 Feature Cards Grid with Staggered Animation */}
        <section aria-label="Job Assistance Features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {featureCards.map((card, index) => {
              const isSelected = selectedCardId === card.id;
              return (
                <motion.article
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => handleCardClick(card)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-colors duration-300 text-center flex flex-col items-center justify-center min-h-[140px] group backdrop-blur-sm ${
                    isSelected
                      ? 'bg-blue-50/90 dark:bg-blue-950/40 border-blue-600 dark:border-blue-500 shadow-md shadow-blue-500/10 scale-[1.01]'
                      : 'bg-white/80 dark:bg-gray-900/60 border-gray-200/80 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-none'
                  }`}
                >
                  <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Input & Form Container with Fade-in */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          aria-label="Job Description Input Form"
        >
          <form 
            onSubmit={handleSubmit}
            className="w-full bg-white/90 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/80 dark:border-gray-800 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col gap-6"
          >
            {/* Textarea Header Controls */}
            <div className="relative w-full">
              <label htmlFor="job-description-input" className="sr-only">
                Job title and description
              </label>
              
              <textarea
                id="job-description-input"
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                rows={5}
                placeholder="Paste job title & description here..."
                className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none text-base md:text-lg resize-none pr-20 custom-scrollbar"
              />

              {/* Top Right Action Icons */}
              <div className="absolute top-0 right-0 flex items-center gap-1.5">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  aria-label="Add attachment"
                  className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiPlus size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  aria-label="History"
                  className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiClock size={18} />
                </motion.button>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-gray-100 dark:border-gray-800/60">
              
              {/* Left Pill Button */}
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-200/80 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-fit shadow-sm"
              >
                <TfiLightBulb size={16} />
                <span>Job Insights</span>
              </button>

              {/* Center Tooltip Tag */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100/80 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 text-xs font-medium self-center border border-gray-200/50 dark:border-gray-700/30">
                <FiFolder size={12} />
                <span>File Explorer</span>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-7 py-3 rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20"
              >
                <span>Analyze Job</span>
                <FiSend size={16} />
              </motion.button>

            </div>
          </form>
        </motion.section>

      </div>
    </main>
  );
}