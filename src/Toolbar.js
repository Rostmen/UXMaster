// Toolbar.js
import React from 'react';

function Toolbar({ zoomLevel, onZoomIn, onZoomOut }) {
  return (
    <div className="toolbar">
      <button onClick={onZoomIn}>Zoom In</button>
      <button onClick={onZoomOut}>Zoom Out</button>
      <p>Current Zoom: {zoomLevel}</p>
    </div>
  );
}

export default Toolbar;
