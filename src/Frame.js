import React, { useState } from 'react';
import { Rect } from 'react-konva';
import { checkCollision } from './utils/Geometry';

function Frame({ id, initialX, initialY, width, height, setIsDragging, updateFramePosition, framesData }) {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  const handleDragMove = (e) => {
    const collision = checkCollision(id, e.target.x(), e.target.y(), width, height, framesData);

    let newX = e.target.x();
    let newY = e.target.y();

    if (collision) {
      newX = x; // reset x position to the last known good position
      newY = y; // reset y position to the last known good position
    } else {
      setX(newX); // if no collision, update the last known good position
      setY(newY);
    }

    e.target.x(newX);
    e.target.y(newY);

    updateFramePosition(id, newX, newY);
  };

  const handleDragEnd = (e) => {
    setIsDragging(null);
    updateFramePosition(id, e.target.x(), e.target.y());
  };

  return (
    <Rect
      id={id}
      x={initialX}
      y={initialY}
      width={width}
      height={height}
      fill="blue"
      draggable
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    />
  );
}

export default Frame;
