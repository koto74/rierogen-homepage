// pages/_app.js
import { Box, ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import Fonts from '../components/fonts'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout router={router}>
        <Box pt={14}></Box>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
