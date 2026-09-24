"use client";

import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';

const ConnectorsComponent = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50  dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="text-center mb-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Connectors</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Connect an MCP server and its tools become available while you chat.
        </p>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center">
        
        {/* Status and Action Button Row */}
        <div className={`w-full flex items-center justify-between mb-8 transition-opacity duration-300 ${showForm ? 'opacity-50' : 'opacity-100'}`}>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            0 of 1 connected · upgrade for unlimited
          </p>
          <button 
            onClick={() => setShowForm(true)}
            disabled={showForm}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-xl transition-all duration-300 active:scale-95 ${showForm ? 'cursor-not-allowed bg-blue-800' : ''}`}
          >
            Add connector
          </button>
        </div>

        {/* Dynamic Content Area */}
        <div className="w-full transition-all duration-500">
          
          {!showForm ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                {/* Node-like Icon representing connections */}
                <FiShare2 size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                No connectors yet.
              </h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                Add an MCP server above and the model can use its tools in chat.
              </p>
            </div>
          ) : (
            /* Add Connector Form */
            <div className="w-full bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 md:p-8 shadow-sm animate-in slide-in-from-bottom-4 fade-in duration-300">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Add custom connector</h2>
              
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Name — shown in the connectors list" 
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700/80 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* URL Input */}
                <div>
                  <input 
                    type="text" 
                    placeholder="https://mcp.example.com/mcp" 
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700/80 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 px-1">
                    The HTTPS address where the server accepts MCP requests.
                  </p>
                </div>

                {/* Authorization Input */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Authorization header (optional), e.g. Bearer abc123" 
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700/80 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 px-1">
                    Only connect servers you trust — their tools can act on your behalf.
                  </p>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-4 mt-10">
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium py-2 px-4 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition-all duration-300 active:scale-95"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ConnectorsComponent;