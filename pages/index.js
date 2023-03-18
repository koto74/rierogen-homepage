import NextLink from 'next/link'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'
import { Heading, Box, Button } from '@chakra-ui/react'

const MODELS = {
    Beech: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf',
}

const treeModel = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf'

const Model = ({ url, ...props}) => {
    const { scene } = useGLTF(url)
    return <primitive object={scene} {...props} />
}

const Home = () => {
    const model = treeModel
    return (
        <Box h="100%">
            <Heading>
                hoge
            </Heading>
        </Box>
    )
}

export default Home
