"use client";

import React, { useState } from 'react';
import { 
  FiGrid, 
  FiMaximize2, 
  FiX, 
  FiCheck,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiBox,
  FiHexagon,
  FiCircle
} from 'react-icons/fi';

// Define the model type based on the screenshots
interface AIModel {
  id: string;
  name: string;
  isPro?: boolean;
  icon: React.ElementType;
  colorClass: string;
}

// Extracted data from the modal screenshots
const availableModels: AIModel[] = [
  { id: 'echo', name: 'EchoGPT', icon: FiHexagon, colorClass: 'bg-purple-600' },
  { id: 'deepseek-pro', name: 'DeepSeek V4 Pro', icon: FiBox, colorClass: 'bg-blue-600' },
  { id: 'nemotron', name: 'Nemotron 3 Ultra', icon: FiDatabase, colorClass: 'bg-green-500' },
  { id: 'deepseek-flash', name: 'DeepSeek V4 Flash', icon: FiBox, colorClass: 'bg-blue-500' },
  { id: 'glm-52', name: 'GLM-5.2', icon: FiCircle, colorClass: 'bg-gray-800' },
  { id: 'mimo-pro', name: 'MiMo V2.5 Pro', icon: FiCpu, colorClass: 'bg-gray-900' },
  { id: 'tencent', name: 'Tencent Hy3', isPro: true, icon: FiLayers, colorClass: 'bg-indigo-500' },
  { id: 'gpt-56', name: 'GPT-5.6 Sol', icon: FiHexagon, colorClass: 'bg-emerald-600' },
  { id: 'qwen-plus', name: 'Qwen 3.7 Plus', icon: FiCircle, colorClass: 'bg-blue-400' },
  { id: 'longcat', name: 'LongCat 2.0', icon: FiCpu, colorClass: 'bg-teal-500' },
  { id: 'kimi', name: 'Kimi K2.7 Code', icon: FiBox, colorClass: 'bg-gray-700' },
  { id: 'grok-45', name: 'Grok 4.5', icon: FiX, colorClass: 'bg-black' },
  { id: 'gemini-flash', name: 'Gemini 3.7 Flash', icon: FiHexagon, colorClass: 'bg-blue-400' },
  { id: 'muse-spark', name: 'Muse Spark 1.2', icon: FiLayers, colorClass: 'bg-indigo-600' }
];

const CompareComponent = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'focus'>('compare');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Default selected models
  const [selectedModelIds, setSelectedModelIds] = useState<string[]>([
    'echo', 'deepseek-pro', 'nemotron'
  ]);

  const toggleModelSelection = (id: string) => {
    setSelectedModelIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(modelId => modelId !== id);
      }
      // Assuming a max of 5 models can be selected
      if (prev.length >= 5) return prev;
      return [...prev, id];
    });
  };

  const selectedModelsData = availableModels.filter(m => selectedModelIds.includes(m.id));

  return (
    <div className="w-full min-h-screen bg-gray-50  dark:bg-gray-950 font-sans flex flex-col items-center pt-8 md:pt-16 transition-colors duration-300">
      
      {/* Top Navigation Pills */}
      <div className="flex p-1 bg-gray-200/50 dark:bg-gray-900/50 rounded-full mb-10 md:mb-16 border border-gray-200 dark:border-gray-800/50">
        <button
          onClick={() => setActiveTab('compare')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'compare'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <FiGrid size={16} />
          Compare
        </button>
        <button
          onClick={() => setActiveTab('focus')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === 'focus'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <FiMaximize2 size={16} />
          Focus
        </button>
      </div>

      {/* Main Content Area (Removed justify-between and flex-1 to fix the gap) */}
      <div className="w-full max-w-4xl px-4 flex flex-col items-center mt-4 md:mt-8">
        
        {/* Dynamic Center Text / Pills */}
        <div className="w-full flex items-center justify-center mb-10 md:mb-14">
          {activeTab === 'compare' ? (
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl text-center">
              Ask one question and see how {selectedModelIds.length} models answer it.
            </p>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {selectedModelsData.map(model => (
                <div 
                  key={model.id} 
                  className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm transition-colors"
                >
                  {model.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Chat Input Container (Color updated to match top container) */}
        <div className="w-full">
          <div className="border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/50 rounded-2xl p-4 shadow-sm transition-colors duration-300">
            
            <input 
              type="text" 
              className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none text-base md:text-lg mb-12 px-2" 
              placeholder={`Message ${selectedModelIds.length} models...`} 
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
              
              {/* Model Selector Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                {/* Overlapping Icons */}
                <div className="flex items-center -space-x-2">
                  {selectedModelsData.slice(0, 3).map((model, idx) => (
                    <div 
                      key={idx} 
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${model.colorClass} border-2 border-gray-50 dark:border-[#13131a] z-[${3-idx}]`}
                    >
                      <model.icon size={10} />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 pr-2">
                  {selectedModelsData[0]?.name} {selectedModelIds.length > 1 ? `+${selectedModelIds.length - 1} more` : ''}
                </span>
              </button>

              {/* Compare Submit Button */}
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
                Compare
              </button>
            </div>
          </div>
          
          {/* Footer limits text */}
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-3 px-2">
            5 of 5 comparisons left today · resets in a day · upgrade for 50 a day
          </p>
        </div>
      </div>

      {/* Choose Models Modal (Kept same as before) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 dark:bg-black/60 backdrop-blur-sm transition-all duration-300" onClick={() => setIsModalOpen(false)}>
          <div 
            className="bg-white dark:bg-[#13131a] border border-gray-200 dark:border-gray-800/80 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden transition-colors duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Choose models</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Every model answers the same prompt, side by side.</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                  {selectedModelIds.length}/5 models selected · each column costs one message
                </p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white bg-gray-100 dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full p-1.5 transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body (Grid of models) */}
            <div className="overflow-y-auto px-6 pb-6 custom-scrollbar flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableModels.map((model) => {
                  const isSelected = selectedModelIds.includes(model.id);
                  return (
                    <button
                      key={model.id}
                      onClick={() => toggleModelSelection(model.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                        isSelected 
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                          : 'border-gray-200 dark:border-gray-800/60 bg-transparent hover:border-gray-300 dark:hover:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-900/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white ${model.colorClass}`}>
                          <model.icon size={14} />
                        </div>
                        <span className={`font-medium text-sm ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                          {model.name}
                        </span>
                        {model.isPro && (
                          <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-600 ml-1">Pro</span>
                        )}
                      </div>
                      
                      {isSelected && (
                        <div className="bg-blue-600 rounded-full p-0.5 text-white flex-shrink-0">
                          <FiCheck size={14} strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800/80 bg-gray-50 dark:bg-[#0b0a10] flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition-all duration-300 active:scale-95"
              >
                Apply for this chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareComponent;