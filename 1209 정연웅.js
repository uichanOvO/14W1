const canvas2 = document.getElementById("myCanvas2");
const ctx2 = canvas2.getContext("2d");
let gradient2 = ctx2.createRadialGradient(300, 150, 100, 250, 70, 10);
gradient2.addColorStop(0, "black");
gradient2.addColorStop(1, "white");

ctx2.beginPath();
ctx2.arc(300, 150, 100, 0, Math.PI * 2);
ctx2.fillStyle = gradient2;
ctx2.fill();