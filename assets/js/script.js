const gameContainer = document.querySelector(".gameContainer");
const floor = document.getElementsByClassName("baseContainer");
const containerWidth = 340;
let height = 500;
let jump=0;
let birdJump=0;
let jumpIndex1=0
let speed=10;
let RESTARTPOS=350;
let GAP=200;
let pipeHeightTop = Math.floor(Math.random() * (height - 40));

function rand(max,min){
  return Math.floor(Math.random()*(max-min)+min)
}

class Pipes {
  constructor(start) {
    this.x=start;
    this.height = rand(320,20);
    this.width = 52;
    this.containerWidth = containerWidth;
    this.pipeHeightTop=pipeHeightTop;
    
  }

  pipeUp1() {
    this.topPipe = document.createElement("div");
    this.topPipe.setAttribute('class','pipeUp1');
    this.topPipe.style.position = "absolute";
    this.topPipe.style.width = this.width + "px";
    this.topPipe.style.height = this.height + "px";
    this.topPipe.style.top = 0 + "px";
    this.topPipe.style.left = this.x + "px";
    // this.topPipe.style.backgroundColor = "blue";
    gameContainer.appendChild(this.topPipe);
  }

  pipeDown1() {
    this.bottomPipe = document.createElement("div");
    this.bottomPipe.setAttribute('class','pipeDown1');
    this.bottomPipe.style.position = "absolute";
    this.bottomPipe.style.width = this.width + "px";
    this.bottomPipe.style.height = 500 - this.height - GAP + "px";
    // this.bottomPipe.style.backgroundColor = "red";
    this.bottomPipe.style.bottom = 75 + "px";
    this.bottomPipe.style.left = this.x + "px";
    gameContainer.appendChild(this.bottomPipe);
  }


move(){
var pipeMove= setInterval(() => {
   if(!collision){
      this.x -=1;
      this.topPipe.style.left = this.x +"px";
      this.bottomPipe.style.left = `${this.x}px`;
   
      if (this.x <= -50) {
        this.x = RESTARTPOS;
        this.pipeHeightTop = rand(320,20);
        this.bottomHeight = 500 - GAP - this.pipeHeightTop;
        this.topPipe.style.height = `${this.pipeHeightTop}px`;
        this.bottomPipe.style.height = `${this.bottomHeight}px`;
        this.bottomPipe.style.left = `${RESTARTPOS}px`;
        this.topPipe.style.left = `${RESTARTPOS}px`;
   
      }

    }
    else{
      
      clearInterval(pipeMove)
    }
      
  }, 1000/500);
}
}

// let pipe2 = new Pipes(150);
// // console.log(pipe2)
// pipe2.pipeDown1();
// pipe2.pipeUp1();
// pipe2.move();
