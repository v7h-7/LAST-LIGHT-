import { Player } from "../entities/player.js";
import { Enemies } from "./spawner.js";

export function updateAI(dt) {
  if (!Player.alive) return;

  for (const enemy of Enemies) {
    if (!enemy.alive) continue;

    const dx = Player.x - enemy.x;
    const dy = Player.y - enemy.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 1) {
      enemy.x += (dx / dist) * enemy.speed * dt;
      enemy.y += (dy / dist) * enemy.speed * dt;
    }
  }
}
