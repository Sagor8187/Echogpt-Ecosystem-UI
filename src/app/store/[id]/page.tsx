import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiBox, FiCircle, FiCpu, FiDatabase, FiHexagon, FiLayers, FiTerminal } from 'react-icons/fi';

interface AppDatas {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
}

// Data directly in the file to ensure it's always available
const storeApps: AppDatas[] = [
  {
    id: 'echogpt',
    name: 'EchoGPT',
    description: 'Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.',
    icon: FiHexagon,
    colorClass: 'bg-purple-600'
  },
  {
    id: 'deepseek-v4-pro',
    name: 'DeepSeek V4 Pro',
    description: 'DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.',
    icon: FiBox,
    colorClass: 'bg-blue-600'
  },
  {
    id: 'nemotron-3-ultra',
    name: 'Nemotron 3 Ultra',
    description: 'Llama 3.1 Nemotron 70B Instruct',
    icon: FiDatabase,
    colorClass: 'bg-green-500'
  },
  {
    id: 'glm-5-2',
    name: 'GLM-5.2',
    description: 'GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.',
    icon: FiCircle,
    colorClass: 'bg-gray-800'
  },
  {
    id: 'deepseek-v4-flash',
    name: 'DeepSeek V4 Flash',
    description: 'DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.',
    icon: FiBox,
    colorClass: 'bg-blue-500'
  },
  {
    id: 'tencent-hy3',
    name: 'Tencent Hy3',
    description: 'Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.',
    icon: FiLayers,
    colorClass: 'bg-indigo-500'
  },
  {
    id: 'mimo-v2-5-pro',
    name: 'MiMo V2.5 Pro',
    description: 'MiMo V2.5 Pro adds stronger reasoning to the MiMo line while staying inexpensive over a 1M token context.',
    icon: FiCpu,
    colorClass: 'bg-gray-900'
  },
  {
    id: 'qwen-3-7-plus',
    name: 'Qwen 3.7 Plus',
    description: 'Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.',
    icon: FiCircle,
    colorClass: 'bg-blue-400'
  },
  {
    id: 'gpt-5-6-sol',
    name: 'GPT-5.6 Sol',
    description: "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
    icon: FiTerminal,
    colorClass: 'bg-emerald-600'
  }
];

// Note the 'async' here and the Promise type for params
export default async function AppDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Wait for the params to resolve before using them
  const resolvedParams = await params;
  
  const appData = storeApps.find((app) => app.id === resolvedParams.id);

  // Jodi URL a bhul ID deya thake, tahole 404 page e pathiye dibe
  if (!appData) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 font-sans flex flex-col items-center pt-12 md:pt-20 px-4 transition-colors duration-300">
      
      <div className="w-full max-w-3xl animate-in slide-in-from-bottom-4 fade-in duration-300">
        {/* Back Button */}
        <Link 
          href="/store"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white font-medium mb-8 transition-colors"
        >
          <FiArrowLeft size={20} />
          Back to Store
        </Link>

        {/* Details Card */}
        <div className="bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800/80 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Large Icon */}
          <div className={`w-32 h-32 flex-shrink-0 rounded-[2rem] flex items-center justify-center text-white ${appData.colorClass} shadow-lg`}>
            <appData.icon size={56} />
          </div>

          {/* Info Section */}
          <div className="flex flex-col flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {appData.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {appData.description}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md shadow-blue-600/20">
                Start Chatting
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}