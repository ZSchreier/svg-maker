

class Shape {
  constructor(shape, shapeColor){
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Square extends Shape {
  constructor(shape, shapeColor){
    super(shape, shapeColor)
  }

  render(){
    return `<${this.shape} points="0 0, 0 300, 200 300, 200 0" fill="${this.shapeColor}" />`
  }
}

class Triangle extends Shape {
  constructor(shape, shapeColor){
    super(shape, shapeColor)
  }

  render(){
    return `<${this.shape} points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
  }
}

class Circle extends Shape {
  constructor(shape, shapeColor){
    super(shape, shapeColor)
  }

  render(){
    return `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
  }
}

module.exports(Shape, Square, Triangle, Circle)