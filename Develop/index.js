const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Todo
// Table of contents in MD
// links in table of contents
// enter github
// enter email
// Questions section. Link to github. Email 'If you have questions, email me at....'

// array of questions for user
const questions = [
    ['input', 'What is the title of your project?', 'title'],
    ['input', 'Please enter a description of your project.', 'description'],
    ['input', 'How must a user install any dependecies needed?', 'install'],
    ['input', 'How does the program need to be run?', 'run'],
    ['list', 'Please choose a license for your project.','license'],
    ['input', 'What are the guidelines for contribution?', 'guide'],
    ['input', 'How can you go about testing the application?', 'test']
];

// function to write README file
function writeToFile(fileName, data) {
    console.log('Time to write the file')
}

// function to initialize program
function init() {
    inquirer.prompt([
        { type: questions[0][0], message: questions[0][1], name: questions[0][2] }, //title
        { type: questions[1][0], message: questions[1][1], name: questions[1][2] }, //description
        { type: questions[2][0], message: questions[2][1], name: questions[2][2] }, //installation
        { type: questions[3][0], message: questions[3][1], name: questions[3][2] }, //run
        { type: questions[4][0], message: questions[4][1], name: questions[4][2], choices: ['hello', 'world']}, // license
        { type: questions[5][0], message: questions[5][1], name: questions[5][2] }, // guidelines
        { type: questions[6][0], message: questions[6][1], name: questions[6][2] }, // test

    ]).then((response) => {
        let mdText = generateMarkdown(response)
        writeToFile('./output/README.txt', mdText);
    });

}

// function call to initialize program
init();
