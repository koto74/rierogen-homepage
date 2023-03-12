import NextLink from 'next/link'
import NextImage from 'next/image'
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
    Card,
    CardBody,
    Text
} from '@chakra-ui/react'
import WorkCard from '../components/workcard'

const Works = ({ posts }) => {
    console.log(posts)
    return (
        <Box>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} spacing={10}>
                    <WorkCard
                        id='rieogen-homepage'
                        title='Inkdrop'
                        image_src='inkdrop_eyecatch.png'
                    >
                        this is not mine.
                    </WorkCard>
                    <WorkCard
                        id='rieogen-homepage'
                        title='menkiki'
                        image_src='menkiki_eyecatch.png'
                    >
                        this is not mine.
                    </WorkCard>
                     <WorkCard
                        id='rieogen-homepage'
                        title='menkiki'
                        image_src='menkiki_eyecatch.png'
                    >
                        this is not mine.
                    </WorkCard>
                    <WorkCard
                        id='rieogen-homepage'
                        title='modetokyo'
                        image_src='modetokyo_eyecatch.png'
                    >
                        this is not mine.
                    </WorkCard>
                    <WorkCard
                        id='rieogen-homepage'
                        title='pichu2'
                        image_src='pichu2_eyecatch.png'
                    >
                        this is not mine.
                    </WorkCard>
                </SimpleGrid>
           </Container>
        </Box>
    )
}

export default Works