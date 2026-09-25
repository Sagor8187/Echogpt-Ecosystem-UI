"use client";

import React from 'react';
import Link from 'next/link';
import { FiMail, FiChevronRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

// --- Types ---
interface ContactOption {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

// --- Data ---
const preferredOption: ContactOption = {
  id: 'email',
  title: 'Email Us',
  description: 'We will aim to respond in 1 day', //[cite: 16]
  icon: FiMail,
  href: 'mailto:contact@example.com'
};

const socialOptions: ContactOption[] = [
  {
    id: 'facebook',
    title: 'Facebook',
    description: 'Follow us on Facebook for the latest updates and news!', //[cite: 16]
    icon: FaFacebookF,
    href: '#'
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'See behind the scenes and fresh updates!', //[cite: 16]
    icon: FaInstagram,
    href: '#'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Connect with us professionally on LinkedIn.', //[cite: 16]
    icon: FaLinkedinIn,
    href: '#'
  }
];

export default function TalkWithTeamComponent() {
  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col items-center pt-12 md:pt-20 px-4 pb-20 transition-colors duration-300">
      
      <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Main Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600  tracking-tight">
            Talk with Our Team {/*[cite: 16]*/}
          </h1>
        </header>

        {/* Section: Preferred Option */}
        <section className="mb-12" aria-labelledby="preferred-option-heading">
          <div className="border-b border-gray-200 dark:border-gray-800/60 pb-2 mb-6">
            <h2 id="preferred-option-heading" className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
              YOUR PREFERRED OPTION {/*[cite: 16]*/}
            </h2>
          </div>
          
          <Link href={preferredOption.href} className="block group">
            <article className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 md:p-6 flex items-center gap-5 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-pointer">
              
              <div className="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0">
                <preferredOption.icon size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {preferredOption.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {preferredOption.description}
                </p>
              </div>

              <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                <FiChevronRight size={20} />
              </div>

            </article>
          </Link>
        </section>

        {/* Section: Social Follow Options */}
        <section aria-labelledby="follow-us-heading">
          <div className="border-b border-gray-200 dark:border-gray-800/60 pb-2 mb-6">
            <h2 id="follow-us-heading" className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
              FOLLOW US {/*[cite: 16]*/}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {socialOptions.map((social) => (
              <Link key={social.id} href={social.href} className="block group">
                <article className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex items-center gap-4 h-full hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-pointer">
                  
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0">
                    <social.icon size={20} />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {social.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {social.description}
                    </p>
                  </div>

                  <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-transform duration-300 group-hover:translate-x-1 mt-auto md:mt-0 self-end md:self-center">
                    <FiChevronRight size={18} />
                  </div>

                </article>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}