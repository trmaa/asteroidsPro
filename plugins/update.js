const fixedDeltaTime = 1 / 60;
let lastTimestamp = 0;

function update(timestamp) {
  window.deltaTime = (timestamp - lastTimestamp) / 1000;
  loop();
  lastTimestamp = timestamp;
  requestAnimationFrame(update);
}
requestAnimationFrame(update);