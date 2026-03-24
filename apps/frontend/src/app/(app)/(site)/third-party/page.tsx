import { ThirdPartyComponent } from '@gitroom/frontend/components/third-parties/third-party.component';

export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { APP_NAME } from '@gitroom/react/branding';
export const metadata: Metadata = {
  title: `${
    isGeneralServerSide() ? `${APP_NAME} Integrations` : 'Gitroom Integrations'
  }`,
  description: '',
};
export default async function Index() {
  return <ThirdPartyComponent />;
}
