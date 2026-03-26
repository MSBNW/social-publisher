// Fork customization: always return true so APP_NAME is used in page titles
// instead of hardcoded "Gitroom". Upstream uses IS_GENERAL env var to switch
// between SaaS ("Postiz") and self-hosted ("Gitroom") branding.
// Our fork is always branded as SocialPublisher via NEXT_PUBLIC_APP_NAME build arg.
// On upstream merge: keep this version — single-line conflict, easy to resolve.
export const isGeneralServerSide = () => {
  return true;
};
