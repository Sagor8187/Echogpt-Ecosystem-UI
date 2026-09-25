"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMail, FiUsers, FiVideo, FiSun, FiSmile } from 'react-icons/fi';
import { 
  FaRegLightbulb, 
  FaRocket, 
  FaBrain, 
  FaClipboardList, 
  FaGamepad,
  FaBicycle,
  FaFutbol,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaInstagram
} from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';
import { FaFileAlt } from "react-icons/fa";

type TabName = 'Ideas' | 'Work' | 'Fun' | 'Online Content';

interface Task {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBgColor: string;
}

const tasksData: Record<TabName, Task[]> = {
  'Ideas': [
    { id: 'ideas-1', title: 'Think Outside the Box', description: 'Breakthrough ideas await your discovery', icon: FaRegLightbulb, iconBgColor: 'bg-yellow-500/20 text-yellow-500' },
    { id: 'ideas-2', title: 'Startup', description: 'Get a list of ambitious startup ideas based on your area of interest', icon: FaRocket, iconBgColor: 'bg-red-500/20 text-red-500' },
    { id: 'ideas-3', title: 'Innovate and Elevate', description: 'Your guide to unique and fresh ideas', icon: BsStars, iconBgColor: 'bg-blue-500/20 text-blue-500' },
  ],
  'Work': [
    { id: 'work-1', title: 'Max Productivity', description: 'Max productivity, achieve more, stress less', icon: FaBrain, iconBgColor: 'bg-purple-500/20 text-purple-500' },
    { id: 'work-2', title: 'Recruiting', description: 'Define the qualifications for any position', icon: FaClipboardList, iconBgColor: 'bg-teal-500/20 text-teal-500' },
    { id: 'work-3', title: 'CV Builder', description: 'Generate a creative resume', icon: FaFileAlt, iconBgColor: 'bg-gray-500/20 text-gray-500' },
    { id: 'work-4', title: 'Email', description: 'Get help to craft a compelling email', icon: FiMail, iconBgColor: 'bg-orange-500/20 text-orange-500' },
    { id: 'work-5', title: 'Interview Tips', description: 'Receive helpful tips for your interview', icon: FiUsers, iconBgColor: 'bg-indigo-500/20 text-indigo-500' },
  ],
  'Fun': [
    { id: 'fun-1', title: 'Gaming', description: 'Level up your gaming skills and conquer challenges', icon: FaGamepad, iconBgColor: 'bg-indigo-500/20 text-indigo-500' },
    { id: 'fun-2', title: 'Movie Time', description: 'Cinematic delight, enjoy the latest blockbuster', icon: FiVideo, iconBgColor: 'bg-cyan-500/20 text-cyan-500' },
    { id: 'fun-3', title: 'Cycling Day', description: 'Pedal through scenic routes, relish the ride', icon: FaBicycle, iconBgColor: 'bg-rose-500/20 text-rose-500' },
    { id: 'fun-4', title: 'Outdoor Activities', description: 'Embrace nature, engage in thrilling outdoor adventures', icon: FaFutbol, iconBgColor: 'bg-blue-500/20 text-blue-500' },
    { id: 'fun-5', title: 'Fun with buddies', description: 'Create memories with friends, have endless fun', icon: FiSmile, iconBgColor: 'bg-purple-500/20 text-purple-500' },
  ],
  'Online Content': [
    { id: 'oc-1', title: 'X Posts', description: 'Summarize your text into a post (Tweet)', icon: FaXTwitter, iconBgColor: 'bg-gray-800/20 dark:bg-gray-500/20 text-gray-900 dark:text-white' },
    { id: 'oc-2', title: 'YouTube Scripts', description: 'Create a script for your video on any topic', icon: FaYoutube, iconBgColor: 'bg-red-500/20 text-red-500' },
    { id: 'oc-3', title: 'TikTok Posts', description: 'Craft TikTok posts on any topic', icon: FaTiktok, iconBgColor: 'bg-pink-500/20 text-pink-500' },
    { id: 'oc-4', title: 'TikTok Captions', description: 'Boost your TikTok views with appealing captions', icon: FaTiktok, iconBgColor: 'bg-pink-500/20 text-pink-500' },
    { id: 'oc-5', title: 'Insta Content', description: 'Create Instagram posts on any topic', icon: FaInstagram, iconBgColor: 'bg-fuchsia-500/20 text-fuchsia-500' },
    { id: 'oc-6', title: 'Insta Reels', description: 'Get creative descriptions for your Instagram Reels', icon: FaInstagram, iconBgColor: 'bg-fuchsia-500/20 text-fuchsia-500' },
  ]
};

const AITasksComponent = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Ideas');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs: TabName[] = ['Ideas', 'Work', 'Fun', 'Online Content'];

  const filteredTasks = tasksData[activeTab].filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300 pb-20 custom-scrollbar overflow-x-hidden">
      
      {/* Semantic Header with Framer Motion */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-3xl mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          EchoGPT AI Tasks
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.
        </p>
      </motion.header>

      {/* Search Input Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full max-w-4xl relative mb-10"
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
          <FiSearch size={20} />
        </div>
        <input 
          type="search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for the Apps" 
          aria-label="Search for AI Tasks"
          className="w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 rounded-2xl pl-12 pr-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500/70 shadow-sm transition-all"
        />
      </motion.div>

      {/* Semantic Navigation for Tabs */}
      <nav className="w-full max-w-4xl border-b border-gray-200 dark:border-gray-800/80 mb-8" aria-label="Task Categories">
        <ul className="flex flex-wrap gap-2 md:gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <li key={tab} className="relative">
                <button
                  onClick={() => setActiveTab(tab)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-500' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {tab}
                </button>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Semantic Section for the Cards Grid */}
      <section className="w-full max-w-4xl" aria-label={`${activeTab} Tasks`}>
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <motion.article 
                  key={task.id} 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 flex flex-col hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-colors cursor-pointer group"
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${task.iconBgColor}`}>
                    <task.icon size={22} />
                  </div>
                  
                  {/* Content */}
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {task.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {task.description}
                  </p>
                </motion.article>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-12 text-center text-gray-500 dark:text-gray-400"
              >
                No tasks found matching "{searchQuery}".
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
};

export default AITasksComponent;