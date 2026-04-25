import React from "react";
import Interface from "./components/Interface";
import FloatingLines from "./components/FloatingLines";

function App() {
  return (
    <>
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        <Interface />
      </div>
    </>
  );
}

export default App;
