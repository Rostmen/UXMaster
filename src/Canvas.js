import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
import Frame from './Frame';
import Toolbar from './Toolbar';
import { checkCollision } from './utils/Geometry';

// Canvas.js
const Canvas = ({ framesData, setFramesData }) => {
  // iPhone X screen size
  const frameWidth = 375;
  const frameHeight = 812;

  const updateFramePosition = (id, newX, newY) => {
    setFramesData(framesData.map(frame => frame.id === id ? { ...frame, x: newX, y: newY } : frame));
  };

  const handleCollision = (id, x, y, width, height) => {
    return checkCollision(id, x, y, width, height, framesData);
  };

  const [stageSize, setStageSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [draggingId, setIsDragging] = useState(null);

  const checkSize = () => {
    setStageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div class="Canvas">
    <Toolbar
        zoomLevel={zoomLevel.toFixed(2)}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
    <Stage
      width={stageSize.width}
      height={stageSize.height}
      scaleX={zoomLevel}
      scaleY={zoomLevel}
      draggable={!draggingId}
    >
      <Layer>
        {framesData.map((frame) => (
          <Frame
            key={frame.id}
            id={frame.id}
            initialX={frame.x}
            initialY={frame.y}
            width={frameWidth}
            height={frameHeight}
            setIsDragging={setIsDragging}
            checkCollision={handleCollision}
            updateFramePosition={updateFramePosition}
            framesData={framesData}
          />
        ))}
      </Layer>
    </Stage>
    </div> 
  );
};


export default Canvas;
