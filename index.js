

const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

const userInput = [
  {
    type: 'input',
    message: 'What three letters do you want for your logo?',
    name: 'letters'
  },
  {
    type: 'input',
    message: 'What would you like the text color(keywords) to be?',
    name: 'textColor'
  },
  {
    type: 'list',
    message: 'What would you like the shape to be?',
    choices: [{name: 'triangle', value: ['triangle','polygon']}, {name: 'square', value: ['square', 'polygon']}, {name: 'circle', value: ['circle', 'circle']}],
    name: 'shape'
  },
  {
    type: 'input',
    message: 'What would you like the shape color to be?',
    name: 'shapeColor'
  }
]

function init() {
  inquirer.prompt(userInput)
    .then(responses => {
      const shapeChoice = responses.shape.value[0];
      const colorChoice = responses.shapeColor;
      const shapeInput = responses.shape.value[1];

      if(shapeChoice === 'triangle'){
        var shape = new Triangle(shapeInput, colorChoice)
      }else if(shapeChoice === 'square'){
        var shape = new Square(shapeInput, colorChoice)
      }else {
        var shape = new Circle(shapeInput, colorChoice)
      }

      const text =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shape}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.letters}</text>

</svg>`

      fs.writeFile('logo.svg', text, (error) => {
        if(error){
         console.log('Something failed here');
        }
      })
    })
}

init();