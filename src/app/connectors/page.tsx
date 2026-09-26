import ConnectorsClient from '@/component/connector/ConnectorsClient';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Connectors | Add MCP Server',
  description: 'Connect a custom MCP server to enable powerful tools and make them available while you chat with the AI model.',
  keywords: ['MCP Server', 'AI Connectors', 'API integration', 'EchoGPT Connectors'],
  openGraph: {
    title: 'Connectors | Add MCP Server',
    description: 'Enhance your AI chat experience by connecting a custom MCP server.',
    type: 'website',
  },
};

export default function ConnectorsPage() {
  return (
   
    <ConnectorsClient />
  );
}