import JobAnalysisClient from '@/component/jobAnalyzer/JobAnalysisClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EchoGPT - AI Job Insight Assistant',
  description: 'Analyze job descriptions, tailor your resume, prepare for interviews, and find skill gaps with AI-powered insights.',
  keywords: ['AI Job Analysis', 'Resume Tailoring', 'Interview Prep', 'EchoGPT'],
  openGraph: {
    title: 'EchoGPT - AI Job Insight Assistant',
    description: 'Get AI-powered insights for any job posting instantly.',
    type: 'website',
  },
};

export default function AIJobAnalysisPage() {
  return (
    
    <JobAnalysisClient />
  );
}