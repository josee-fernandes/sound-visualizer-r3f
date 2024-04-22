'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect, useRef } from 'react'

import { PerspectiveCamera as PerspectiveCameraType } from '@/@types/three'
export const Camera: React.FC = () => {
  const { viewport, set } = useThree()

  const cameraRef = useRef<PerspectiveCameraType>(null)

  const { position } = useControls('Camera', {
    position: {
      value: 6,
      min: 0,
      max: 10,
      step: 0.1,
    },
  })

  useEffect(() => {
    if (!cameraRef.current) return

    set({ camera: cameraRef.current })
  }, [set])

  useFrame(() => {
    if (!cameraRef.current) return

    cameraRef.current.position.set(0, 0, position)
  })

  return (
    <group>
      <perspectiveCamera
        ref={cameraRef}
        args={[75, viewport.width / viewport.height, 0.1, 100]}
        position={[0, 0, 6]}
      />
    </group>
  )
}
