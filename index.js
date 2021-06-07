const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

function initApp() {
    topHTML();
    addMember();
    
}

function addMember() {
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
    } else { 
        roleInput = "School";
    };
    inquirer.prompt([{
        message: `Enter employees ${roleInput}`,
        name: 'roleInput'
    },
    {
        type: 'list',
        message: 'Do you want to add more team members?',
        choices: ['yes', 'no'],
        name: 'moreMembers'
    }])

.then(function({roleInput, moreMembers}) {
    let newMember;
    if (role === 'Manager') {
        newMember = new Manager(name, ID, email, roleInput);
    } else if (role === 'Engineer') {
        newMember = new Engineer(name, ID, email, roleInput);
    } else {
        newMember = new Intern(name, ID, email, roleInput);
    }
    employees.push(newMember);
    addHTML(newMember)
    .then(function() {
        if (moreMembers === 'yes') {
            addMember();
        } else {
            bottomHTML();
        }
        });
    });
});
}
    function topHTML() {
        const html = ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <title>Team Profile</title>
            <style>
                                            .row {
                                                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .card {
                                                padding: 15px;
                border-radius: 6px;
                background-color: white;
                color: white;
                margin: 15px;
            }
            .text {
                                                padding: 15px;
                border-radius: 6px;
                background-color: yellow;
                color: black;
                margin: 15px;
            }
            .col {
                                                flex: 1;
                text-align: center;
            }
        </style>
        </head>
        <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Members</span>
    </nav>
    <div class="container">
        <div class="row">`;
        fs.writeFile('./final.html', html, function(err) {
            if (err) {
                console.log(err);
            }
        });
        console.log('top');
    }

    function addHTML(member) {
        return new Promise(function(res, rej) {
            const name = member.getName();
            const role = member.getRole();
            const ID = member.getID();
            const email = member.getEmail();
            let data = "";
            if (role === 'Manager') {
                const officeNumber = member.getOfficeNumber();
                data = 
                `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${name}</h4>
                </div>
                <div class="col card-header">
                    <h5>Manager</h5>
                </div>
                <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${ID}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
                </ul>
                </div>
                </div>`;
            
            } else if (role === 'Engineer') {
                const gitHub = member.getGitHub();
                data = `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${name}</h4>
                </div>
                <div class="col card-header">
                    <h5>Engineer</h5>
                </div>
                <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${ID}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Github: ${gitHub}</li>
                </ul>
                </div>
                </div>`;

            } else {
                const school = member.getSchool();
                data = `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${name}</h4>
                </div>
                <div class="col card-header">
                    <h5>Intern</h5>
                </div>
                <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${ID}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
                </ul>
                </div>
                </div>`;
            }
            fs.appendFile('./final.html', data, function (err) {
                if (err) {
                    return rej(err);
                };
                return res();
            });
        });
    }

    function bottomHTML() {
        const html = `
        </div>
        </div>
        </body>
        </html>`;

        fs.appendFile('./final.html', html, function (err) {
            if (err) {
                console.log(err);
            };
        });
        console.log('bottom');
    }
    initApp();