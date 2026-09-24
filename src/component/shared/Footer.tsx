import React from 'react';
import Link from 'next/link';
import { FiHome, FiShare2, FiSettings, FiMoon } from 'react-icons/fi';

export default function Footer() {
  return (
    // Background and border matched EXACTLY with your Sidebar
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-200/50 dark:border-gray-800/50 py-4 px-6 flex items-center justify-between sm:justify-around">
      
      {/* Home Link */}
      <Link 
        href="/" 
        className="text-gray-400 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white hover:scale-110"
      >
        <FiHome className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>

      {/* Connectors / Share Link */}
      <Link 
        href="/connectors" 
        className="text-gray-400 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white hover:scale-110"
      >
        <FiShare2 className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>

      {/* Settings Link */}
      <Link 
        href="/settings" 
        className="text-gray-400 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white hover:scale-110"
      >
        <FiSettings className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>

      {/* Theme Toggle Button */}
      <button 
        className="text-gray-400 transition-colors duration-200 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white hover:scale-110"
      >
        <FiMoon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      
    </footer>
  );
}