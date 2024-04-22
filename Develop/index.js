// TODO: Include packages needed for this application
const inquirer = require('inquirer');    
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        } 
        console.log('README file has been created!');
    });
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const generateMarkdown = require('./utils/generateMarkdown');
        writeToFile('README.md', generateMarkdown(data));
    });
}


// Function call to initialize app
init();