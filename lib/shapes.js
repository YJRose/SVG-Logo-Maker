//declear shapes class
class Shapes {
  constructor(shapecolor){
  
    this.shapecolor = shapecolor;
  
  }

  setColor(shapecolor){
    this.shapecolor = shapecolor;
  }
  render(){
    return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`)
  };

} 

//inhereit class shapes to triangle
class Triangle extends Shapes {

}
//inhereit class shapes to circle
class Circle extends Shapes {
  render(){
    return (`<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />`)
  }

}
//inhereit class shapes to square
class Square extends Shapes{
  render(){
    return (`<rect width="100%" height="100%" fill="${this.shapecolor}" />`)
  }
}


module.exports = {Triangle, Circle, Square};