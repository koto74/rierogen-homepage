import { Box, Card, Heading, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'

const BlogCard = ({ id, title, image_src, children }) => {
    return (
        <NextLink href={`/${id}`}>
            <Card>
                <Box p={2}>
                    <NextImage
                        src={`/images/works/${image_src}`}
                        width={1200}
                        height={700}
                        alt={title}
                    />
                    <Heading mt={2} size='md' align='center'>{title}</Heading>
                    <Text fontSize={14} align='center' p={1} marginBlockEnd={1}>{children}</Text>
                </Box>
            </Card>     
        </NextLink>
    )
}

export default BlogCard