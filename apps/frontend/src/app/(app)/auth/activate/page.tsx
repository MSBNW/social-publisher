export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { Activate } from '@gitroom/frontend/components/auth/activate';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { APP_NAME } from '@gitroom/react/branding';
export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? APP_NAME : 'Gitroom'
  } - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <Activate />;
}
