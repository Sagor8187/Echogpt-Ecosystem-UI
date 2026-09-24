"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // that is hamburger open close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* Navbar send state value in navbar */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex flex-1 overflow-hidden relative">
        
   
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}