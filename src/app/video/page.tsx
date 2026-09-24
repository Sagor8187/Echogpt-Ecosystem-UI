"use client";

import React, { useState } from 'react';
import { ChevronDown, Plus, X, Check, Lock } from 'lucide-react';

const VideoStudio = () => {
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Veo 3.1 fast');

  const aspectRatios = ['16:9', '9:16', '1:1'];

  const videoModels = [
    { 
      name: 'Veo 3.1 fast', 
      description: 'Fast, high-quality video generation.', 
      locked: false 
    },
    { 
      name: 'Veo 3.1 lite', 
      description: 'Lightest tier. Quickest and cheapest.', 
      locked: true 
    },
    { 
      name: 'Grok Imagine Video', 
      description: 'Tracks whatever Grok Imagine currently uses for video.', 
      locked: true 
    },
    { 
      name: 'Grok Imagine Video 1.5 Preview', 
      description: 'Grok Imagine Video 1.5 Preview. Eight-second clips with audio.', 
      locked: true 
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 font-sans flex flex-col items-center transition-colors duration-300 pt-8 md:pt-16">
      
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Video Studio</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Just type what you imagine, and the video makes itself.</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl px-4">
        <div className="border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/50 rounded-3xl p-6 md:p-8 shadow-sm transition-colors duration-300">
          
          {/* Input */}
          <input 
            type="text" 
            className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none text-lg md:text-xl mb-8" 
            placeholder="Describe your video..." 
          />

          {/* Controls Container */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Plus Button */}
              <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800/50 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0">
                <Plus size={20} />
              </button>

              {/* Aspect Ratios */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800/50 rounded-full p-1 transition-colors duration-300">
                {aspectRatios.map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      aspectRatio === ratio
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>

              {/* Model Selector */}
              <button
                onClick={() => setIsModelOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800/50 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {selectedModel}
                <ChevronDown size={16} className="text-gray-400 dark:text-gray-500" />
              </button>
            </div>

            {/* Generate Button */}
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 flex-shrink-0">
              Generate
            </button>
          </div>

          <div className="mt-8 pt-5 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              Video generation is a paid feature — upgrade to start creating videos.
            </p>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
          Each video uses one message from your plan and takes a few minutes to render.
        </p>

        {/* Creations section */}
        <div className="mt-16 mb-20">
          <h2 className="text-gray-900 dark:text-white font-bold text-xl mb-12">Your creations</h2>
          {/* Empty state space */}
        </div>
      </div>

      {/* Model Selection Modal */}
      {isModelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 dark:bg-black/60 backdrop-blur-sm transition-all duration-300" onClick={() => setIsModelOpen(false)}>
          <div 
            className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/50 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl transition-colors duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-100 dark:border-gray-800/50">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Choose a video model</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Pick the model used for your next video generation.</p>
              </div>
              <button 
                onClick={() => setIsModelOpen(false)}
                className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white bg-gray-100 dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-1.5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-2.5 custom-scrollbar">
              {videoModels.map((model, mIdx) => {
                const isSelected = selectedModel === model.name;
                return (
                  <button
                    key={mIdx}
                    onClick={() => {
                      setSelectedModel(model.name);
                      setIsModelOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex justify-between items-center ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/10' 
                        : 'border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/30 hover:border-gray-300 dark:hover:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div>
                      <div className={`font-semibold mb-1 flex items-center gap-2 ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                        {model.name}
                        {model.locked && <Lock size={14} className="text-gray-400 dark:text-gray-500" />}
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
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoStudio;