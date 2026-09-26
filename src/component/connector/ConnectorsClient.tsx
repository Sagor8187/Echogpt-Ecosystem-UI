"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShare2 } from 'react-icons/fi';

export default function ConnectorsClient() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300 custom-scrollbar overflow-x-hidden">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold text-blue-600  mb-3">Connectors</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Connect an MCP server and its tools become available while you chat.
        </p>
      </motion.div>

      <div className="w-full max-w-2xl flex flex-col items-center">
        
        {/* Status and Action Button Row */}
        <motion.div 
          animate={{ opacity: showForm ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-full flex items-center justify-between mb-8"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            0 of 1 connected · upgrade for unlimited
          </p>
          <motion.button 
            whileHover={{ scale: showForm ? 1 : 1.03 }}
            whileTap={{ scale: showForm ? 1 : 0.95 }}
            onClick={() => setShowForm(true)}
            disabled={showForm}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-xl transition-colors shadow-md shadow-blue-600/20 ${showForm ? 'cursor-not-allowed bg-blue-800 opacity-60' : ''}`}
          >
            Add connector
          </motion.button>
        </motion.div>

        {/* Dynamic Content Area with AnimatePresence */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {!showForm ? (
              /* Empty State */
              <motion.div 
                key="empty-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex bg-gray-900/60 rounded-md flex-col items-center justify-center py-20 text-center"
              >
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className=" text-gray-400 dark:text-gray-600 mb-4"
                >
                  <FiShare2 size={40} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                  No connectors yet.
                </h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  Add an MCP server above and the model can use its tools in chat.
                </p>
              </motion.div>
            ) : (
              /* Add Connector Form */
              <motion.div 
                key="connector-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 md:p-8 shadow-sm"
              >
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
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(false)}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium py-2 px-4 transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition-colors shadow-md shadow-blue-600/20"
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}