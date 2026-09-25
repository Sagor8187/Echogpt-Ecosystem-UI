"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight, FiHexagon } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

export default function SignInView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing in with:', email, password);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-4 py-12 transition-colors duration-300 custom-scrollbar overflow-x-hidden">
      
      <div className="w-full max-w-md">
        
        {/* Brand Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 mb-4">
            <FiHexagon size={32} />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome back to EchoGPT
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Please enter your details to sign in and continue your creative flow.
          </p>
        </motion.div>

        {/* Sign In Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800/80 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none"
        >
          
          {/* Google SSO Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-3.5 px-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors shadow-sm mb-6"
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </motion.button>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200 dark:border-gray-800"></div>
            <span className="px-3 text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold">Or with email</span>
            <div className="flex-1 border-t border-gray-200 dark:border-gray-800"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl pl-11 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <FiLock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl pl-11 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors shadow-md shadow-blue-600/20 mt-2"
            >
              <span>Sign In</span>
              <FiArrowRight size={18} />
            </motion.button>

          </form>

          {/* Footer Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>

        </motion.div>

      </div>
    </main>
  );
}