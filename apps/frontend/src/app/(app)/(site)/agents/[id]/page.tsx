import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { AgentChat } from '@gitroom/frontend/components/agents/agent.chat';
import { APP_NAME } from '@gitroom/react/branding';
export const metadata: Metadata = {
  title: `${APP_NAME} - Agent`,
  description: '',
};
export default async function Page() {
  return (
    <AgentChat />
  );
}
