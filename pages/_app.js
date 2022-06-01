import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import '../src/theme/styles.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp