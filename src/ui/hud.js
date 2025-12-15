import { AudioManager } from "../audio/audioManager.js";

export function drawHUD(ctx) {
  ctx.save();
  ctx.globalAlpha = 0.8;
  ctx.fillStyle = "#fff";
  ctx.font = "14px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("[M] Mute / Unmute", 12, 20);
  ctx.restore();
}

export function toggleMute() {
  AudioManager.toggleMute();
}
