import Head from 'next/head'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Quiero trabajar en Merqueo</title>
      <meta name="Merqueo" content="Merqueo es la mejor empresa" />
      <link rel="icon" href="/favicon.ico" />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      </style>
    </Head>
    <Component {...pageProps} />

  </>
}

export default MyApp
