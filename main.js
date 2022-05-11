var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var lastX, lastY;

color="black";
width=1;

new_width=screen.width-100;
new_height=screen.height-300;

if(screen.width<992){
   document.getElementById("myCanvas").width=new_width
   document.getElementById("myCanvas").width=new_height
   document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", touch_move);

function touch_move(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;

     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.moveTo(lastX, lastY);
     ctx.lineTo(currentX, currentY);
     ctx.stroke();

    lastX=currentX;
    lastY=currentY;
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}