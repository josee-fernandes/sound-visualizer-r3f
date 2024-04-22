'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Camera } from './Camera'
import { EffectPasses } from './EffectPasses'
import { Lights } from './Lights'
import { Sphere } from './Sphere'

const Scene: React.FC = () => {
  return (
    <Canvas shadows={true} dpr={[2, window.devicePixelRatio * 1.5]}>
      <Lights />
      <Camera />

      <Sphere />

      <EffectPasses />

      <OrbitControls />
    </Canvas>
  )
}

export default Scene
