//Create canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var wrapper = document.getElementById("wrapper");
canvas.width = 300;
canvas.height = 500;
wrapper.appendChild(canvas);


//Image rendering
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){ bgReady = true; };
bgImage.src = "img/bg1.png";
var pReady = false;
var pImage = new Image();
pImage.onload = function(){ pReady = true; };
pImage.src = "img/player.png";

//Game objects
var player = {
  speed: 256,
  x: 0,
  y: 0
};
var goal = {
  x: 0,
  y: 0
}

//Handle input
canvas.addEventListener("touchstart", handleStart, false);
canvas.addEventListener("touchmove", handleMove, false);

function handleStart(e){
  e.preventDefault();
  var touches = e.changedTouches;
  player.x = touches[0].pageX - canvas.offsetLeft - pImage.width/2;
  player.y = touches[0].pageY - canvas.offsetTop - pImage.height/2;
}

function handleMove(e){
  e.preventDefault();
  var touches = e.targetTouches;
  player.x = touches[0].pageX - canvas.offsetLeft - pImage.width/2;
  player.y = touches[0].pageY - canvas.offsetTop - pImage.height/2;
}


//Main game update function
function update(){

}

//Main game render function
function render(){
  if(bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if(pReady) {
    ctx.drawImage(pImage, player.x, player.y);
  }
}
