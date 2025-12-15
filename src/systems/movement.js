import { Player } from "../entities/player.js";

const keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

export function handleKey(key, pressed) {
  if (key === "w" || key === "ArrowUp") keys.up = pressed;
  if (key === "s" || key === "ArrowDown") keys.down = pressed;
  if (key === "a" || key === "ArrowLeft") keys.left = pressed;
  if (key === "d" || key === "ArrowRight") keys.right = pressed;
}

export function updateMovement(dt) {
  let dx = 0;
  let dy = 0;

  if (keys.up) dy -= 1;
  if (keys.down) dy += 1;
  if (keys.left) dx -= 1;
  if (keys.right) dx += 1;

  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy);
    dx /= len;
    dy /= len;

    Player.x += dx * Player.speed * dt;
    Player.y += dy * Player.speed * dt;
  }
}

export function isMoving() {
  return keys.up || keys.down || keys.left || keys.right;
}
