"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

export default function ChatHistoryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filterOptions = [
    'All',
    'EchoGPT',
    'DeepSeek V4 Pro',
    'Nemotron 3 Ultra',
    'GLM-5.2'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300 custom-scrollbar overflow-x-hidden">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-2xl mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Chat History
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
          Access your complete chat history across diverse topics and interactions with different models or characters.
        </p>
      </motion.div>

      {/* Controls Section (Search & Filter) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full max-w-3xl flex flex-col sm:flex-row items-start gap-4 mb-24 relative z-10"
      >
        
        {/* Search Bar */}
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
            <FiSearch size={18} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chat history..." 
            className="w-full bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800/80 rounded-xl pl-11 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-sm"
          />
        </div>

        {/* Custom Dropdown Filter */}
        <div className="relative w-full sm:w-64" ref={dropdownRef}>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full flex items-center justify-between bg-white dark:bg-gray-900/60 border rounded-xl px-4 py-3 text-left transition-all shadow-sm ${
              isDropdownOpen 
                ? 'border-blue-500 dark:border-blue-500/70 ring-1 ring-blue-500/50 text-gray-900 dark:text-white' 
                : 'border-gray-200 dark:border-gray-800/80 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
            }`}
          >
            <span className="font-medium">{selectedModel}</span>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown size={18} className="text-gray-400" />
            </motion.div>
          </motion.button>

          {/* Dropdown Menu with AnimatePresence */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800/80 rounded-xl shadow-xl overflow-hidden z-50"
              >
                <div className="py-2 custom-scrollbar max-h-64 overflow-y-auto">
                  {filterOptions.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
                      onClick={() => {
                        setSelectedModel(option);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                        selectedModel === option
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Empty State Area */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 flex items-start justify-center w-full max-w-3xl"
      >
        <p className="text-gray-500 dark:text-gray-500/80 text-lg">
          Empty Chat History
        </p>
      </motion.div>

    </div>
  );
}