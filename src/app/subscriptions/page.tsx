"use client";

import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiHexagon, 
  FiDatabase, 
  FiCpu, 
  FiBox, 
  FiCircle, 
  FiLayers, 
  FiTerminal
} from 'react-icons/fi';
import { 
  FaMicrosoft, 
  FaGoogle, 
  FaXTwitter, 
  FaLinkedinIn 
} from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

// --- Shared Data for Models ---
const basicModels = [
  { name: 'EchoGPT', icon: FiHexagon, color: 'text-blue-500' }, //[cite: 18]
  { name: 'Nemotron 3 Ultra', icon: FiDatabase, color: 'text-green-500' }, //[cite: 18]
  { name: 'LongCat 2.0', icon: FiCpu, color: 'text-emerald-500' } //[cite: 18]
];

const advancedModels = [
  { name: 'DeepSeek V4 Pro', icon: FiBox, color: 'text-blue-600' }, //[cite: 19]
  { name: 'GLM-5.2', icon: FiCircle, color: 'text-gray-400' }, //[cite: 19]
  { name: 'DeepSeek V4 Flash', icon: FiBox, color: 'text-blue-500' }, //[cite: 19]
  { name: 'Tencent Hy3', icon: FiLayers, color: 'text-indigo-500' }, //[cite: 19]
  { name: 'MiMo V2.5 Pro', icon: FiCpu, color: 'text-gray-300' }, //[cite: 19]
  { name: 'Qwen 3.7 Plus', icon: FiCircle, color: 'text-blue-400' }, //[cite: 19]
  { name: 'GPT-5.6 Sol', icon: FiTerminal, color: 'text-emerald-600' }, //[cite: 19]
  { name: 'Kimi K2.7 Code', icon: FiBox, color: 'text-gray-400' }, //[cite: 19]
  { name: 'GLM-5.3 Flash', icon: FiCircle, color: 'text-gray-400' }, //[cite: 19]
  { name: 'Qwen 3.8 27B', icon: FiCircle, color: 'text-blue-400' }, //[cite: 19]
  { name: 'Qwen 3.7 Max', icon: FiCircle, color: 'text-blue-400' }, //[cite: 19]
  { name: 'Qwen 3.6 Plus', icon: FiCircle, color: 'text-blue-400' }, //[cite: 19]
  { name: 'Gemini 3.8 Flash', icon: FiHexagon, color: 'text-blue-400' }, //[cite: 19]
  { name: 'Kimi K3', icon: FiBox, color: 'text-gray-400' }, //[cite: 19]
  { name: 'MiniMax M3', icon: FiCircle, color: 'text-pink-400' }, //[cite: 19]
  { name: 'Inkling', icon: FiCircle, color: 'text-gray-300' }, //[cite: 20]
  { name: 'Inkling Small', icon: FiCircle, color: 'text-gray-300' } //[cite: 20]
];

// --- Pricing Plans Data ---
const pricingPlans = [
  {
    id: 'monthly',
    title: 'Monthly Plan',
    price: '9.99',
    period: 'month',
    description: 'Experience the benefits of Pro membership with unlimited chats for one month.' //[cite: 20]
  },
  {
    id: 'quarterly',
    title: 'Quarterly Plan',
    price: '29.99',
    period: '3 month',
    description: 'Unlock three months of Pro features and save with quarterly billing.' //[cite: 20]
  },
  {
    id: 'half-yearly',
    title: 'Half-Yearly Plan',
    price: '59.99',
    period: '6 month',
    description: 'Enjoy six months of uninterrupted Pro access and better savings.' //[cite: 21]
  },
  {
    id: 'annual',
    title: 'Annual Plan',
    price: '99.99',
    period: '12 month',
    description: 'Get the best value with a full year of Pro features and maximum savings.' //[cite: 21]
  }
];

// --- FAQ Data ---
const faqs = [
  {
    question: 'What platforms is EchoGPT available on?', //[cite: 22]
    answer: 'Currently, EchoGPT is available as a web app. We are actively working on expanding our reach to android, iOS and developing EchoGPT as a plug-in as well.' //[cite: 22]
  },
  {
    question: 'Is my personal data safe and secure when using EchoGPT?', //[cite: 22]
    answer: 'Yes, we prioritise your data security with robust organisational and technical measures. For more details, refer to our Privacy Policy.' //[cite: 22]
  },
  {
    question: 'Who do I contact if I have questions or need support?', //[cite: 22]
    answer: 'For support, email us at appifydevs@gmail.com. We aim to respond within 48 hours.' //[cite: 22]
  },
  {
    question: 'How can I cancel my subscription?', //[cite: 22]
    answer: 'If you subscribe to EchoGPT there is no refund if you cancel subscription.' //[cite: 22]
  }
];

