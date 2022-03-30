import React, { useRef } from "react"
import { useLoader } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
// import { PointLightHelper } from "three"

const Shop = () => {
  const shop = useLoader(GLTFLoader, "/draco-Restaurant.glb", (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/gltf/")
    loader.setDRACOLoader(dracoLoader)
  })
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

  const pointLightRef = useRef()
  const pointLightRef2 = useRef()
  const pointLightRef3 = useRef()

  // useHelper(pointLightRef, PointLightHelper, 0.5, "blue")
  // useHelper(pointLightRef2, PointLightHelper, 0.5, "blue")
  // useHelper(pointLightRef3, PointLightHelper, 0.5, "blue")

  return (
    <>
      <pointLight
        intensity={2}
        decay={2}
        distance={5}
        ref={pointLightRef}
        position={[-3, 3, 3]}
        color={"hotpink"}
      />
      <Sphere args={[0.2]} position={[-3, 3, 3]}>
        <meshBasicMaterial color={"hotpink"} />
      </Sphere>
      <pointLight
        intensity={2}
        decay={2}
        distance={5}
        ref={pointLightRef2}
        position={[3.3, 3.1, 2.7]}
        color={"hotpink"}
      />
      <Sphere args={[0.2]} position={[3.3, 3.1, 2.7]}>
        <meshBasicMaterial color={"hotpink"} />
      </Sphere>
      <pointLight
        intensity={2}
        decay={2}
        distance={2.5}
        ref={pointLightRef3}
        position={[-2, 3.5, 6.5]}
        color={"lightBlue"}
      />
      <primitive object={shop.scene} />
    </>
  )
}

export default Shop
