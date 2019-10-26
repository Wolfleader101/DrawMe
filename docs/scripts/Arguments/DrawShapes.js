const canvas = document.getElementById('canvas');
const Context = ctx = canvas.getContext('2d');

class Square {
  constructor(colour, x, y, height, width) {
    this.colour = colour;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  //Method
  Draw() {
    Context.fillStyle = this.colour;
    Context.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Rectange {
  constructor(colour, x, y, height, width) {
    this.colour = colour;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  //Method
  Draw() {
    Context.fillStyle = this.colour;
    Context.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Circle {
  constructor(colour, x, y, radius, sAngle, eAngle) {
    this.colour = colour;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sAngle = sAngle;
    this.eAngle = eAngle;
  }

  //Method
  Draw() {
    Context.beginPath();
    Context.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle * Math.PI);
    Context.strokeStyle = this.colour;
    Context.stroke();
    Context.fillStyle = this.colour;
    Context.fill();
  }
}

const ShapeObjects = {
  square: new Square("red", 25, 25, 100, 100),
  rectangle: new Rectange("blue", 125, 200, 100, 150),
  circle: new Circle("orange", 500, 350, 100, 0, 2)
};