import Document, {Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en-us">
        <Head>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="kint-ui" />
          <meta name="apple-mobile-web-app-title" content="kint-ui" />
          <meta name="theme-color" content="#5b63f5" />
          <meta name="msapplication-navbutton-color" content="#5b63f5" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/main-icon512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/main-icon512.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/main-icon192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/main-icon192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </html>
    );
  }
}

export default MyDocument;