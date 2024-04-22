'use client'

import { Effects } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { LinearFilter, Texture, WebGLRenderTarget } from 'three'
import {
  BlendShader,
  CopyShader,
  EffectComposer,
  SavePass,
  ShaderPass,
} from 'three-stdlib'

const MOTION_BLUR_AMOUNT = 0.2

const renderTargetParameters = {
  minFilter: LinearFilter,
  magFilter: LinearFilter,
  stencilBuffer: false,
}

type EffectsType = EffectComposer<WebGLRenderTarget<Texture>>

export const EffectPasses: React.FC = () => {
  const { viewport } = useThree()

  const effects = useRef<EffectsType>(null)

  const savePass = useMemo(
    () =>
      new SavePass(
        new WebGLRenderTarget(
          viewport.width,
          viewport.height,
          renderTargetParameters,
        ),
      ),
    [viewport],
  )

  const blendPass = useMemo(() => new ShaderPass(BlendShader, 'tDiffuse1'), [])
  blendPass.uniforms.tDiffuse2.value = savePass.renderTarget.texture
  blendPass.uniforms.mixRatio.value = MOTION_BLUR_AMOUNT

  const outputPass = useMemo(() => new ShaderPass(CopyShader), [])
  outputPass.renderToScreen = true

  useEffect(() => {
    if (!effects.current) return

    effects.current.addPass(savePass)
    effects.current.addPass(blendPass)
    effects.current.addPass(outputPass)
  }, [savePass, blendPass, outputPass])

  useFrame(() => {})

  return <Effects ref={effects}></Effects>
}
