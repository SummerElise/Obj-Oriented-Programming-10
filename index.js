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
        message: 'What is the Employee name?',
    },
    {
        type: 'list',
        message: 'Choose a role',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is the employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?',
    }])

    .then(function({name, role, ID, email}) {
    let roleInput = "";
    if(role === "Manager") {
        roleInput = "Office number";
    } else if (role === "Engineer") {
        roleInput = "Github";
    } else (role === "Intern") {
        roleInput = "School";
    }
    inquirer.prompt([{
        message: `Enter employees ${roleInput}`,
        name: 'roleInput'
    },
    {
        type: 'list',
        message: 'Do you want to add more team members?',
        choices: ['yes', 'no'],
        name: 'addMembers'
    }])

.then(function({roleInput, addMembers}) {
    let newMember;
    if (role === 'Manager') {
        newMember = new Manager(name, ID, email, roleInput);
    } else if (role === 'Engineer') {
        newMember = new Engineer(name, ID, email, roleInput);
    } else {
        newMember = new Intern(name, ID, email, roleInput);
    }
    employees.push(newMember);
    addHTML
    