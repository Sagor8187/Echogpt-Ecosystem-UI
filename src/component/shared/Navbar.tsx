"use client";

import Link from 'next/link';
import { FiLogIn, FiMenu } from 'react-icons/fi'; 
import { FaBahai } from "react-icons/fa6";
import ModeToggle from './Darktheme';


interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl transition-colors duration-300 dark:border-gray-800/50 dark:bg-gray-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left side: Hamburger Menu & Logo for EchoGPT */}
        <div className="flex items-center gap-3">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuClick}
            className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>

          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className='text-blue-600'><FaBahai /></span>
            Echo<span className="text-blue-600 dark:text-blue-500">GPT</span>
          </Link>
        </div>

        {/* Right side: Sign In Button with Hover Icon Effect */}
        <div className="flex items-center gap-4">
            <div>
                <ModeToggle></ModeToggle>
            </div>
          <Link
            href="/signin"
            className="group relative flex h-10 w-32 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          >
            {/* Button Text */}
            <span className="absolute flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-x-3">
              Sign In
            </span>
            
            {/* react-icons Icon that appears on hover */}
            <FiLogIn 
              className="absolute right-4 text-lg opacity-0 transition-all duration-300 ease-out translate-x-4 group-hover:translate-x-0 group-hover:opacity-100" 
            />
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;