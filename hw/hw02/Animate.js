var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var start = document.getElementById("animate");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var frameID;


var animateCircle = function(){
    
    var r = 0;
    var dr = 5;
    
    var animCode = function(){
        r+=dr;
        ctx.clearRect(0,0,500,500);
        
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        ctx.arc(250,250,r,0,2*Math.PI);
        ctx.fill();
        
        if(r<=0 || r>=250){
            dr *= -1;
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

start.addEventListener("click", animateCircle);
stop.addEventListener("click", stopAnim);
clear.addEventListener("click", clearCanvas);