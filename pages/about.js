import NextLink from 'next/link'
import Image from 'next/image'
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
    ListIcon
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoGithub, IoLinkOutline } from 'react-icons/io5'
import Header from '../components/header'
import Footer from '../components/footer'
import { MinusIcon } from '@chakra-ui/icons'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const About = () => {
    return (
        <Box>
            <Header />
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    About
                </Heading>

               <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml= {{ md: 6 }}
                    textAlign="center" 
               >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                        marginBlockStart={2}
                    >
                        <ProfileImage
                            src="/images/rie.png"
                            alt="Profile image"
                            borderRadius="full"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>

                <Box display={{ md: 'flex '}} marginBlockStart={2}>
                    <Box flexGrow={1}>
                        <Heading>
                            Rieogen
                        </Heading>
                    </Box>
                </Box>

                <Box
                    textAlign={'justify'}
                    textIndent={'1em'}
                    p={2}
                >
                    My name is Rie. I'm a programer based in Kanagawa, Japan. 
                    I produced this website as a hobby. I'm passionete 
                    about creating. On my days off, I spend most of my time 
                    at home on my computer, but when I go outside, I like to take 
                    my camera with me and take pictures. Currently, 
                    I currently live on my own. I have a hernia. I had surgery 
                    and it was very painful.
                </Box>

                <Box marginBlockStart={2}>
                    <Heading fontSize={20} p={2}>
                        My skill
                    </Heading>
                    <List>
                        <ListItem>
                            ・C++
                        </ListItem>
                        <ListItem>
                            ・JavaScript
                        </ListItem>
                        <ListItem>
                            ・Python
                        </ListItem>
                        <ListItem>
                            ・React
                        </ListItem>
                        <ListItem>
                            ・Next.js
                        </ListItem>
                    </List>
                </Box>

                <Box marginBlockStart={2}>
                    <Heading fontSize={20} p={2}>
                        I like
                    </Heading>
                    <Box
                        textAlign={'justify'}
                        textIndent={'1em'}
                    >
                        Programing, Drawing, Music, Art, Anime
                    </Box>
                </Box>

                <Box marginBlockStart={2}>
                    <Heading fontSize={20} p={2}>
                        SNS
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/koto74' target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme='teal'
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @koto74
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://twitter.com/RieE_ma_' target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme='teal'
                                    leftIcon={<IoLogoTwitter />}
                                >
                                    @RieE_ma_
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Box>

            </Container>
            <Footer />
        </Box>
    )
}

export default About