export const AudioManager = {
  sounds: {},
  muted: false,

  load() {
    this.sounds.ambient = new Audio("assets/audio/ambient.mp3");
    this.sounds.footsteps = new Audio("assets/audio/footsteps.mp3");
    this.sounds.enemy = new Audio("assets/audio/enemy.mp3");
    this.sounds.death = new Audio("assets/audio/death.mp3");

    this.sounds.ambient.loop = true;
    this.sounds.ambient.volume = 0.4;

    this.sounds.footsteps.loop = true;
    this.sounds.footsteps.volume = 0.6;

    this.sounds.enemy.volume = 0.8;
    this.sounds.death.volume = 1;
  },

  play(name) {
    if (this.muted) return;
    const sound = this.sounds[name];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play();
  },

  startAmbient() {
    if (this.muted) return;
    this.sounds.ambient.play();
  },

  stop(name) {
    const sound = this.sounds[name];
    if (sound) sound.pause();
  },

  toggleMute() {
    this.muted = !this.muted;
    Object.values(this.sounds).forEach(s => s.pause());
  }
};
