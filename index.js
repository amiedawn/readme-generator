const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
  return inquirer.prompt([
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
      name: ' tests',
      message: 'Please enter any tests for your application, if you have any: ',
    }
  ]);
};

const promptLicense = () => {
  console.log(`
  ====================
  Choose a license
  ====================
  `);
  return inquirer.prompt([
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your application? (Required) ',
      choices: [
        'MIT License',
         'GNU GPLv3',
         'GNU AGPLv3',
         'GNU LGPLv3', 
         'Mozilla Public License 2.0', 
         'Apache License 2.0', 
         'Boost Software License 1.0', 
         'The Unlicense',
         'None'],
      validate: licenseList => {
        if (licenseList) {
          return true;
        } else {
          console.log('Please enter a choice for a license! ');
          return false;
        }
      }
    }
  ]);
};

const promptQuestions = () => {
  console.log(`
  ====================
  Questions
  ====================
  `);
  return inquirer.prompt([
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
  ]);
};

questions()
  .then(answers => console.log(answers))
  .then(promptLicense)
  .then(licenseAnswer => console.log(licenseAnswer))
  .then(promptQuestions)
  .then(questionsAnswers => console.log(questionsAnswers))
  .catch(err => console.log(err));


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

//fs.writeFile('index.html', pageHTML, err => {
//  if (err) throw err;

//  console.log('Portfolio complete! Check out index.html to see the output!');
//});