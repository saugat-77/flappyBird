
class Bird {
    constructor() {
    this.birdHeight = 23;
    this.birdWidth = 33;

    this.currentPos = 100;
    this.x = 50;
    this.velocity = 1;
    this.angle = 0;
    this.collides = false;
    this.jump=false;
      
    }
    bird() {
      this.element = document.createElement("div");
      this.element.setAttribute('class','birdImg');
  
      this.element.style.position = "absolute";
      this.element.style.height = this.birdHeight + "px";
      this.element.style.width = this.birdWidth + "px";
  
      this.element.style.top = 50+ "px";
      this.element.style.left = 10 + "px";
      gameContainer.appendChild(this.element);
    }
  
    drop(){

      
      
      let dropAnimation = setInterval(() => {
          this.checkCollision()
          this.currentPos += 1 * this.velocity;
          this.angle += 2;

          this.velocity += 0.2;
          this.element.style.top = this.currentPos + "px";

          this.element.style.transform = `rotate(${this.angle}deg)`;
          if (this.currentPos >= height-50) {
            this.collides = true;
          }

          if (this.collides || this.currentPos >=height-50) {
            clearInterval(dropAnimation);
          }
         
        }, 1000 / 60);
      }

      birdJump(){
          this.jump=true;
          this.angle=-30;
          let change=0;
          this.velocity=0;
          let jumpAnimation =setInterval(()=>
          {
            change+=10
            this.currentPos-=10;
            this.element.style.top=this.currentPos+'px';
            this.element.style.transform = `rotate(${this.angle}deg)`;
            if(change>50||this.currentPos<=10){
                clearInterval(jumpAnimation);
                this.jump=false;
    
            }

          },1000/60)
      }

      checkCollision(){
        if (
          this.x + this.birdWidth >= parseInt(pipe2.topPipe.style.left) &&
          this.x <=
            parseInt(pipe2.topPipe.style.left) +
              parseInt(pipe2.topPipe.style.width) &&
              parseInt(this.element.style.top) <= parseInt(pipe2.topPipe.style.height)
        ) {
        collision=true        }
    
        if (
          this.x + this.birdWidth >= parseInt(pipe2.topPipe.style.left) &&
          this.x <=
            parseInt(pipe2.topPipe.style.left) +
              parseInt(pipe2.topPipe.style.width) &&
          parseInt(this.element.style.top) + this.birdHeight >=
            height - parseInt(pipe2.bottomPipe.style.height)
        ) {
          collision=true   
         
               }

      }
    }

  
const bird1 = new Bird();
bird1.bird();



      