export default function PricingAndFAQComponent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 flex flex-col items-center pt-12 md:pt-20 px-4 pb-20 transition-colors duration-300 custom-scrollbar">
      
      {/* --- PRICING SECTION --- */}
      <section className="w-full max-w-7xl mb-24 animate-in fade-in slide-in-from-bottom-4 duration-500" aria-label="Pricing Plans">
        
        {/* Pricing Header */}
        <header className="text-center w-full max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xl px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm font-medium text-blue-600 dark:text-blue-500 mb-6 shadow-sm">
            Pricing {/*[cite: 18]*/}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600  mb-4 tracking-tight">
            Affordable plans for every need {/*[cite: 18]*/}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Want to get more out of EchoGPT Plus? Subscribe to one of our professional plans. {/*[cite: 18]*/}
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {pricingPlans.map((plan) => (
            <article 
              key={plan.id} 
              className="relative bg-white dark:bg-gray-950 border-2 border-blue-600 rounded-3xl p-6 pt-10 flex flex-col shadow-lg shadow-blue-600/5 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Recommended Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                RECOMMENDED {/*[cite: 18, 21]*/}
              </div>

              {/* Plan Header */}
              <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
                <HiSparkles className="text-blue-500" size={20} />
                <h3 className="font-bold text-lg">{plan.title}</h3> {/*[cite: 18, 21]*/}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                  USD ${plan.price} {/*[cite: 18, 21]*/}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                USD ${plan.price}/{plan.period} {/*[cite: 18, 21]*/}
              </p>

              {/* Subscribe Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl mb-8 transition-colors shadow-md shadow-blue-600/20 active:scale-[0.98]">
                Subscribe Now {/*[cite: 18, 21]*/}
              </button>

              {/* Scrollable Features List */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[400px]">
                
                {/* Basic Models */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Access to basic models {/*[cite: 18]*/}
                  </h4>
                  <ul className="space-y-3">
                    {basicModels.map((model, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <model.icon className={model.color} size={18} />
                        <span>{model.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advanced Models */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Access to advanced models {/*[cite: 19]*/}
                  </h4>
                  <ul className="space-y-3">
                    {advancedModels.map((model, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <model.icon className={model.color} size={18} />
                        <span>{model.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits / Divider Sections */}
                <div className="space-y-4 border-t border-gray-200 dark:border-gray-800/80 pt-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-b border-gray-200 dark:border-gray-800/80 pb-4">
                    {plan.description} {/*[cite: 20]*/}
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800/80 pb-4">
                    2000 Advance Credits/ month {/*[cite: 20]*/}
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800/80 pb-4">
                    EchoGpt Membership Benefits {/*[cite: 20]*/}
                  </p>

                  <div className="pt-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-4">
                      Multi- Code Membership Benefits {/*[cite: 20]*/}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                        <FaMicrosoft size={14} /> {/*[cite: 20]*/}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-green-500">
                        <FaGoogle size={14} /> {/*[cite: 20]*/}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white">
                        <FaXTwitter size={14} /> {/*[cite: 20]*/}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                        <FaLinkedinIn size={14} /> {/*[cite: 20]*/}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700" aria-labelledby="faq-heading">
        
        <header className="text-center mb-10">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-blue-600  mb-4 tracking-tight">
            Frequently Asked Questions {/*[cite: 22]*/}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Cannot find the answer you are looking for? Reach out to our <a href="#" className="text-blue-600 dark:text-blue-500 underline underline-offset-4 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">customer support</a> team {/*[cite: 22]*/}
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <article 
                key={index} 
                className={`bg-white dark:bg-gray-950 border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-500 dark:border-blue-500/50 shadow-sm' : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white pr-4">
                    {faq.question} {/*[cite: 22]*/}
                  </h3>
                  <FiChevronDown 
                    className={`text-gray-400 dark:text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-500' : ''}`} 
                    size={20} 
                  />
                </button>
                
                <div 
                  className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer} {/*[cite: 22]*/}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        
      </section>

    </main>
  );
}