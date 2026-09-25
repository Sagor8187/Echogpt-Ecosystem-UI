import HomeView from '@/component/homepage/HomeView';
import { Metadata } from 'next';


// SEO Meta Tags for Server Component
export const metadata: Metadata = {
  title: 'EchoGPT - AI Powered Assistant & Idea Generator',
  description: 'Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming and creative flow.',
  keywords: ['EchoGPT', 'AI assistant', 'AI writing tool', 'resume builder', 'social content generator'],
  openGraph: {
    title: 'EchoGPT - Your AI Assistant',
    description: 'Unlock your creative flow, build a resume, and write engaging social content with EchoGPT.',
    url: 'https://yourwebsite.com',
    siteName: 'EchoGPT',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeView />;
}