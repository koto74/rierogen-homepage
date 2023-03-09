import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import Header from '../components/header'

const Blog = () => {
    return (
        <Box>
            <Header />
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Blog test
                </Heading>

            </Container>
        </Box>
    )
}

export default Blog