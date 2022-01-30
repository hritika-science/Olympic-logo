canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth = 5;
ctx.arc(150,210,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth = 5;
ctx.arc(390,210,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth = 5;
ctx.arc(640,210,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth = 5;
ctx.arc(270,300,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.lineWidth = 5;
ctx.arc(510,300,100,0,2*Math.PI);
ctx.stroke();