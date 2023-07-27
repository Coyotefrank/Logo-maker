// create triangle , square , and circle classes
 class Shapes {
   constructor(fillColor, textColor , text, shape){
    this.fillColor = fillColor
    this.textColor = textColor
    this.text = text
    this.shape = shape
   }
   render() {
    return ``
   }
 }

class Triangle extends Shapes {
  constructor(fillColor , textColor , text , shape){
    super(fillColor , textColor, text, shape)
  }
  render(){
   return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" /><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`
  }
}

class Square extends Shapes {
  constructor(fillColor , textColor , text , shape){
    super(fillColor , textColor, text, shape)
  }
    render(){
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="75" width="100" height="100" stroke="${this.fillColor}" fill="${this.fillColor}" stroke-width="5"/><text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`
    }
  }
  
class Circle extends Shapes {
  constructor(fillColor , textColor , text , shape){
    super(fillColor , textColor, text, shape)
  }
    render(){
     return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.fillColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`
    }
  }
  module.exports = {Triangle, Square, Circle}















//export triangle , circle , and square classes