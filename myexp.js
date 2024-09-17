var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,150,550);
grd.addColorStop(0,"red");
grd.addColorStop(0.1,"orange");
grd.addColorStop(0.8,"blue");
grd.addColorStop(0.9,"green");
grd.addColorStop(1,"brown");
ctx.fillStyle = grd;
ctx.fillRect(0,0,1400,800);

ctx.strokeStyle="grey"
ctx.lineWidth=2;
ctx.strokeRect(100,400,1100,350)

ctx.moveTo(100,400)
ctx.lineTo(250,10)

ctx.moveTo(250,10)
ctx.lineTo(450,400)

ctx.moveTo(450,400)
ctx.lineTo(450,750)

ctx.moveTo(1200,10)
ctx.lineTo(1200,400)

ctx.moveTo(250,10)
ctx.lineTo(1200,10)

ctx.moveTo(200,750)
ctx.lineTo(200,600)

ctx.moveTo(200,600)
ctx.lineTo(300,600)

ctx.moveTo(300,600)
ctx.lineTo(300,750)

// ctx.moveTo(700,700)
// ctx.lineTo(900,700)

// ctx.moveTo(700,500)
// ctx.lineTo(900,500)

// ctx.moveTo(,)
// ctx.lineTo(,)

ctx.strokeRect(700,500,50,50)
ctx.strokeRect(750,500,50,50)
ctx.strokeRect(750,550,50,50)
ctx.strokeRect(700,550,50,50)
ctx.stroke();




