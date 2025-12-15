let shakeTime = 0;
let intensity = 0;

export function triggerShake(power = 6, time = 0.25) {
  intensity = power;
  shakeTime = time;
}

export function applyShake(ctx, dt) {
  if (shakeTime > 0) {
    shakeTime -= dt;
    const x = (Math.random() - 0.5) * intensity;
    const y = (Math.random() - 0.5) * intensity;
    ctx.translate(x, y);
  }
}
