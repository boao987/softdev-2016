var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var start = document.getElementById("animate");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var frameID;


var animateRect = function(){
    
    var cx = Math.random()*c.width;
    var dx = 5;
    var cy = Math.random()*c.height;
    var dy = 5;
    var width = 150;
    var height = 50;
    
    var animCode = function(){
        ctx.clearRect(0,0,500,500);//I dont know why this isn't working
        cx+=dx;
        cy+=dy;
        
        ctx.fillStyle = "#ff0000";
        ctx.rect(cx,cy,width,height);
        ctx.fill();
        
        
        if(cx<=0||cx>=c.width){
            dx *= -1;
        }
        if(cy<=0||cy>=c.height){
            dy *= -1;
        }
        
        frameID = window.requestAnimationFrame(animCode);
    }
    
    animCode();
}

var stopAnim = function(){
    window.cancelAnimationFrame(frameID);
}

var clearCanvas = function(){
    window.cancelAnimationFrame(frameID);
    ctx.clearRect(0,0,500,500);
}

start.addEventListener("click", animateRect);
stop.addEventListener("click", stopAnim);
clear.addEventListener("click", clearCanvas);