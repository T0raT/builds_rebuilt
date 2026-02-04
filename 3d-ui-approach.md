Possible `requestAnimationFrame()` version, but unsure

```js
const app = document.getElementById("app");
const inner = app.querySelector(".inner");

const maxTilt = 12;
const depth = 60;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function animate() {
  currentX += (targetX - currentX) * 0.12;
  currentY += (targetY - currentY) * 0.12;

  app.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
  inner.style.transform = `translateZ(${depth}px)`;

  requestAnimationFrame(animate);
}

app.addEventListener("mousemove", (e) => {
  const rect = app.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  targetY = (x - 0.5) * (maxTilt * 2);
  targetX = (0.5 - y) * (maxTilt * 2);
});

app.addEventListener("mouseleave", () => {
  targetX = 0;
  targetY = 0;
});

animate();
```
