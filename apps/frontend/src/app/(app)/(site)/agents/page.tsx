import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { APP_NAME } from '@gitroom/react-shared-libraries/branding';

export const metadata: Metadata = {
  title: `${APP_NAME} - Agent`,
  description: '',
};

export default async function Page() {
  return redirect('/agents/new');
}
