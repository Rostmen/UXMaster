export function checkCollision(id, x, y, width, height, framesData) {
  for (let frame of framesData) {
    if (frame.id === id) continue;
    if (x < frame.x + width && x + width > frame.x && y < frame.y + height && y + height > frame.y) {
      return true;
    }
  }
  return false;
}