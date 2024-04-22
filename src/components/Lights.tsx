'use client'

export const Lights: React.FC = () => {
  return (
    <group>
      <directionalLight args={['#ffffff', 1]} />
      <ambientLight args={['#ffffff', 0.5]} />
    </group>
  )
}
