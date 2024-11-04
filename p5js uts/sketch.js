let birds = [];
let isDay = true; // To track whether it's day or night

function setup() {
  createCanvas(800, 400); 
  // Generate initial bird positions
  for (let i = 0; i < 10; i++) {
    birds.push(new Bird(random(width), random(50, 150)));
  }
}

function draw() {
  if (isDay) {
    background(135, 206, 250); // Sky blue for day
    drawSun();
  } else {
    background(20, 24, 82); // Dark blue for night
    drawMoon();
  }
  
  drawMountains();
  drawStreet();
  drawBirds();
}

function drawSun() {
  fill(255, 223, 0); // Yellow color
  ellipse(100, 100, 80, 80); // Sun shape
}

function drawMoon() {
  fill(200); // Light color for the moon
  ellipse(100, 100, 80, 80); // Moon shape
  fill(20, 24, 82); // Background color for moon craters
  ellipse(85, 85, 15, 15); // Small crater
  ellipse(115, 115, 10, 10); // Smaller crater
}

function drawMountains() {
  noStroke();

  // Distant mountains (red)
  fill(210,180,140); // Red color
  beginShape();
  vertex(0, height / 2);
  vertex(width / 4, height / 4);
  vertex(width / 2, height / 2);
  vertex((3 * width) / 4, height / 3);
  vertex(width, height / 2);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

  // Closer mountains (darker red)
 

function drawStreet() {
  fill(50);
  rect(0, height - 50, width, 50); // Road

  // Road lines
  for (let i = 0; i < width; i += 80) {
    fill(255);
    rect(i - (frameCount % 80), height - 25, 40, 5); // Moving dashed lines
  }
}

function drawBirds() {
  for (let bird of birds) {
    bird.update();
    bird.show();
  }
}

// Bird class
class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(8, 12);
    this.speed = random(1, 3);
  }

  update() {
    this.x += this.speed;
    if (this.x > width) this.x = -this.size; // Wrap around
  }

  show() {
    fill(0);
    ellipse(this.x, this.y, this.size, this.size / 2); // Simple bird shape
  }
}


