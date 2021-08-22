import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useRouter } from 'next/router'
import { Stars } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const LCanvas = () => {
  const router = useRouter()
  const location = router.pathname
  const props = useSpring({
    intensity: location === '/' ? 1 : 0.3,
    config: { duration: 1000 },
  })
  return (
    <>
      <div
        style={{
          position: 'absolute',
          flex: 1,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <img src='/lady.jpg' style={{ zIndex: 1 }} />
        {/* <Canvas shadows camera={{ position: [0, 25, 60], fov: 50 }}>
          <fog attach='fog' args={['black', 0, 20]} />
          <a.pointLight position={[5, 13, 15]} intensity={props.intensity} />
          <Stars
            radius={100}
            depth={50}
            count={1500}
            factor={3}
            saturation={0}
          />
        </Canvas> */}
      </div>
    </>
  )
}

export default LCanvas
