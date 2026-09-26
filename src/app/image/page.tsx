import ImageStudioClient from '@/component/ImageStudio/ImageStudioClient';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Image Studio | AI Image Generator',
  description: 'Create images that stop the scroll. Choose from top AI image generation models like Google Nano Banana and OpenAI GPT Image to bring your ideas to life.',
  keywords: ['AI Image Generator', 'Image Studio', 'Nano Banana', 'OpenAI Image', 'Create AI Art', 'EchoGPT'],
  openGraph: {
    title: 'Image Studio | AI Image Generator',
    description: 'Generate stunning AI images with a variety of aspect ratios and top-tier models.',
    type: 'website',
  },
};

export default function ImageStudioPage() {
  return (
 
    <ImageStudioClient />
  );
}