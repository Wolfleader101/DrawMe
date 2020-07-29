class Shape {
    constructor(name,color, x, y) {
        this.name = name;
        this.color = color;
        this.x = x;
        this.y = y;
      }
    
      Draw() {
        Context.fillStyle = this.color;
          // draw shape
      }

}

class Rectange extends Shape {
    
    constructor(name,color,x,y,height,width) {
        super(name,color,x,y);
        this.height = height;
        this.width = width;
        
    }
    Draw() {
        super.Draw();
        Context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Square extends Rectange {
    constructor(name,color,x,y,size) {
        super(name,color,x,y,size,size);
        
    }
}

class Circle extends Shape {
    constructor(name, colour, x, y, radius) {
        super(name,color,x,y);
        this.radius = radius;
        this.sAngle = 0;
        this.eAngle = 2;
      }

    Draw() {
        super.Draw(); // might cause issues with color  - will need to test
        Context.beginPath();
        Context.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle * Math.PI);
        Context.strokeStyle = this.colour;
        Context.stroke();
        Context.fillStyle = this.colour;
        Context.fill();
    }
}

class SemiCircle extends Circle {
    constructor(name, colour, x, y, radius) {
        super(name,color,x,y, radius)
        this.sAngle = 0;
        this.eAngle = 1;
    }
}

let a = new Shape("object1","blue",10,10);
let b = new Rectange("myRectangle", "red", 50,50, 500, 500)
let c = new Square("Squares","yellow",100,100, 200)
let d = new Circle("owo", "green", 15,15,20)
let e = new SemiCircle("awesome", "brown", 25,25,20)