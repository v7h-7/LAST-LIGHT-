export const Input = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.addEventListener("keydown", e => {
  if (e.key === "w" || e.key === "ArrowUp") Input.up = true;
  if (e.key === "s" || e.key === "ArrowDown") Input.down = true;
  if (e.key === "a" || e.key === "ArrowLeft") Input.left = true;
  if (e.key === "d" || e.key === "ArrowRight") Input.right = true;
});

window.addEventListener("keyup", e => {
  if (e.key === "w" || e.key === "ArrowUp") Input.up = false;
  if (e.key === "s" || e.key === "ArrowDown") Input.down = false;
  if (e.key === "a" || e.key === "ArrowLeft") Input.left = false;
  if (e.key === "d" || e.key === "ArrowRight") Input.right = false;
});
