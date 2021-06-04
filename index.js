const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers email?',
    },
    {
        type: 'input',
        name: 'Office number',
        message: 'What is the offices telephone number?',
    },
]);