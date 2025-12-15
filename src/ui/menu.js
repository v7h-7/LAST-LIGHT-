import { AudioManager } from "../audio/audioManager.js";

export const Menu = {
  active: true,
  gameOver: false,

  draw(ctx, width, height) {
    ctx.save();
    ctx.fillStyle = "#000c";
    ctx.fillRect(0, 0, width, height);

    ctx.textAlign = "center";

    if (!this.gameOver) {
      ctx.fillStyle = "#fff";
      ctx.font = "64px sans-serif";
      ctx.fillText("LAST LIGHT", width / 2, height / 2 - 60);

      ctx.font = "22px sans-serif";
      ctx.fillText("Press ENTER to Start", width / 2, height / 2 + 20);
    } else {
      ctx.fillStyle = "#ff3333";
      ctx.font = "60px sans-serif";
      ctx.fillText("GAME OVER", width / 2, height / 2 - 40);

      ctx.fillStyle = "#fff";
      ctx.font = "22px sans-serif";
      ctx.fillText("Press R to Restart", width / 2, height / 2 + 40);
    }

    ctx.restore();
  },

  start() {
    this.active = false;
    this.gameOver = false;
    AudioManager.startAmbient();
  },

  end() {
    this.gameOver = true;
    this.active = true;
    AudioManager.play("death");
  }
};
