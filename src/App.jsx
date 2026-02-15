
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import PortfolioScene from "./components/PortfolioScene";
import Interface from "./components/Interface";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Three.js Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold mb-2">Something went wrong in the 3D scene</h2>
            <p className="text-red-400 mb-4">{this.state.error?.message}</p>
            <button 
              className="bg-purple-600 px-4 py-2 rounded"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 20]} />
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <ScrollControls pages={7} damping={0.3}>
            {/* 3D Content that reacts to scroll */}
            <PortfolioScene />
            
            {/* HTML Overlay Content */}
            <Scroll html style={{ width: "100%" }}>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Suspense>

        {/* <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={0.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer> */}
      </Canvas>
      <div className="loader" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', display: 'none' }}>
        Loading...
      </div>
    </ErrorBoundary>
  );
}

export default App;
