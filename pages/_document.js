import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Golden Hour</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {styleTags}
          <style>
            {`
              html, body {
                height: 100%;
                margin: 0;
                padding: 0;
              }
            `}
          </style>
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
