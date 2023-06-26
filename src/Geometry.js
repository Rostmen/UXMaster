export const checkCollision = (x, y, width, height, framesData) => {
  for (const frame of framesData) {
    const xIntercepts = !(x + width < frame.x || frame.x + frame.width < x);
    const yIntercepts = !(y + height < frame.y || frame.y + frame.height < y);
    if (xIntercepts && yIntercepts) {
      return true;
    }
  }
  return false;
};

export const newPointOnDrag = (newX, newY, width, height, framesData) => {
  let validX = newX;
  let validY = newY;

  if (checkCollision(newX, newY, width, height, framesData)) {
    for (const frame of framesData) {
      if (newX < frame.x && newY < frame.y) {
        validX = frame.x - width;
        validY = frame.y - height;
      } else if (newX < frame.x) {
        validX = frame.x - width;
      } else if (newY < frame.y) {
        validY = frame.y - height;
      }
    }
  }

  return { x: validX, y: validY };
};
