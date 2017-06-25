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
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          {styleTags}
          <style>
            {`
              @import url('https://fonts.googleapis.com/css?family=Roboto');

              *:focus {
                outline: none;
              }
              ::-webkit-input-placeholder { /* Chrome */
                opacity: 0.5;
              }
              :-ms-input-placeholder { /* IE 10+ */
                opacity: 0.5;
              }
              ::-moz-placeholder { /* Firefox 19+ */
                opacity: 0.5;
              }
              :-moz-placeholder { /* Firefox 4 - 18 */
                opacity: 0.5;
              }

              .search-button:hover {
                background-color: #EFCF7F;
              }

              html, body {
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: Roboto, sans-serif;
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
