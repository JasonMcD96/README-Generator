const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Todo

// array of questions for user
const questions = [
    ['input', 'What is the title of your project?', 'title'],
    ['input', 'Please enter a description of your project.', 'description'],
    ['input', 'How must a user install any dependecies needed?', 'install'],
    ['input', 'How does the program need to be run?', 'run'],
    ['list', 'Please choose a license for your project.','license'],
    ['input', 'What are the guidelines for contribution?', 'guide'],
    ['input', 'How can you go about testing the application?', 'test'],
    ['input', 'What is your Github username?', 'github'],
    ['input', 'What is your primary email address?', 'email'],
    
];

// function to write README file
function writeToFile(fileName, data) {
    console.log('** Writing File')
    fs.writeFile(fileName, data, (err) => 
    err ? console.log('ERROR writing file') : console.log('-- Done --'))
}

// function to initialize program
function init() {
    inquirer.prompt([
        { type: questions[0][0], message: questions[0][1], name: questions[0][2] }, //title
        { type: questions[1][0], message: questions[1][1], name: questions[1][2] }, //description
        { type: questions[2][0], message: questions[2][1], name: questions[2][2] }, //installation
        { type: questions[3][0], message: questions[3][1], name: questions[3][2] }, //run
        { type: questions[4][0], message: questions[4][1], name: questions[4][2], choices: ['MIT', 'APACHE', 'GPL']}, // license
        { type: questions[5][0], message: questions[5][1], name: questions[5][2] }, // guidelines
        { type: questions[6][0], message: questions[6][1], name: questions[6][2] }, // test
        { type: questions[7][0], message: questions[7][1], name: questions[7][2] }, // github
        { type: questions[8][0], message: questions[8][1], name: questions[8][2] }, // email
        

    ]).then((response) => {
        let userData = generateLicense(response)
        let mdText = generateMarkdown(response)
        writeToFile('./output.md', mdText);
    });

}

const generateLicense = (obj) => {
    if(obj.license == 'MIT'){
        obj.licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        obj.licenseURL = '<https://opensource.org/licenses/MIT>'
        return obj

    } else if(obj.license == 'APACHE'){
        obj.licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
        obj.licenseURL = '<https://opensource.org/licenses/Apache-2.0>'
        return obj

    }else if (obj.license == 'GPL'){
        obj.licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        obj.licenseURL = '<https://www.gnu.org/licenses/gpl-3.0>'
        return obj
    }
}

// function call to initialize program
init();
