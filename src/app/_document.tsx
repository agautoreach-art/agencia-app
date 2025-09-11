// src/app/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AUTO REACH</title>  {/* Título padrão */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument