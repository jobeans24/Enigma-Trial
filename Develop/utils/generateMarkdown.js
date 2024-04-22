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

function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me through my GitHub profile or email address below.
* GitHub: ${data.github}
* Email: ${data.email}
`;
}



// If there is no license, return an empty string


module.exports = generateMarkdown;
// Prompt the user for information

