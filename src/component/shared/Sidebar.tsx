"use client";

import React from 'react';
import Link from 'next/link';
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
  active?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const engagementLinks: NavLink[] = [
    { name: 'Image Studio', icon: FiImage, pro: true, href: '/image' },
    { name: 'Video Studio', icon: FiFilm, pro: true, href: '#' },
    { name: 'Compare', icon: FiLayers, pro: false, href: '#' },
    { name: 'Connectors', icon: FiShare2, pro: false, href: '#' },
    { name: 'History', icon: FiMessageSquare, pro: false, href: '#' },
    { name: 'Store', icon: FiShoppingBag, pro: false, href: '#' },
  ];

  const aiLinks: NavLink[] = [
    { name: 'AI Tasks', icon: FiGrid, pro: false, href: '#' },
    { name: 'AI Job Analysis', icon: FiFileText, pro: false, href: '#' },
    { name: 'AI SOP Builder', icon: FiList, pro: false, href: '#' },
  ];

  const supportLinks: NavLink[] = [
    { name: 'Support', icon: FiMessageCircle, pro: false, href: '#' },
    { name: 'Newsletter', icon: FiMail, pro: false, href: '#' },
    { name: 'Subscriptions', icon: BsDiamond, pro: false, href: '#' },
    { name: 'API Platform', icon: TbApiApp, pro: false, href: '#', active: false },
    { name: 'Discord', icon: FaDiscord, pro: false, href: '#' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col border-r border-gray-200/50 bg-white transition-transform duration-300 ease-in-out dark:border-gray-800/50 dark:bg-gray-950 lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        {/* Mobile Close Button & Header */}
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Top Section: New Chat Button */}
        <div className="p-4 pt-2 lg:pt-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95">
            <FiEdit className="h-5 w-5" />
            New Chat
          </button>
        </div>

        {/* Scrollable Navigation Area take space use flex 1 */}
        <div className="custom-scrollbar flex-1 overflow-y-auto px-3 pb-4">
          
          {/* Engagement Section */}
          <div className="mb-6">
            <h3 className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Engagement
            </h3>
            <ul className="space-y-1">
              {engagementLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)} 
                    className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
                      {link.name}
                    </div>
                    {link.pro && (
                      <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
                        PRO
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools Section */}
          <div className="mb-6">
            <ul className="space-y-1">
              {aiLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                  >
                    <link.icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
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
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      link.active 
                        ? 'bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-900/20 dark:text-blue-400' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white'
                    }`}
                  >
                    <link.icon className={`h-5 w-5 transition-colors ${
                      link.active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                    }`} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div> 

        {/* FOOTER Section  */}
        <div className="mt-auto w-full">
          <Footer />
        </div>

      </aside>
    </>
  );
};

export default Sidebar;