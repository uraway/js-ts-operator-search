import React from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import normalizeTheme from "react-rainbow-components/styles/helpers/normalizeTheme";
import theme from "react-rainbow-components/styles/defaultTheme";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>JavaScript/TypeScript 演算子検索</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <ThemeProvider theme={normalizeTheme(theme)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
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
