import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, target, children }) => {
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            target={target}
            p={3}
        >
            {children}
        </Link>
    )
}

const Header = () => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            css={{ backdropFilter: 'blur(10px)' }}
        >
            <Container
                display="flex"
                p={2}
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={10}>
                    <Link href="/">
                        Rieogen
                    </Link>
                </Flex>
                <Box
                >
                    <LinkItem href="/about">
                        About
                    </LinkItem>
                    <LinkItem href="/blog">
                        Blog
                    </LinkItem>
                    <LinkItem href="/uses">
                        Uses
                    </LinkItem>
                </Box>

                <Box
                    flex={1}
                    align="right"
                    ml={2}
                >
                    <Menu isLazy>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <MenuItem href="/">
                                Home
                            </MenuItem>
                            <MenuItem href="/about">
                                About
                            </MenuItem>
                            <MenuItem href="/blog">
                                Blog
                            </MenuItem>
                            <MenuItem href="/uses">
                                Uses
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    )
}

export default Header
