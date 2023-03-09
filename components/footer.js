import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align='center' opacity={0.4} fontSize="sm" p={5}>
            &copy; {new Date().getFullYear()} Rieogen. All Rights Reserved.
        </Box>
    )
}

export default Footer