const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");

let gradient = ctx.createRadialGradient(300, 150, 100, 250, 70, 10);
gradient.addColorStop(0, "black");
gradient.addColorStop(1, "white");

ctx.beginPath();
ctx.arc(300, 150, 100, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();