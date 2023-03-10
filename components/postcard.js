import { Box, Card, Heading, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'

const PostCard = ({ post }) => {
    return (
        <NextLink href={'/posts/${post.slug}'}>
            <Card>
                <Box>
                    <NextImage
                        src={`/${post.frontMatter.image}`}
                        width={1200}
                        height={700}
                        alt={post.frontMatter.title}
                    />
                </Box>
                <Text>
                    {post.frontMatter.date}
                </Text>
                <Heading size='md'>
                    {post.frontMatter.title}
                </Heading>
                <Text>
                    {post.frontMatter.description}
                </Text>
           </Card>
        </NextLink>
    )
}

export default PostCard