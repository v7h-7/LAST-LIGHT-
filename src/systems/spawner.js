import { createEnemy } from "../entities/enemy.js";

export const Enemies = [];

export function spawnEnemy(x, y) {
  Enemies.push(createEnemy(x, y));
}

export function spawnInitialEnemies() {
  spawnEnemy(100, 100);
  spawnEnemy(700, 500);
}
