function setup() {
  createCanvas(400, 400);
}

class Ball{
  constructor(){
    this.length = 10;
    this.x = 200 - (this.length/2);
    this.y = 200 - (this.length/2);
    this.xspeed = -5;
    this.yspeed = 0;
  }
  
  display() {
    noStroke();
    fill('white');
    square(this.x, this.y, this.length);
  }
  
  move(){
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  
  collision(player1, player2) {
    if (this.xspeed < 0){ //moving left
      if (this.x == 20 && this.y + this.length > player1.y && this.y < player1.y + player1.height){
        this.xspeed *= -1;
        if (player1.dir == 'up'){
          this.yspeed -= 2;
        }
        else if(player1.dir == 'down'){
          this.yspeed += 2;
        }
      }
    }
    else { //moving right
      if(this.x + this.length == 380 & this.y + this.length > player2.y && this.y < player2.y + player2.height){
        this.xspeed *= -1;
        if (player2.dir == 'up'){
          this.yspeed -= 2;
        }
        else if(player2.dir == 'down'){
          this.yspeed += 2;
        }
      }
    }
    if (this.y <= 0 || this.y + this.length >= 400){
      this.yspeed *= -1;
    }
  }
}

class Player {
  constructor(x) {
    this.width = 10;
    this.height = 80;
    this.x = x;
    this.y = 200 - (this.height/2);
    this.speed = 5;
    this.dir = 'none';
  }

  display(){
    noStroke();
    fill('black');
    rect(this.x, this.y, this.width,this.height);
    }
  
}

class Score{
  constructor(){
    this.p1score = 0;
    this.p2score = 0;
  }

  display(){
    textSize(16);
    fill('black');
    text('Score',175,20);
    fill('blue');
    text('P1:',160,40);
    text(this.p1score,185,40);
    fill('red');
    text(':P2',215,40);
    text(this.p2score,205,40);
  }
  
  winner(ball){

  }
}

let player1 = new Player(10);
let player2 = new Player(380);
let ball = new Ball();
let score = new Score();
gameStart = false;

function draw() {
  background('grey');
  player1.display();
  player2.display();
  ball.display();
  score.display();
  
  if (gameStart == true) {
    ball.move();
    ball.collision(player1,player2);

    if(keyIsDown(87) && (player1.y > 0)) {
      player1.y -= player1.speed;
      player1.dir = 'up';
    }
    else if(keyIsDown(83)&& (player1.y < 400 - player1.height)) {
      player1.y += player1.speed;
      player1.dir = 'down';
    }
    else{
      player1.dir = 'none';
    }

    if(keyIsDown(UP_ARROW) && (player2.y > 0)) {
      player2.y -= player2.speed;
      player2.dir = 'up';
    }
    else if(keyIsDown(DOWN_ARROW)&& (player2.y < 400 - player2.height)) {
      player2.y += player2.speed;
      player2.dir = 'down';
    }
    else{
      player2.dir = 'none';
    }
 }
  
  if(ball.x <= 0){
    score.p2score += 1;
  }
  else if(ball.x >= 400){
    score.p1score += 1;
  }
  if(ball.x <= 0 || ball.x >= 400){
    gameStart = false;
    ball.x = 200;
    ball.y = 200;
    ball.yspeed = 0;
    player1.y = 200 - (player1.height/2);
    player2.y = 200 - (player2.height/2);
  }
}

function keyPressed(){
  gameStart = true;
}
