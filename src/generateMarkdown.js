'use strict'

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


![License](https://img.shields.io/badge/License-${data.license}-green.svg)

# Table of Contents:
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)

## Description: 

${data.description}

## Installation Instructions:

${data.installationInstructions}

## Usage Information:

${data.usageInformation}

## License:

This site is under this license: ${data.license}

For details on this license, please follow: https://opensource.org/licenses/${data.license}

## Contribution Guidelines:

${data.contributionGuidelines}

## Tests:

${data.tests}

## Questions?

Please feel free to contact the author of this project at the following:

GitHub: <https://github.com/${data.gitHubUsername}>

Email:  <${data.email}>
`;
}

module.exports = generateMarkdown;
