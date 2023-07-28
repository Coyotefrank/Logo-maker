const {Square, Triangle, Circle} = require(`../lib/shapes`);

describe("Square", () => {
  it("should be a square", () => {
    const newSquare = new Square ()
    expect(newSquare.render ()).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="75" width="100" height="100" stroke="${this.fillColor}" fill="${this.fillColor}" stroke-width="5"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`)
  })
});

describe("Triangle", () => {
  it("should be a triangle", () =>{
    const newTriangle = new Triangle ()
    expect(newTriangle.render ()).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" /><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`)
  })
});

describe("Circle", () =>{
  it("should be a square", () =>{
    const newCircle = new Circle ()
    expect(newCircle.render ()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.fillColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`)
  })
})
//need to have bare minimum 3 test 
//import the required files -shapes.js 
//test suite, contains multiple test
  //one for triangle one fr circle and one for square
  //const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');