import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { APP_NAME } from '@gitroom/react/branding';
export const metadata: Metadata = {
  title: `${APP_NAME} - Agent`,
  description: 'agents',
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Agent>{children}</Agent>;
}
