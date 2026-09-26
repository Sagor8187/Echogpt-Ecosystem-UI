import ChatHistoryClient from '@/component/history/ChatHistoryClient';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'My Chat History | EchoGPT',
  description: 'Access your complete chat history across diverse topics and interactions with different AI models.',
  keywords: ['Chat History', 'EchoGPT History', 'AI Chat Logs', 'Conversations'],
  openGraph: {
    title: 'My Chat History | EchoGPT',
    description: 'Search and filter your past AI conversations easily.',
    type: 'website',
  },
};

export default function ChatHistoryPage() {
  return (
   
    <ChatHistoryClient />
  );
}