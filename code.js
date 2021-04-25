const accessCode1 = "NATALEM";
const accessCode2 = "AAYUSH";
const accessCode3 = "PARTY";

function clues() {
    strokeWeight(2);
    stroke("red");
    noFill();
    textSize(30)
    text("N A T A L E M", windowWidth/12, windowHeight/100+40);
    text("U Y H S A A", windowWidth/1.8, windowHeight/2-20);
    text("R P T Y A", windowWidth/12, windowHeight/1.5);

    fill("lightblue")
    text("Hint: Its here in another!!", windowWidth/12,windowHeight/100+80)
    text("Hint: Thats a very good co..secret !!", windowWidth/1.8, windowHeight/2+20);
    text("Hint: Oh! we can't bake it, but can make, not today !!", windowWidth/12, windowHeight/1.5+40);
}