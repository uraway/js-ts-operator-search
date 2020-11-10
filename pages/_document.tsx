import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import rainbowLegacyStyles from "react-rainbow-components/components/Application/rainbowLegacyStyles";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): React.ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <Head>
            <title>JS/TS 演算子検索</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <meta charSet="utf-8" />
          <style>{rainbowLegacyStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
