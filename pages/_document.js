import Document, { Html, Head, Main, NextScript } from "next/document";
export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="Merqueo" content="Merqueo es la mejor empresa" />
          <link rel="icon" href="/favicon.ico" />

          <meta name="msapplication-TileColor" content="#d00170" />
          <meta name="apple-mobile-web-app-status-bar" content="#d00170" />
          <meta name="theme-color" content="#d00170" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
