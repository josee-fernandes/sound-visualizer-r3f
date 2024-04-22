import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import { MeshElementRef, UniformType } from '@/@types/three'
import { fragment, vertex } from '@/shaders'

const ROTATION_SPEED = 0.002

export const Sphere: React.FC = () => {
  const sphere = useRef<MeshElementRef>(null)
  const uniforms: UniformType = useRef({
    uTime: { value: 0 },
  })

  useFrame(() => {
    if (!sphere.current) return

    sphere.current.rotation.x += ROTATION_SPEED
    sphere.current.rotation.y += ROTATION_SPEED
  })

  return (
    <mesh ref={sphere}>
      <sphereGeometry args={[1, 100, 100]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  )
}
