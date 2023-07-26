const {Triangle, Circle, Square} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([{

    type:"list",
    message:"pick the fallowing shape color",
    choices:["green" , "blue" , "red"],
    name:"shapeColor"
},
{
  type:"list",
  message:"pick a text color",
  choices:["orange", "purple", "pink"],
  name:"textColor"


},
{
 type:"list",
 message:"pick a shape",
 choices:["triangle", "square", "circle"],
 name:"shapes"


},
{
  type:"input",
  message:"what text would you like?",
  name:"textInput"


}
]) 
.then(data =>{
    if(data.shapes==="triangle"){
        const triangle = new Triangle(data.shapeColor,data.textColor,data.textInput,data.shapes)
        fs.writeFileSync("./examples/triangle.svg",triangle.render())     
    } else if(data.shapes ==="square"){
        const square = new Square(data.shapeColor,data.textColor,data.textInput,data.shapes)
        fs.writeFileSync("./examples/square.svg",square.render())
    } else {
        const circle = new Circle(data.shapeColor,data.textColor,data.textInput,data.shapes)
        fs.writeFileSync("./examples/circle.svg",circle.render())
    }

})
