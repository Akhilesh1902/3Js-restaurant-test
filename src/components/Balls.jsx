import { Sphere } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"

const Balls = ({ color, pos, scale }) => {
  const { viewport } = useThree()

  const sphere = useRef()

  useFrame(({ clock, mouse }) => {
    const y = Math.sin(clock.getElapsedTime() * 2) * 2
    const x = Math.cos(clock.getElapsedTime() * 2) * 2
    sphere.current.position.set(x, y, y)
  })

  useFrame(({}) => {})

  return (
    <>
      <Sphere ref={sphere} args={[1]} position={pos} scale={scale}>
        <meshStandardMaterial attach="material" color={color} scale={scale} />
      </Sphere>
    </>
  )
}

export default Balls
