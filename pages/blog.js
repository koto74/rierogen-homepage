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
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Blog
                </Heading>

            </Container>
        </Box>
    )
}

export default Blog