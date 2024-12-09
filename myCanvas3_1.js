const canvas3 = document.getElementById("myCanvas3");
const ctx3 = canvas3.getContext("2d");

let gradient3 = ctx3.createRadialGradient(350, 200, 150, 300, 120, 10);
gradient3.addColorStop(0, "pink");
gradient3.addColorStop(1, "white");

ctx3.beginPath()
ctx3.arc(350, 200, 150, 0, Math.PI * 2);
ctx3.fillStyle = gradient3;
ctx3.fill();