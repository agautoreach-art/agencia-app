// src/app/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AUTO REACH</title>  {/* Título padrão */}

          {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17549190858"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17549190858');
            `}
          </script>
          {/* Fim Google Tag Manager */}
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
