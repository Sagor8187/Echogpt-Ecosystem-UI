"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiHexagon, 
  FiBox, 
  FiDatabase, 
  FiCircle, 
  FiCpu, 
  FiLayers,
  FiTerminal
} from 'react-icons/fi';

// Types Define
export interface AppData {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
}

// Data Array
export const storeApps: AppData[] = [
  {
    id: 'echogpt',
    name: 'EchoGPT',
    description: 'Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.',
    icon: FiHexagon,
    colorClass: 'bg-purple-600'
  },
  {
    id: 'deepseek-v4-pro',
    name: 'DeepSeek V4 Pro',
    description: 'DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.',
    icon: FiBox,
    colorClass: 'bg-blue-600'
  },
  {
    id: 'nemotron-3-ultra',
    name: 'Nemotron 3 Ultra',
    description: 'Llama 3.1 Nemotron 70B Instruct',
    icon: FiDatabase,
    colorClass: 'bg-green-500'
  },
  {
    id: 'glm-5-2',
    name: 'GLM-5.2',
    description: 'GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.',
    icon: FiCircle,
    colorClass: 'bg-gray-800'
  },
  {
    id: 'deepseek-v4-flash',
    name: 'DeepSeek V4 Flash',
    description: 'DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.',
    icon: FiBox,
    colorClass: 'bg-blue-500'
  },
  {
    id: 'tencent-hy3',
    name: 'Tencent Hy3',
    description: 'Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.',
    icon: FiLayers,
    colorClass: 'bg-indigo-500'
  },
  {
    id: 'mimo-v2-5-pro',
    name: 'MiMo V2.5 Pro',
    description: 'MiMo V2.5 Pro adds stronger reasoning to the MiMo line while staying inexpensive over a 1M token context.',
    icon: FiCpu,
    colorClass: 'bg-gray-900'
  },
  {
    id: 'qwen-3-7-plus',
    name: 'Qwen 3.7 Plus',
    description: 'Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.',
    icon: FiCircle,
    colorClass: 'bg-blue-400'
  },
  {
    id: 'gpt-5-6-sol',
    name: 'GPT-5.6 Sol',
    description: "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
    icon: FiTerminal,
    colorClass: 'bg-emerald-600'
  }
];

const StorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter apps
  const filteredApps = storeApps.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300 pb-20 custom-scrollbar">
      
      {/* Header with Fade-in Animation */}
      <motion.div 
        initial={{ opacity: -20, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-3xl mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          EchoGPT Store
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.
        </p>
      </motion.div>

      {/* Search Bar Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full max-w-4xl relative mb-12"
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
          <FiSearch size={20} />
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for the Apps" 
          className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 rounded-2xl pl-12 pr-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500/70 shadow-sm transition-all"
        />
      </motion.div>

      {/* Grid Container */}
      <motion.div 
        layout
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredApps.map((app, index) => (
          <motion.div
            key={app.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${app.colorClass}`}
              >
                <app.icon size={24} />
              </motion.div>
              
              <Link 
                href={`/store/${app.id}`}
                className="bg-gray-100 dark:bg-gray-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-900 dark:text-white text-sm font-medium py-2 px-5 rounded-full transition-all duration-300 border border-gray-200 dark:border-gray-700/50 active:scale-95 shadow-sm"
              >
                Try App
              </Link>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {app.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
              {app.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StorePage;