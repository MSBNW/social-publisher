export const dynamic = 'force-dynamic';
import { ForgotReturn } from '@gitroom/frontend/components/auth/forgot-return';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { APP_NAME } from '@gitroom/react/branding';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? APP_NAME : 'Gitroom'} Forgot Password`,
  description: '',
};
export default async function Auth(params: {
  params: {
    token: string;
  };
}) {
  return <ForgotReturn token={params.params.token} />;
}
