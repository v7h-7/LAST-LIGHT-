import { Player } from "../entities/player.js";
import { Input } from "./input.js";

export function updateMovement(dt) {
  if (!Player.alive) return;

  let dx = 0;
  let dy = 0;

  if (Input.up) dy -= 1;
  if (Input.down) dy += 1;
  if (Input.left) dx -= 1;
  if (Input.right) dx += 1;

  if (dx !== 0 || dy !== 0) {
    const len = Math.hypot(dx, dy);
    dx /= len;
    dy /= len;

    Player.x += dx * Player.speed * dt;
    Player.y += dy * Player.speed * dt;

    Player.battery -= Player.batteryDrain * dt;
  }

  if (Player.battery <= 0) {
    Player.battery = 0;
    Player.alive = false;
  }
}
