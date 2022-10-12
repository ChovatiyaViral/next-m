import getConfig from "next/config";

const getNodeEnv = () => {
  const { publicRuntimeConfig } = getConfig();

  const API = publicRuntimeConfig.API_URL || false;
  const domain = publicRuntimeConfig.DOMAIN || false;
  const appId = publicRuntimeConfig.APPID || false;
  const storefrontAccessToken = publicRuntimeConfig.STORE_FRONT_ACCESS_TOKEN || false;

  return { API, domain, appId, storefrontAccessToken };
};

const env = getNodeEnv();
export default env;
