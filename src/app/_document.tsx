// src/app/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AUTO REACH</title> {/* Título padrão */}

          {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-17549190858"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17549190858'); // Substitua pelo seu ID do Google Ads
            `}
          </script>
          {/* Fim do Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-17549190858" // Substitua com o seu ID do GTM
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
