// packages
const fs = require('fs');
'use strict';
const inquirer = require('inquirer');
const chalkPipe = require('chalk-pipe');

// All the prompts
var questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the title going to be?",
  },
  {
    type: 'input',
    name: 'purpose',
    message: "What's the purpose of the project?",
    },
  {
    type: 'input',
    name: 'install',
    message: "How does someone install this? (full explaination)",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "How do people contribute to your work? (full explanation)",
  },
  {
    type: 'input',
    name: 'tests',
    message: "How should they run tests on your work?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "How do you use this program?",
  },
  {
    type: 'list',
    name: 'licensing',
    message: "What license will be used for this program?",
    choices: [
      'copyright',
      'trademark',
      'Patent Pending',
    ]
  },
  {
    type: 'input',
    name: 'githubuser',
    message: "What is your github username?",
  },
  {
  type: 'input',
  name: 'email',
  message: "What is the email you would like to be contacted at?",
  },
];

inquirer.prompt(questions).then((answers) => {






// Compilation of default variables passed through to fill the rest of the text
  var descriptionDefault = "# Description" + `\n`;
  var tableOfContentsDefault = "# Table of Contents `\n` [Go to Description](#Description) `\n` [Go to Installation](#Table-of-Contents) `\n` [Go to Usage](#Usage) `\n` [Go to License](#License) `\n` [Go to Contributing](#Contributing) `\n` [Go to Tests](#Tests) `\n` [Go to Questions/Contact](#Questions)" + `\n`;
  var installDefault = "# Installation" + `\n`;
  var usageDefault = "# Usage" + `\n`;
  var licenseDefault = "# License" + `\n`;
  var contributingDefault = "# Contributing" + `\n`;
  var testsdefault = "# Tests" + `\n`;
  var questionsDefault = "# Questions" + `\n`;

// The stored responses as variables
  var titleStatement = "# " + answers.title + `\n` + `\n`;
  var purposeStatement = answers.purpose + `\n`;
  var installProcess = "Install by:"  + '\n' + answers.install + `\n`;
  var usage = answers.usage + `\n`;
  var contribute = answers.contributing + `\n`;
  var test = answers.tests + `\n`;
  var licensing = answers.licensing + `\n`;
  var gituser = answers.githubuser + `\n`;
  var email = answers.email;

// compilation of full file and console log to confirm
  var fullFile = titleStatement + descriptionDefault + purposeStatement + `\n` + tableOfContentsDefault + installDefault + installProcess + usageDefault + usage + licenseDefault + licensing + contributingDefault + contribute + "github: " + gituser + testsdefault + test + questionsDefault + "Contact me at my email " + email + " for any inquiries.";
  console.log(fullFile);

// Attaching/changing the file
  fs.appendFile('README.md', fullFile, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
});

// problems to solve
// 1. write out each part of the readme without the added parts into it as part of a string passed in as a variable
// 2. find out the method for append (appendFile I believe), and use it to compile all of these parts into one new readme file


// // appendFile() takes in 3 arguments: path, data, and callback function
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   // Ternary operator takes in a condition followed by a question mark (?)
//   // then an expression to execute if the condition is truthy followed by a colon (:)
//   // and finally the expression to execute if the condition is falsy.
//   // This operator is frequently used as a shortcut for the if statement.
//   err ? console.error(err) : console.log('Commit logged!')
// );


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```