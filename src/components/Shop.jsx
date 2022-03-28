import React, { useRef } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Shop = () => {
  const shop = useLoader(GLTFLoader, "/restaurant.glb")
  //   shop.materials.WindowLightBlu.color.set(0, 0, 0)
  //   shop.materials.WindowLightPik.color.set(0, 0, 0)
  //   shop.materials.WindowLightPik.color = { r: 0, g: 0, b: 0 }
  shop.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      // child.receiveShadow = true
    }
  })
  const scale = 0.4
  shop.scene.rotation.set(0, -1.5, 0)
  shop.scene.scale.set(scale, scale, scale)

  // shop.scene.castShadow = true
  // shop.scene.receiveShadow = true
  console.log(shop)

  const pointLightRef = useRef()
  const pointLightRef2 = useRef()
  const pointLightRef3 = useRef()

  //   useHelper(pointLightRef, PointLightHelper, 0.5, "blue")
  //   useHelper(pointLightRef2, PointLightHelper, 0.5, "blue")
  // useHelper(pointLightRef3, PointLightHelper, 0.5, "blue")

  return (
    <>
      <pointLight
        intensity={2}
        decay={2}
        distance={5}
        ref={pointLightRef}
        position={[-3, 2.5, 3.5]}
        color={"hotpink"}
      />
      <pointLight
        intensity={2}
        decay={2}
        distance={5}
        ref={pointLightRef2}
        position={[3.3, 2.6, 2.9]}
        color={"hotpink"}
      />
      <pointLight
        intensity={2}
        decay={2}
        distance={5}
        ref={pointLightRef3}
        position={[-2, 4, 6.5]}
        color={"hotpink"}
      />
      <primitive object={shop.scene} />
    </>
  )
}

export default Shop
