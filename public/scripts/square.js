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

/* Getter (not needed)
  get Draw() {
    return this.DrawSquare();
  }
*/
  //Method
  DrawSquare() {
    Context.rect(this.x, this.y, this.width, this.height);
    Context.fillStyle = this.colour;
    Context.fill();
  }
}

let square = new Square("red", 25, 25, 100, 100);
