class Polygon {
  constructor(sides, length) {
    this.sides = sides
    this.length = length;
  }
}

class Triangle extends Polygon {
	constructor(sidelength) {
		super(4, sidelength)
	}
	get area() {
		return Math.abs(this.length,2)/2;
	}
}

class Square extends Polygon {
  constructor(sideLength) {
    super(4, sideLength);
  }
  get area() {
    return this.length * this.length
  }
}

var square = new Square(2);