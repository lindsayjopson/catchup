// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu|Oswald|Pragati+Narrow" rel="stylesheet" />
        <link rel="stylesheet" href="/_next/static/style.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
