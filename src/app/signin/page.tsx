import SignInView from '@/component/SignIn/SignInView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - EchoGPT',
  description: 'Sign in to your EchoGPT account to access advanced AI models, chats, and image/video studios.',
  keywords: ['EchoGPT sign in', 'AI assistant login', 'EchoGPT account'],
};

export default function SignInPage() {
  return <SignInView />;
}