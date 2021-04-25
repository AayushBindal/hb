var score = 0;
var song;

function preload() {
    song = loadSound("d.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   security = new Security();
   system = new System();
   song.play();
}

function draw() {
    background(0);
   clues();
   security.display();
  textSize(20);
  fill("red");
  text("Score: " + score, windowWidth/2, windowHeight/8);

  if(score === 3) {
    clear();
    fill("black");
    textSize(40);
    text("permission allowed",250, 200);
   let a = createA('https://studio.code.org/projects/dance/lOSrHtwaQtEgeQjLWE8iOqDMS-06VIGyijDloDO6ZAw', 'have a dance party', '_blank');
    a.position(windowWidth/2, windowHeight/2);
    let b = createA('https://studio.code.org/projects/gamelab/dk9-JfRDyBywuGhR1fDTKOP3SM0ZfFoho5a60l3yi8w', 'play a game', '_blank');
    b.position(windowWidth/2, windowHeight/2+20);
  }
  drawSprites();
}