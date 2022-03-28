import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { Suspense, useEffect, useRef } from "react"
import * as THREE from "three"
import Shop from "./Shop"
import Lightings from "./Lightings"

const CanvasWrapper = () => {
  // const [ballProps, setBallProps] = useState([[[0, 0, 0], [0, 0, 0], 0]])

  const ballCount = 1
  useEffect(() => {
    const propArr = []
    for (let i = 0; i < ballCount; i++) {
      const itemProp = []
      const clrArr = []
      const posArr = []
      let scale
      // setting color
      for (let j = 0; j < 3; j++) {
        // color
        const clr = Math.floor(Math.random() * 265)
        clrArr.push(clr)
        // position
        const pos = Math.floor((Math.random() - 0.5) * 60)
        posArr.push(pos)
        // scale
        scale = Math.floor((Math.random() * 10) / 4 + 1)
      }
      // setting position
      itemProp.push(clrArr, posArr, scale)
      propArr.push(itemProp)
    }
    // setBallProps(propArr)
    // animate()
  }, [ballCount])

  const directionLight = useRef()
  // useHelper(directionLight, DirectionalLightHelper, 1, "green")

  const floor = useRef()
  console.log(floor)

  const mainCam = useRef()

  // animation

  useFrame(({ camera }) => {
    let cam = camera || null
    if (cam) {
      if (cam.position.x >= 2) {
        cam.position.x -= 0.02
      }
      if (cam.position.x <= 2 && cam.position.z > 18) {
        cam.position.z -= 0.1
      }
    }
  })

  console.log(mainCam.current)
  return (
    <>
      <PerspectiveCamera ref={mainCam} makeDefault position={[10, 2, 30]} />
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight
        ref={directionLight}
        intensity={1}
        position={[5, 5, 4]}
        color={"#7e3301"}
        castShadow={true}
      />
      <Plane
        ref={floor}
        args={[50, 50]}
        rotation={[1.57, 0, 0]}
        position={[0, -0.4, 0]}
        receiveShadow={true}>
        <meshStandardMaterial
          attach="material"
          color={"#4f4f4f"}
          side={THREE.DoubleSide}
        />
      </Plane>

      <Suspense fallback={null}>
        <Shop />
        <Lightings />
      </Suspense>
    </>
  )
}

export default CanvasWrapper
