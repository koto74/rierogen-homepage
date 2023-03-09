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

const Uses = () => {
    return (
        <Box>
            <Header />
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Uses
                </Heading>

            </Container>
        </Box>
    )
}

export default Uses