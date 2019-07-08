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

const ShapeObjects = {
  square: new Square("red", 25, 25, 100, 100),
  rectangle: new Rectange("blue", 125, 200, 100, 150)
};

