// TODO: Create a function that returns a license badge based on which license is passed in
const inquirer = require('inquirer');
const fs = require('fs');


function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    } else {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
}

// If there is no license, return an empty string


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else {
        return `* [License](#license)`;
    }
}


// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `## License
This project is licensed under the ${license} license.`;
    }
}


// If there is no license, return an empty string

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
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    });



module.exports = generateMarkdown;
// Prompt the user for information

