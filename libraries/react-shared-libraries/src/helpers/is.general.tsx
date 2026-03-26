// Fork customization: always return true so APP_NAME branding is used
// instead of "Gitroom" fallback. See is.general.server.side.ts for details.
export const isGeneral = () => {
  return true;
};
