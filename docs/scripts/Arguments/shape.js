const canvas = document.getElementById('canvas');
const Context = ctx = canvas.getContext('2d');

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

class Rectangle extends Shape {
    
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

class Square extends Rectangle {
    constructor(name,color,x,y,size) {
        super(name,color,x,y,size,size);
        
    }
}

class Circle extends Shape {
    constructor(name, color, x, y, radius) {
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
    constructor(name, color, x, y, radius) {
        super(name,color,x,y, radius)
        this.sAngle = 0;
        this.eAngle = 1;
    }
    Draw() {
        super.Draw();
    }
}

// re write this object class to get input from settings
const ShapeObjects = {
    square: new Square("square","red", 25, 25, 100, 100),
    rectangle: new Rectangle("rectangle", "blue", 125, 200, 100, 150),
    circle: new Circle("circle","orange", 500, 350, 100, 0, 2),
    semicircle: new SemiCircle("awesome", "brown", 25,25,20)
};
