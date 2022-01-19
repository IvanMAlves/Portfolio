function setup() {
  createCanvas(400, 400);
}

class Player {
  constructor() {
    this.diameter = 20;
    this.x = 200;
    this.y = 400 - (this.diameter/2);
    this.speed = 5;
    this.time = 0;
    this.topTime = 0;
  }

  display() {
    noStroke();
    fill('black');
    ellipse(this.x, this.y, this.diameter);
    textSize(16);
    text(this.time, 5, 20);
    text(this.topTime, 5, 40);
    if (frameCount % 60 == 0) {
      this.time += 1;
    }
  }
  
  collision() {
    this.x = 200;
    this.y = 400 - (this.diameter/2);
    if (this.time > this.topTime)
      this.topTime = this.time;
    this.time = 0;
  }
}

class Faller {
  constructor() {
    this.diameter = 10;
    this.x = Math.floor(Math.random() * 400) - this.diameter;
    this.y = Math.floor(Math.random() * -400) - this.diameter;
    this.speed = 2;
  }

  display() {
    noStroke();
    fill('white');
    ellipse(this.x, this.y, this.diameter);
  }
  
  fall() {
    this.y += this.speed;
  }
  
  collision() {
    this.x = Math.floor(Math.random() * 400) - this.diameter;
    this.y = Math.floor(Math.random() * -400) - this.diameter;
    this.speed = 2;
  }
}

let player = new Player();
let fallers = [];
for (let i = 0; i < 5; i++) {
  fallers[i] = new Faller();
}

function draw() {
  background('grey');
  player.display();
  
  for (let i = 0; i < fallers.length; i++) {
    fallers[i].display();
    fallers[i].fall();
    if (fallers[i].y > 400) {
      fallers[i].y = Math.floor(Math.random() * -400) - fallers[i].diameter;
      fallers[i].x = Math.floor(Math.random() * 400) - fallers[i].diameter;
      fallers[i].speed += 0.2;
    }
    if (dist(fallers[i].x, fallers[i].y, player.x, player.y) <= (fallers[i].diameter/2) + (player.diameter/2)) {
      player.collision();
      for (let j = 0; j < fallers.length; j++) {
        fallers[j].collision();
      }
      i = fallers.length;
    }
  }
  
  if(keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
  }
  
}















