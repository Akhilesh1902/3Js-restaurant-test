import { Box, ContactShadows, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { Suspense, useRef } from "react"

const Lightings = () => {
  const movingLight1 = useRef()
  const movingBall1 = useRef()
  const movingLight2 = useRef()
  const movingBall2 = useRef()
  const movingLight3 = useRef()
  const movingBall3 = useRef()
  //   useHelper(movingLight1, PointLightHelper, 0.5, "green")

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    const angle1 = -elapsedTime * 0.2
    const angle2 = elapsedTime
    const angle3 = elapsedTime * 0.6

    movingLight1.current.position.x = Math.sin(angle1) * 10
    movingLight1.current.position.z = Math.cos(angle1) * 10
    movingLight1.current.position.y = Math.abs(Math.cos(elapsedTime * 5))
    movingBall1.current.position.x = Math.sin(angle1) * 10
    movingBall1.current.position.z = Math.cos(angle1) * 10
    movingBall1.current.position.y = Math.abs(Math.cos(elapsedTime * 5))

    movingLight2.current.position.x = Math.sin(angle2) * 10
    movingLight2.current.position.z = Math.cos(angle2) * 10
    movingLight2.current.position.y = Math.abs(Math.cos(elapsedTime * 3)) * 2
    movingBall2.current.position.x = Math.sin(angle2) * 10
    movingBall2.current.position.z = Math.cos(angle2) * 10
    movingBall2.current.position.y = Math.abs(Math.cos(elapsedTime * 3)) * 2

    movingLight3.current.position.x =
      Math.sin(angle3) * (10 + Math.sin(elapsedTime * 0.32) * 2)
    movingLight3.current.position.z =
      Math.cos(angle3) * (10 + Math.cos(angle3 * 3) * 2)
    // movingLight3.current.position.y = Math.abs(Math.cos(elapsedTime * 3)) * 2
    movingBall3.current.position.x =
      Math.sin(angle3) * (10 + Math.sin(elapsedTime * 0.32) * 2)
    movingBall3.current.position.z =
      Math.cos(angle3) * (10 + Math.cos(angle3 * 3) * 2)
    // movingBall3.current.position.y = Math.abs(Math.cos(elapsedTime * 3)) * 2
  })
  return (
    <>
      <Suspense>
        <LapmPost
          bulbPos={[5.9, 2.5, 5.1]}
          postPos={[5.9, 1, 5.1]}
          postDimension={[0.2, 3, 0.2]}
          color={"#65ffa5"}
        />
      </Suspense>

      <pointLight
        ref={movingLight1}
        intensity={2}
        distance={2}
        position={[0, 4, 10]}
        color={"#e83427"}
      />
      <Sphere ref={movingBall1} args={[0.2]}>
        <meshBasicMaterial color={"#e83427"} />
      </Sphere>
      <pointLight
        ref={movingLight2}
        intensity={2}
        distance={2.5}
        position={[0, 4, 10]}
        color={"#4bfaa5"}
      />
      <Sphere ref={movingBall2} args={[0.2]}>
        <meshBasicMaterial color={"#4bfaa5"} />
      </Sphere>
      <pointLight
        ref={movingLight3}
        intensity={2}
        distance={3}
        position={[0, 0, 10]}
        color={"#5f4bf2"}
      />
      <Sphere ref={movingBall3} args={[0.2]}>
        <meshBasicMaterial color={"#5f4bf2"} />
      </Sphere>
    </>
  )
}

export default Lightings

function LapmPost({ bulbPos, postPos, postDimension, color }) {
  const pointLight = useRef()
  const bulb = useRef()
  //   useHelper(pointLight, PointLightHelper, 0.5, "yellow")

  const post = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = 0.05
    if (elapsedTime % 2 <= 0.2) {
      pointLight.current.intensity = 0
      bulb.current.color.set("#222b27")
    } else {
      if (1 <= elapsedTime % 2 && elapsedTime % 2 <= 1.2) {
        pointLight.current.intensity = 0
        bulb.current.color.set("#222b27")
      } else {
        bulb.current.color.set("#4bfaa5")
        pointLight.current.intensity = 1
      }
    }
  })

  return (
    <>
      <pointLight
        ref={pointLight}
        intensity={3}
        decay={2}
        distance={6}
        position={bulbPos}
        color={color}
      />

      <Sphere position={bulbPos} args={[0.33]}>
        <meshBasicMaterial
          ref={bulb}
          color={color}
          roughness={0.2}
          metalness={0.4}
        />
      </Sphere>
      <Box args={postDimension} position={postPos} ref={post}>
        <meshStandardMaterial color={"#1a0c01"} />
      </Box>
    </>
  )
}
