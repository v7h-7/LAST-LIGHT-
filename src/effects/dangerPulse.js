import { Player } from "../entities/player.js";
import { Enemies } from "../systems/spawner.js";

export function drawDangerPulse(ctx, width, height) {
  let danger = 0;

  for (const e of Enemies) {
    const dx = Player.x - e.x;
    const dy = Player.y - e.y;
    const d = Math.hypot(dx, dy);

    if (d < 120) {
      danger = Math.max(danger, 1 - d / 120);
    }
  }

  if (danger > 0) {
    ctx.save();
    ctx.globalAlpha = danger * 0.4;
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
}
