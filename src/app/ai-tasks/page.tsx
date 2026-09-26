import AITasksClient from '@/component/AiTask/AITasksClient';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'EchoGPT AI Tasks | Discover & Create Custom ChatGPTs',
  description: 'Explore, discover, and create custom versions of ChatGPT for Ideas, Work, Fun, and Online Content. Boost productivity and creativity instantly.',
  keywords: ['AI Tasks', 'EchoGPT', 'ChatGPT templates', 'Productivity AI', 'AI tools', 'Content Creation AI'],
  openGraph: {
    title: 'EchoGPT AI Tasks',
    description: 'Discover custom versions of ChatGPT tailored for your needs.',
    type: 'website',
  },
};

export default function AITasksPage() {
  return (
 
    <AITasksClient />
  );
}