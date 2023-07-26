// create triangle , square , and circle classes
 class Shapes {
   constructor(fillColor, textColor , text, shape){
    this.fillColor = fillColor
    this.textColor = textColor
    this.text = text
    this.shape = shape
   }
   setColor() {

   }
 }

class Triangle extends Shapes {
  render(){
   return ``
  }
}

class Square extends Shapes {
    render(){
    return ``
    }
  }
  
class Circle extends Shapes {
    render(){
     return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.fillColor}/>`
    }
  }















//export triangle , circle , and square classes