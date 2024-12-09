const canvas = document.getElementById("myCanvas3");
const ctx = canvas.getContext("2d");

let gradient = ctx.createRadialGradient(350, 200, 150, 300, 120, 10);
gradient.addColorStop(0, "pink");
gradient.addColorStop(1, "white");

ctx.beginPath()
ctx.arc(350, 200, 150, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();