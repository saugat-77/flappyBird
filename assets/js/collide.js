bird1.birdJump();

const pipe2 = new Pipes(150);
// console.log(pipe2)
pipe2.pipeDown1();
pipe2.pipeUp1();
pipe2.move();

function genPipeObj(pipe2) {
  // console.log(pipe2.x)
  pipe1top = {
    x: pipe2.x,
    y: 0,
    w: containerWidth,
    h: pipe2.pipeHeightTop,
  };

  pipe1bottom = {
    x: pipe2.x,
    y: 360 - pipe2.bottomHeight,
    w: containerWidth,
    h: pipe2.bottomHeight,
  };

  let pipes = [pipe1top, pipe1bottom];
  return pipes;
}




function main() {
  document.addEventListener("keydown", (e) => {
    if (e.key == " ") {
      if (!bird1.collides) {
        bird1.birdJump();
      }
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    main();
    bird1.drop();
  }
});
