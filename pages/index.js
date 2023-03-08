import NextLink from 'next/link'
import { Heading, Box, Button, Text } from '@chakra-ui/react'
import Header from '../components/header'

const Home = () => {
    return (
        <Box>
            <Header />
            <Heading>hello</Heading>
            <Button>button</Button>
        </Box>
    )
}

export default Home
