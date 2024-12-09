const canvas1 = document.getElementById("myCanvas1");
const ctx1 = canvas1.getContext("2d");
let gradient1 = ctx1.createRadialGradient(350, 200, 150, 300, 120, 10);
gradient1.addColorStop(0, "purple");
gradient1.addColorStop(1, "pink");
  
ctx1.beginPath();
ctx1.arc(350, 200, 150, 0, Math.PI * 2);
ctx1.fillStyle = gradient;
ctx1.fill();