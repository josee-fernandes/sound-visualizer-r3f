'use client'

import { Canvas } from '@react-three/fiber'

const Scene: React.FC = () => {
  return (
    <Canvas>
      <perspectiveCamera fov={75} near={0.1} far={100} />

      <directionalLight args={['#ffffff', 1]} />
      <ambientLight args={['#ffffff', 0.5]} />

      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Canvas>
  )
}

export default Scene
