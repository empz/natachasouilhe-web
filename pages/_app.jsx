import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { CloudimageProvider } from "react-cloudimage-responsive";

const cloudimageConfig = {
  token: process.env.NEXT_PUBLIC_CLOUDIMAGE_TOKEN,
  baseURL: process.env.NEXT_PUBLIC_CLOUDIMAGE_BASE_URL,
};

const MyApp = ({ Component, pageProps }) => (
  <CloudimageProvider config={cloudimageConfig}>
    <Component {...pageProps} />
  </CloudimageProvider>
);

export default appWithTranslation(MyApp);
