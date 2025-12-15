import { Player } from "../entities/player.js";
import { Enemies } from "./spawner.js";

export function checkCollisions() {
  if (!Player.alive) return;

  for (const enemy of Enemies) {
    const dx = Player.x - enemy.x;
    const dy = Player.y - enemy.y;
    const dist = Math.hypot(dx, dy);

    if (dist < Player.radius + enemy.radius) {
      Player.alive = false;
      break;
    }
  }
}
