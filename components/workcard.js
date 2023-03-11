import { Box, Card, Heading, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'

const WorkCard = ({ id, title, image_src }) => {
    return (
        <NextLink href={`/works/${id}`}>
            <Card>
                <Box p={2}>
                    <NextImage
                        src={`/images/works/${image_src}`}
                        width={1200}
                        height={700}
                        alt={title}
                    />
                    <Heading mt={3} size='md' align='center'>{title}</Heading>
                </Box>
           </Card>
        </NextLink>
    )
}

export default WorkCard