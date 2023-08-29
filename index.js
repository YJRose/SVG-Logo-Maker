//include packages needed for this application
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const SVG = require('./lib/SVG');
const fs = require('fs');

//user input with text color, shap(list) and shape's color
const questions = [
    {
        type: 'input',
        message: 'What is color do you want for text?',
        name: 'textcolor',  
    },
    {
        type: 'list',
        message: 'What is the logo shape you want?',
        choices:['circle', 'triangle', 'square'],
        name: 'logoshape',
    },
    {   
        type: 'input',
        message: 'What is shape color you want?',
        name: 'shapecolor',
    }
];
//Write file for SVG with a 300x200 pixel image in browser and console log "Generated logo.svg" in CLI
function writeToFile(data){
    return fs.writeFileSync("logo.svg", data);
};

function setlogoshape(data){
    console.log(data);

    if (data.logoshape === "circle") {
        return new shapes.Circle(data.shapecolor);
      } else if (data.logoshape === "triangle") {
        return new shapes.Triangle(data.shapecolor);
      } else {
        return new shapes.Square(data.shapecolor);
      }

};

function init() {

    inquirer.prompt(questions).then((data) => {
        console.log(data);
        //call setlogoshape function
        const shape = setlogoshape(data);

        console.log(shape);

        console.log(shape.render());
        //call shape.render function
        const finalshape = shape.render();
        
        const logo = new SVG(finalshape, data.textcolor);

        writeToFile(logo.render());
    });
}



// Function call to initialize app
init();
