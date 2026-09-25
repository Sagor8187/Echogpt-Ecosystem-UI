"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FiEdit, FiImage, FiFilm, FiLayers, FiShare2, FiMessageSquare, 
  FiShoppingBag, FiGrid, FiFileText, FiList, FiMessageCircle, FiMail, FiX 
} from 'react-icons/fi';
import { BsDiamond } from 'react-icons/bs';
import { TbApiApp } from 'react-icons/tb';
import { FaDiscord } from 'react-icons/fa';
import Footer from './Footer';

interface NavLink {
  name: string;
  icon: IconType;
  pro: boolean;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  // Get current route pathname to check active link automatically
  const pathname = usePathname();

  const engagementLinks: NavLink[] = [
    { name: 'Image Studio', icon: FiImage, pro: true, href: '/image' },
    { name: 'Video Studio', icon: FiFilm, pro: true, href: '/video' },
    { name: 'Compare', icon: FiLayers, pro: false, href: '/compare' },
    { name: 'Connectors', icon: FiShare2, pro: false, href: '/connectors' },
    { name: 'History', icon: FiMessageSquare, pro: false, href: '/history' },
    { name: 'Store', icon: FiShoppingBag, pro: false, href: '/store' },
  ];

  const aiLinks: NavLink[] = [
    { name: 'AI Tasks', icon: FiGrid, pro: false, href: '/ai-tasks' },
    { name: 'AI Job Analysis', icon: FiFileText, pro: false, href: '/ai-job-analysis' },
    { name: 'AI SOP Builder', icon: FiList, pro: false, href: '/ai-sop-builder' },
  ];

  const supportLinks: NavLink[] = [
    { name: 'Support', icon: FiMessageCircle, pro: false, href: '/support' },
    { name: 'Newsletter', icon: FiMail, pro: false, href: '/newsletter' },
    { name: 'Subscriptions', icon: BsDiamond, pro: false, href: '/subscriptions' },
    { name: 'API Platform', icon: TbApiApp, pro: false, href: '/api-platform' },
    { name: 'Discord', icon: FaDiscord, pro: false, href: '/discord' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <motion.div 
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <motion.aside 
        initial={false}
        animate={{ 
          x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : (isOpen ? 0 : '-100%') 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col border-r border-gray-200/50 bg-white dark:border-gray-800/50 dark:bg-gray-950 lg:translate-x-0 lg:static"
      >
        
        {/* Mobile Close Button & Header */}
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)} 
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <FiX className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Top Section: New Chat Button */}
        <div className="p-4 pt-2 lg:pt-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
          >
            <FiEdit className="h-5 w-5" />
            New Chat
          </motion.button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="custom-scrollbar flex-1 overflow-y-auto px-3 pb-4">
          
          {/* Engagement Section */}
          <div className="mb-6">
            <h3 className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Engagement
            </h3>
            <ul className="space-y-1">
              {engagementLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)} 
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/20 dark:text-blue-400' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <link.icon className={`h-5 w-5 transition-colors ${
                            isActive 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                          }`} />
                          {link.name}
                        </div>
                        {link.pro && (
                          <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                            PRO
                          </span>
                        )}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* AI Tools Section */}
          <div className="mb-6">
            <ul className="space-y-1">
              {aiLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/20 dark:text-blue-400' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white'
                        }`}
                      >
                        <link.icon className={`h-5 w-5 transition-colors ${
                          isActive 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                        }`} />
                        {link.name}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Divider */}
          <div className="mb-6 px-3">
            <div className="h-px w-full bg-gray-200/50 dark:bg-gray-800/50"></div>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Help & Support
            </h3>
            <ul className="space-y-1">
              {supportLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/20 dark:text-blue-400' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white'
                        }`}
                      >
                        <link.icon className={`h-5 w-5 transition-colors ${
                          isActive 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                        }`} />
                        {link.name}
                      </motion.div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div> 

        {/* Footer Section */}
        <div className="mt-auto w-full">
          <Footer />
        </div>

      </motion.aside>
    </>
  );
};

export default Sidebar;