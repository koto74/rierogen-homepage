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
            <Canvas camera={{ position: [-10, 10, 40], fov: 50 }}>
                <ambientLight intensity={0.75} color="whlte" groundColor="blue" />
                <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
                <Model position={[0, 0.25, 0]} url={model} />
                <ContactShadows scale={20} blur={10} far={20} />
                <OrbitControls />
            </Canvas>
        </Box>
    )
}

export default Home
