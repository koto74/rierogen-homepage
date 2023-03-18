import NextLink from 'next/link'
import { Heading, Box, Button, SimpleGrid, Container } from '@chakra-ui/react'
import BlogCard from '../components/blogcard'
import getPostsData from '../lib/post'

export async function getStaticProps() {
    const allPostsData = getPostsData() // id, title, date, thumbnail
    console.log(allPostsData)

    return {
        props: {
            allPostsData,
        },
    }
}

const Blog = (allPostsData) => {
    return (
        <Box>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Blog
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} spacing={10}>
                    {allPostsData.map(({id, title, date, thumbnail}) => (
                        <BlogCard
                            id='/'
                            title='hoge01'
                            image_src='menkiki_eyecatch.png'
                        >
                            hogehoge
                        </BlogCard>
 
                    ))}
  
                    
 
                </SimpleGrid>
            </Container>
       </Box>
    )
}

export default Blog