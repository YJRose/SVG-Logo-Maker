//include packages needed for this application
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const svg = require('./lib/svg');
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

function setlogoshape(logoshape){
    this.logoshape = logoshape;
    if (logoshape === "circle") {
        return shapes.Circle;
      } else if (logoshape === "triangle") {
        return shapes.Triangle;
      } else {
        return shapes.Square;
      }
};

function init() {

    inquirer.prompt(questions).then((logoshape, textcolor) => {
        setlogoshape(logoshape);
        writeToFile(svg({logoshape, textcolor}));
    
    })
};

// Function call to initialize app
init();