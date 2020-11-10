import React from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import RainbowApplication from "react-rainbow-components/components/Application";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <RainbowApplication>
      <Component {...pageProps} />
    </RainbowApplication>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
