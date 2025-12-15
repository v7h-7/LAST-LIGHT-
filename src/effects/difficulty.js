export let difficulty = 1;

export function updateDifficulty(dt) {
  difficulty += dt * 0.03;
}
