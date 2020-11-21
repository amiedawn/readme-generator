'use strict'

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


 <![License: ${data.license}>(https://img.shields.io/badge/License-${data.license})]<https://opensource.org/licenses/${data.license}>
  
 


# Table of Contents:
* [Description](#description)
* [Installation](#installationInstructions)
* [Usage](#usageInformation)
* [License](#license)
* [Contributing](#contributionGuidelines)
* [Tests](#tests)

## Description:

${data.description}

## Installation Instructions:

${data.installationInstructions}

## Usage (Instructions, Examples, and/or Screenshots):

${data.usageInformation}

## License:

${data.license}

For details on this license, please follow: <https://opensource.org/licenses/${data.license}>

## Contribution Guidelines:

${data.contributionGuidelines}

## Tests (Optional):

${data.tests}

## Questions:

Please feel free to contact the author of this project at the following:

GitHub: <https://github.com/${data.gitHubUsername}>

Email:  <${data.email}>
`;
}

module.exports = generateMarkdown;
