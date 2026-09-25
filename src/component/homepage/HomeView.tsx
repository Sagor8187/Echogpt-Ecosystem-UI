"use client";

import React from 'react';
import { FiHexagon } from 'react-icons/fi';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
}

const homeCards: FeatureCard[] = [
  {
    id: 'creative-flow',
    title: 'Unlock Your Creative Flow',
    description: 'Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.'
  },
  {
    id: 'resume-shines',
    title: 'Build a Resume That Shines',
    description: 'Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential employers.'
  },
  {
    id: 'transform-challenge',
    title: 'Set a Challenge That Transforms You',
    description: 'Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow.'
  },
  {
    id: 'social-content',
    title: 'Write Irresistible Social Content',
    description: 'Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations.'
  }
];

export default function HomeView() {
  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center pt-16 md:pt-24 px-4 pb-24 transition-colors duration-300 custom-scrollbar">
      
      <div className="w-full max-w-5xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Semantic Header & Logo */}
        <header className="text-center w-full max-w-3xl mb-16">
          
          {/* App Logo Icon */}
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-600/30">
            <FiHexagon size={36} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            EchoGPT
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for...
          </p>
        </header>

        {/* 2x2 Feature Cards Grid */}
        <section className="w-full" aria-label="Core Features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeCards.map((card) => (
              <article 
                key={card.id}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-blue-500 rounded-3xl p-8 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}