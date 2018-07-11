// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
const prefix = process.env.NODE_ENV === 'production' ? 'https://lindsayjopson.github.io/catchup' : '';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu|Oswald|Pragati+Narrow" rel="stylesheet" />
        <link href={`${prefix}/_next/static/style.css`} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
