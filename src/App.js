import React from "react"
import CanvasWrapper from "./components/CanvasWrapper"
import { Canvas } from "@react-three/fiber"

const App = () => {
  return (
    <div>
      <Canvas className="canvas" shadows={true}>
        <CanvasWrapper />
      </Canvas>
    </div>
  )
}

export default App
