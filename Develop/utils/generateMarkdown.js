// function to generate markdown for README
function generateMarkdown(data) {
  return `# # ${data.title} 

  ## Description
  ${data.description}
  
  ## License
  ### This program is protected under the ${license} license
  
  ## Installation
  You can install dependent packages by running:
  \`\`\`
  ${install}
  \`\`\`
  ## Running the program
  To run the program, use the command:
  \`\`\`
  ${run}
  \`\`\`
  
  ## Contribution Guidelines
  ${guide}
  
  ## Testing Process
  ${test}
  
  ## Questions
  

`;
}

module.exports = generateMarkdown;
