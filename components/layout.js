import Header from './header'
import Footer from './footer'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

const Layout = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
            </Head>
            <Header path={router.asPath} />

            <Container maxW={"container.md"} pt={14}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Layout