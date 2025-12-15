import { Player } from "../entities/player.js";
import { CONFIG } from "../core/config.js";

export function renderLighting(ctx) {
  ctx.save();

  ctx.fillStyle = "rgba(0,0,0,0.95)";
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  const lightRadius = 120 * (Player.battery / 100);

  ctx.globalCompositeOperation = "destination-out";

  ctx.beginPath();
  ctx.arc(Player.x, Player.y, lightRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
