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
    chakra,
    Card
} from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import PostCard from '../components/postcard'

export const getStaticProps = () => {
    const files = fs.readdirSync('posts')
    const posts = files.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
        const { data, content } = matter(fileContent)
        return {
            frontMatter: data,
            slug
        }
    });
    return {
        props: {
            posts,
        }
    }
}

const Blog = ({ posts }) => {
    console.log(posts)
    return (
        <Box>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Blog
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} spacing={10}>
                    <Box w="100%">
                        {posts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </Box>
                </SimpleGrid>
           </Container>
        </Box>
    )
}

export default Blog