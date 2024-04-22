// TODO: Include packages needed for this application
const inquirer = require('inquirer');    
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Your README.md file has been generated')
    );
}


// TODO: Create a function to initialize app

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contributing guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter the test instructions:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
    ])
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}


// Function call to initialize app
init();