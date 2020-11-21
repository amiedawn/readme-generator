'use strict'

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required) ',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a project title! ');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project: (Required) ',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a project description! ');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'What are the steps required to install your project? '
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Please provide instructions and examples for use. Include screenshots as needed. '
    },
    {
      type: 'input',
      name: 'contributionGuidelines',
      message: 'Please add guidelines for how to contribute to your project: '
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter any tests for your application, if you have any: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your application? (Required) ',
      choices: [
        'MIT',
        'Zlib',
        'ISC'],
      validate: licenseList => {
        if (licenseList) {
          return true;
        } else {
          console.log('Please enter a choice for a license! ');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'gitHubUsername',
      message: 'What is your GitHub username? (Required) ',
      validate: gitHubUsernameInput => {
        if (gitHubUsernameInput) {
          return true;
        } else {
          console.log('Please enter a GitHub username! ');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required) ',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter an email address! ');
          return false;
        }
      }
    }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log('README file created!')
  })
};

function init() {
  inquirer.prompt(questions)
    .then (answers => {
    const generateData = generateMarkdown(answers);
    writeToFile('./dist/README.md', generateData);
    })
}
// function call to initialize program
init();

