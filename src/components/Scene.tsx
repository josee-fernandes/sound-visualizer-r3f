'use client'

import { Canvas } from '@react-three/fiber'

import { Camera } from './Camera'
import { Lights } from './Lights'

const Scene: React.FC = () => {
  return (
    <Canvas shadows>
      <Camera />

      <Lights />

      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Canvas>
  )
}

export default Scene
