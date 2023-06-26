// App.js
import React, { useState, useEffect, useRef } from 'react';

import Canvas from './Canvas';

function App() {


  // Multiple frames data
  const [framesData, setFramesData] = useState([
    { id: 'frame1', x: 10, y: 10 },
    { id: 'frame2', x: 400, y: 10 },
    { id: 'frame3', x: 800, y: 10 },
    // add more frames here...
  ]);

  const framesDataRef = useRef(framesData);
  framesDataRef.current = framesData;

  return (
    <div className="App">
      <Canvas 
        framesData={framesData} 
        setFramesData={setFramesData}
      />
    </div>
  );
}

export default App;
