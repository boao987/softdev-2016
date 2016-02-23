var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var button = document.getElementById("animate");
var r = 0;
var dr = 5;

function animateCircle(){
    
    r+=dr;
    ctx.clearRect(0,0,500,500);
    
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(250,250,r,0,2*Math.PI);
    ctx.fill();
    
    if(r<=0 || r>=250){
        dr *= -1;
    }
    
    window.requestAnimationFrame(animateCircle);
}

button.addEventListener("click", animateCircle);