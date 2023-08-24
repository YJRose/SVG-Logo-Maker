//include packages needed for this application
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
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

function init() {

    inquirer.prompt(questions).then((answer) => {
        
        writeToFile(shapes({ ...answer}));
    });
};

// Function call to initialize app
init();