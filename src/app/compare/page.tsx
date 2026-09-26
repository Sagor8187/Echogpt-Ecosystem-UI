import CompareClient from '@/component/compare/CompareClient';
import type { Metadata } from 'next';
 

export const metadata: Metadata = {
  title: 'Compare AI Models | EchoGPT',
  description: 'Ask one question and see how multiple top AI models answer it side-by-side. Compare EchoGPT, DeepSeek, Nemotron, and more.',
  keywords: ['AI Model Compare', 'EchoGPT', 'DeepSeek', 'Nemotron', 'LLM Comparison'],
  openGraph: {
    title: 'Compare AI Models - EchoGPT',
    description: 'Compare responses from multiple top AI models simultaneously.',
    type: 'website',
  },
};

export default function ComparePage() {
  return (
   
    <CompareClient />
  );
}