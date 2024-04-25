import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100..900&family=Rubik:wght@700&display=swap"
          rel="stylesheet"/> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}