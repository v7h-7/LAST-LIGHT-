import { CONFIG } from "./core/config.js";
import { startLoop } from "./core/loop.js";

import { Player, resetPlayer } from "./entities/player.js";
import { updateMovement, isMoving } from "./systems/movement.js";
import { renderLighting } from "./systems/lighting.js";

import { spawnInitialEnemies, Enemies } from "./systems/spawner.js";
import { updateAI } from "./systems/ai.js";
import { checkCollisions } from "./systems/collision.js";

import { AudioManager } from "./audio/audioManager.js";
import { Menu } from "./ui/menu.js";
import { drawHUD, toggleMute } from "./ui/hud.js";

import { triggerShake, applyShake } from "./effects/screenShake.js";
import { drawDangerPulse } from "./effects/dangerPulse.js";
import { updateDifficulty, difficulty } from "./effects/difficulty.js";

// ===== Canvas =====
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = CONFIG.WIDTH;
canvas.height = CONFIG.HEIGHT;

// ===== Init =====
AudioManager.load();
spawnInitialEnemies();

let loopStarted = false;

// ===== Loop =====
function update(dt) {
  if (Menu.active) return;

  updateDifficulty(dt);

  if (!Player.alive) {
    Menu.end();
    triggerShake(12, 0.4);
    return;
  }

  updateMovement(dt);
  updateAI(dt * difficulty);
  checkCollisions();

  if (isMoving()) {
    AudioManager.sounds.footsteps.play();
  } else {
    AudioManager.stop("footsteps");
  }
}

function render(dt) {
  ctx.save();
  applyShake(ctx, dt);

  ctx.fillStyle = CONFIG.BACKGROUND;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Player
  if (Player.alive) {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(Player.x, Player.y, Player.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Enemies
  ctx.fillStyle = "#aa0000";
  for (const enemy of Enemies) {
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  renderLighting(ctx);
  drawDangerPulse(ctx, canvas.width, canvas.height);
  drawHUD(ctx);

  if (Menu.active) {
    Menu.draw(ctx, canvas.width, canvas.height);
  }

  ctx.restore();
}

// ===== Controls =====
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && Menu.active && !Menu.gameOver) {
    Menu.start();
    if (!loopStarted) {
      loopStarted = true;
      startLoop(update, render);
    }
  }

  if (e.key.toLowerCase() === "m") {
    toggleMute();
  }

  if (e.key.toLowerCase() === "r" && Menu.gameOver) {
    resetPlayer();
    Enemies.length = 0;
    spawnInitialEnemies();
    Menu.start();
  }
});
