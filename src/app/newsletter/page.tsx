import NewsletterClient from '@/component/Newsletter/NewsletterClient';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Subscribe to EchoGPT Newsletter | Elevate Your AI Strategy',
  description: 'Join 50,000+ professionals receiving curated insights on AI productivity, industry trends, and exclusive EchoGPT features.',
  keywords: ['AI Newsletter', 'EchoGPT Updates', 'AI Strategy', 'LLM Trends', 'AI Productivity'],
  openGraph: {
    title: 'Subscribe to EchoGPT Newsletter',
    description: 'Get the latest insights on AI and EchoGPT straight to your inbox.',
    type: 'website',
  },
};

export default function NewsletterPage() {
  return (

    <NewsletterClient />
  );
}