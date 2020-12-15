// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  # Table of Contents
  1. [Description](#description)
  2. [License](#license)
  3. [Installation](#installation)
  4. [Running the Program](#running-the-program)
  5. [Contribution Guidelines](#contribution-guidelines)
  6. [Testing Process](#testing-process)
  7. [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## License
  ${data.licenseBadge}

  ### This program is protected under the ${data.license} license
  ${data.licenseURL}
  
  ## Installation
  You can install dependent packages by running:
  \`\`\`
  ${data.install}
  \`\`\`
  ## Running the Program
  To run the program, use the command:
  \`\`\`
  ${data.run}
  \`\`\`
  
  ## Contribution Guidelines
  ${data.guide}
  
  ## Testing Process
  ${data.test}
  
  ## Questions
  Link to my Github: <https://github.com/${data.github}> 
  
  If you have any questions for me, please contact me at ${data.email}
  

`;
}

module.exports = generateMarkdown;
