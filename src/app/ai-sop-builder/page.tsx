"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBriefcase, 
  FiTarget, 
  FiPenTool, 
  FiFileText, 
  FiArrowLeft,
  FiGlobe,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiFile
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

// --- Types ---
type ViewState = 'home' | 'destination';

interface TemplateCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
}

interface CountryCard {
  id: string;
  code: string;
  name: string;
  visaType: string;
  words: string;
  processing: string;
  requirements: string[];
}

// --- Data ---
const templatesData: TemplateCard[] = [
  {
    id: 'academic',
    title: 'Academic Excellence',
    description: 'Ideal for students with strong academic records applying to graduate programs.',
    icon: FaGraduationCap,
    tags: ['Academic', 'Graduate Studies', 'Scholarships']
  },
  {
    id: 'professional',
    title: 'Professional Track',
    description: 'Designed for applicants with significant work experience seeking advanced degrees.',
    icon: FiBriefcase,
    tags: ['Career', 'Professional Development', 'MBA']
  },
  {
    id: 'research',
    title: 'Research Focused',
    description: 'Perfect for research-oriented applicants targeting PhD or research-intensive programs.',
    icon: FiTarget,
    tags: ['Research', 'PhD', 'Innovation']
  },
  {
    id: 'creative',
    title: 'Creative Arts',
    description: 'Tailored for applicants to creative programs like fine arts, design, or writing.',
    icon: FiPenTool,
    tags: ['Creative', 'Arts', 'Portfolio']
  }
];

const countriesData: CountryCard[] = [
  {
    id: 'us', code: 'US', name: 'United States', visaType: 'F-1 Student Visa',
    words: '500–1000 words', processing: 'Processing: 3–5 weeks',
    requirements: ['Clear statement of purpose', 'Academic and professional goals']
  },
  {
    id: 'gb', code: 'GB', name: 'United Kingdom', visaType: 'Student Visa (Tier 4)',
    words: '500–1000 words', processing: 'Processing: 3 weeks (outside UK)',
    requirements: ['Personal statement focusing on course', 'Relevant experience and aspirations']
  },
  {
    id: 'ca', code: 'CA', name: 'Canada', visaType: 'Study Permit',
    words: '500–1000 words', processing: 'Processing: 4–6 weeks',
    requirements: ['Statement of interest in program', 'Academic background and goals']
  },
  {
    id: 'au', code: 'AU', name: 'Australia', visaType: 'Student Visa (Subclass 500)',
    words: '300–500 words', processing: 'Processing: 4–6 weeks',
    requirements: ['Motivation for studying in Australia', 'Academic and professional ties']
  },
  {
    id: 'de', code: 'DE', name: 'Germany', visaType: 'Student Visa (National Visa)',
    words: '500–750 words', processing: 'Processing: 6–8 weeks',
    requirements: ['Motivation for chosen field', 'Academic qualifications alignment']
  },
  {
    id: 'fr', code: 'FR', name: 'France', visaType: 'Student Visa (VLS-TS)',
    words: '500–1000 words', processing: 'Processing: 3–4 weeks',
    requirements: ['Motivation for studying in France', 'Academic project description']
  }
];

// --- Main Component ---
export default function SOPBuilderComponent() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    setCurrentView('destination');
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedTemplate(null);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 custom-scrollbar overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <HomeView onSelectTemplate={handleTemplateSelect} />
          </motion.div>
        ) : (
          <motion.div
            key="destination"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <DestinationView onBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// --- Sub-Component: Home View ---
function HomeView({ onSelectTemplate }: { onSelectTemplate: (id: string) => void }) {
  return (
    <div className="flex flex-col items-center pt-12 md:pt-20 px-4 pb-20 w-full">
      
      {/* 1st Position: Header & Features */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl flex flex-col items-center text-center mb-16"
      >
        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 mb-6">
          <FaGraduationCap className="text-white text-3xl" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-500">
          AI-Powered SOP Builder
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mb-10">
          Create compelling Statements of Purpose with AI assistance, tailored for your dream university and destination country.
        </p>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {[
            { icon: HiSparkles, title: "AI-Enhanced", desc: "Powered by Google Gemini" },
            { icon: FiGlobe, title: "6 Countries", desc: "Country-specific guidelines" },
            { icon: FiUsers, title: "4 Templates", desc: "Academic, Professional, Research, Creative" }
          ].map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                <feat.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg mb-1">{feat.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.header>

      {/* 2nd Position: SOP Templates */}
      <section className="w-full max-w-4xl mb-16" aria-label="SOP Templates">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-500 mb-3">
            Choose Your SOP Template
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select the template that best matches your background and the focus of your application. Each template is optimized for different types of applicants and academic goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {templatesData.map((template, index) => (
            <motion.article 
              key={template.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectTemplate(template.id)}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md transition-colors group flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors flex-shrink-0">
                  <template.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {template.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50 text-xs text-gray-600 dark:text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 3rd Position: Empty History */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-4xl" 
        aria-label="SOP History"
      >
        <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-12 flex flex-col items-center text-center shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center text-blue-500 mb-4">
            <FiFileText size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No SOP history available
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Start by generating a new Statement of Purpose!
          </p>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-md shadow-blue-600/20 transition-colors"
          >
            Create New SOP
          </motion.button>
        </div>
      </motion.section>
      
    </div>
  );
}

// --- Sub-Component: Destination Country View ---
function DestinationView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center pt-8 md:pt-16 px-4 pb-20 w-full">
      
      <div className="w-full max-w-5xl">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-center gap-4 mb-10"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors self-start"
          >
            <FiArrowLeft size={18} />
            Back
          </motion.button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
              Select Destination Country
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              Choose where you plan to study to get country-specific requirements and guidance.
            </p>
          </div>
        </motion.header>

        {/* Countries Grid */}
        <section aria-label="Country Selection Grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {countriesData.map((country, index) => (
              <motion.article 
                key={country.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md transition-colors cursor-pointer group flex flex-col"
              >
                {/* Country Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-2xl md:text-3xl font-bold text-gray-300 dark:text-gray-700 group-hover:text-blue-500/30 transition-colors">
                    {country.code}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {country.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {country.visaType}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiFile className="text-gray-400" size={16} />
                    {country.words}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiClock className="text-gray-400" size={16} />
                    {country.processing}
                  </div>
                </div>

                {/* Key Requirements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {country.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg border border-gray-100 dark:border-gray-700/50">
                        <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                        <span className="truncate">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}