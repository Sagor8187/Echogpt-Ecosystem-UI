import SOPBuilderClient from '@/component/sopBuilder/SOPBuilderClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered SOP Builder',
  description: 'Create compelling Statements of Purpose with AI assistance, tailored for your dream university and destination country.',
  keywords: ['SOP Builder', 'Statement of Purpose', 'AI SOP Writer', 'University Application', 'Study Abroad'],
  openGraph: {
    title: 'AI-Powered SOP Builder',
    description: 'Tailor your SOP for 6+ countries and various academic tracks with AI.',
    type: 'website',
  },
};

export default function SOPBuilderPage() {
  return (
 
    <SOPBuilderClient />
  );
}