"use client";

import React, { useState } from 'react';
import { ChevronDown, Plus, X, Check } from 'lucide-react';

const ImageStudio = () => {
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
        { name: 'Nano Banana Pro', description: 'Google\'s best. Highest fidelity and the strongest at text in images.' },
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
    <div className="min-h-screen bg-gray-950 text-white font-sans flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mt-16 mb-8 px-4">
        <h1 className="text-3xl font-bold text-white mb-3">Image Studio</h1>
        <p className="text-gray-400 text-lg">Create images that stop the scroll.</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl px-4">
        <div className="border border-gray-800/50 bg-gray-950 rounded-2xl p-6 md:p-8 shadow-sm">
          {/* Input */}
          <input 
            type="text" 
            className="w-full bg-transparent text-white placeholder-gray-500 outline-none text-lg md:text-xl mb-8" 
            placeholder="Turn my photo into a professional headshot" 
            defaultValue="Turn my photo into a professional headshot" 
          />

          {/* Controls Container */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex flex-wrap items-center gap-4">
              {/* Plus Button */}
              <button className="w-10 h-10 rounded-full border border-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-gray-800/50 transition-colors flex-shrink-0">
                <Plus size={20} />
              </button>

              {/* Aspect Ratios */}
              <div className="flex items-center bg-gray-900/50 border border-gray-800/50 rounded-full p-1">
                {aspectRatios.map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-3 md:px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      aspectRatio === ratio
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>

              {/* Image Count */}
              <div className="flex items-center bg-gray-900/50 border border-gray-800/50 rounded-full p-1">
                {imageCounts.map(num => (
                  <button
                    key={num}
                    onClick={() => setImageCount(num)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      imageCount === num
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Model Selector */}
              <button
                onClick={() => setIsModelOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800/50 text-sm font-medium text-white hover:bg-gray-800/50 transition-colors bg-gray-900/30"
              >
                {selectedModel}
                <ChevronDown size={16} className="text-gray-400" />
              </button>
            </div>

            {/* Generate Button */}
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 flex-shrink-0">
              Generate
            </button>
          </div>

          <div className="mt-8 pt-5 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Image generation is a paid feature — upgrade to start creating images.
            </p>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Each image uses one message from your plan. Generation takes up to a minute.
        </p>

        {/* Creations section */}
        <div className="mt-16 mb-20">
          <h2 className="text-white font-bold text-xl mb-12">Your creations</h2>
          <div className="text-center text-gray-500">
            Nothing here yet — describe an image above to get started.
          </div>
        </div>
      </div>

      {/* Model Selection Modal */}
      {isModelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModelOpen(false)}>
          <div 
            className="bg-gray-950 border border-gray-800/50 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 pb-4 flex justify-between items-start border-b border-gray-800/50">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Choose a model</h2>
                <p className="text-gray-400 text-sm">Picks the model used for your next generation.</p>
              </div>
              <button 
                onClick={() => setIsModelOpen(false)}
                className="text-gray-500 hover:text-white bg-gray-900/50 hover:bg-gray-800/50 rounded-full p-1.5 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
              {models.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1">{section.category}</h3>
                  <div className="space-y-2.5">
                    {section.options.map((model, mIdx) => {
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
                              ? 'border-blue-600 bg-blue-900/10' 
                              : 'border-gray-800/50 bg-gray-900/30 hover:border-gray-700/80 hover:bg-gray-800/40'
                          }`}
                        >
                          <div>
                            <div className={`font-semibold mb-1 ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                              {model.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {model.description}
                            </div>
                          </div>
                          {isSelected && (
                            <div className="bg-blue-600 rounded-full p-0.5 text-white flex-shrink-0 ml-4">
                              <Check size={16} strokeWidth={3} />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Global Style for Custom Scrollbar matching the dark theme */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #374151; /* gray-700 */
          border-radius: 20px;
          border: 3px solid #030712; /* gray-950 */
        }
      `}} />
    </div>
  );
};

export default ImageStudio;