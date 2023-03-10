import Header from './header'
import Footer from './footer'
import { Box, Container } from '@chakra-ui/react'

const Layout = ({ children, router }) => {
    return (
        <Box>
            <Header path={router.asPath} />

            <Container maxW={"container.md"} pt={14}>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Layout