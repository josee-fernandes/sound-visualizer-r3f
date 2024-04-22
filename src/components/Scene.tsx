'use client'

import { Canvas } from '@react-three/fiber'

import { Camera } from './Camera'
import { EffectPasses } from './EffectPasses'
import { Lights } from './Lights'

const Scene: React.FC = () => {
  return (
    <Canvas shadows>
      <Lights />
      <Camera />

      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshBasicMaterial color="red" />
      </mesh>

      <EffectPasses />
    </Canvas>
  )
}

export default Scene
