const canvas4 = document4.getElementById("myCanvas4");
const ctx4 = canvas4.getContext("2d");

let gradient4 = ctx4.createRadialGradient(350, 200, 150, 300, 120, 10);
gradient4.addColorStop(0, "Orange");
gradient4.addColorStop(1, "Yellow");

ctx4.beginPath();
ctx4.arc(350, 200, 150, 0, Math.PI * 2);
ctx4.fillStyle = gradient4;
ctx4.fill();