import NextLink from 'next/link'
import { forwardRef } from 'react'
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

import ChangeThemeButton  from './change-theme-button'

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

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

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
                    display={ {base: 'none', md: 'flex' }}
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
                >
                    <ChangeThemeButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    Home
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/about">
                                    About
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/blog">
                                    Blog
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/uses">
                                    Uses
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Header
