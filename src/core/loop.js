import { CONFIG } from "./config.js";
import { State } from "./state.js";

export function startLoop(update, render) {
  let lastTime = 0;

  function loop(timestamp) {
    if (!State.running) return;

    const delta = timestamp - lastTime;
    lastTime = timestamp;

    State.time += delta;

    update(delta / 1000);
    render();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
