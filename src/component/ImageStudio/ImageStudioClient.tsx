"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, X, Check } from 'lucide-react';

export default function ImageStudioClient() {
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imageCount, setImageCount] = useState('1');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Nano Banana 2 Lite');

  const aspectRatios = ['1:1', '3:2', '2:3', 'auto'];
  const imageCounts = ['1', '2', '3', '4'];

  const models = [
    {
      category: 'GOOGLE',
      options: [
        { name: 'Nano Banana 2 Lite', description: 'Lightest Google tier. Quickest and cheapest.' },
        { name: 'Nano Banana 2', description: 'Fast Google model with well-balanced quality.' },
        { name: 'Nano Banana Pro', description: "Google's best. Highest fidelity and the strongest at text in images." },
        { name: 'Nano Banana', description: 'Previous Google generation. Quick and dependable.' },
      ]
    },
    {
      category: 'OPENAI',
      options: [
        { name: 'ChatGPT Image Latest', description: 'Tracks whatever ChatGPT currently uses for images.' },
        { name: 'GPT Image 1', description: 'Reliable all-rounder. Handles text in images well.' },
        { name: 'GPT Image 1 Mini', description: 'Cheapest tier, lower fidelity.' },
        { name: 'GPT Image 1.5', description: 'High quality with good prompt following.' },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 font-sans flex flex-col items-center transition-colors duration-300 pt-8 md:pt-16 custom-scrollbar overflow-x-hidden">
      
      {/* Header with Fade-in */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 px-4"
      >
        <h1 className="text-3xl font-bold text-blue-600  mb-3">Image Studio</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Create images that stop the scroll.</p>
      </motion.div>

      {/* Main Card */}
      <div className="w-full max-w-4xl px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/50 rounded-3xl p-6 md:p-8 shadow-sm transition-colors duration-300"
        >
          
          {/* Input */}
          <input 
            type="text" 
            className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none text-lg md:text-xl mb-8" 
            placeholder="Turn my photo into a professional headshot" 
          />

          {/* Controls Container */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Plus Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
              >
                <Plus size={20} />
              </motion.button>

              {/* Aspect Ratios */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800/50 rounded-full p-1 relative">
                {aspectRatios.map(ratio => {
                  const isSelected = aspectRatio === ratio;
                  return (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`relative px-3 md:px-4 py-1.5 rounded-full text-sm font-medium transition-colors z-10 ${
                        isSelected
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeAspectRatio"
                          className="absolute inset-0 bg-blue-600 rounded-full shadow-sm z-[-1]"
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      {ratio}
                    </button>
                  );
                })}
              </div>

              {/* Image Count */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800/50 rounded-full p-1 relative">
                {imageCounts.map(num => {
                  const isSelected = imageCount === num;
                  return (
                    <button
                      key={num}
                      onClick={() => setImageCount(num)}
                      className={`relative w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors z-10 ${
                        isSelected
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeImageCount"
                          className="absolute inset-0 bg-blue-600 rounded-full shadow-sm z-[-1]"
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      {num}
                    </button>
                  );
                })}
              </div>

              {/* Model Selector */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModelOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800/50 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {selectedModel}
                <ChevronDown size={16} className="text-gray-400 dark:text-gray-500" />
              </motion.button>
            </div>

            {/* Generate Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-xl shadow-md shadow-blue-600/20 transition-colors flex-shrink-0"
            >
              Generate
            </motion.button>
          </div>

          <div className="mt-8 pt-5 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              Image generation is a paid feature — upgrade to start creating images.
            </p>
          </div>
        </motion.div>

        {/* Subtext */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
          Each image uses one message from your plan. Generation takes up to a minute.
        </p>

        {/* Creations section */}
        <div className="mt-16 mb-20">
          <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-12">Your creations</h2>
          <div className="text-center text-gray-500 dark:text-gray-400">
            Nothing here yet — describe an image above to get started.
          </div>
        </div>
      </div>

      {/* Model Selection Modal with AnimatePresence */}
      <AnimatePresence>
        {isModelOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModelOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/50 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-100 dark:border-gray-800/50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Choose a model</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Picks the model used for your next generation.</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModelOpen(false)}
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white bg-gray-100 dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-1.5 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {models.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-1">{section.category}</h3>
                    <div className="space-y-2.5">
                      {section.options.map((model, mIdx) => {
                        const isSelected = selectedModel === model.name;
                        return (
                          <motion.button
                            key={mIdx}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setSelectedModel(model.name);
                              setIsModelOpen(false);
                            }}
                            className={`w-full text-left p-4 rounded-xl border transition-colors flex justify-between items-center ${
                              isSelected 
                                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/10' 
                                : 'border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/30 hover:border-gray-300 dark:hover:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                            }`}
                          >
                            <div>
                              <div className={`font-semibold mb-1 ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                                {model.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {model.description}
                              </div>
                            </div>
                            {isSelected && (
                              <div className="bg-blue-600 rounded-full p-0.5 text-white flex-shrink-0 ml-4 shadow-sm">
                                <Check size={16} strokeWidth={3} />
                              </div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}