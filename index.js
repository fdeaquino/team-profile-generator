const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
// const generateHTML = require('FILE PATH')//TODO: COME BACK TO FILE PATH
const team = [];
//TODO: add validation to all prompts 
const managerPrompt = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter your name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your employee number'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address'
            },
            {
                type: 'input',
                name: 'officeNumb',
                message: 'Please enter your office number'
            }
        ])
        .then((managerAnswers) => {
            //push data into an array and ask user if they want to add another employee
            // intern, or finish building team (exit)
            console.log(managerAnswers);
            const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumb);
            team.push(manager)
        })
        .then(() => firstRealPrompt())
};

const firstRealPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'branchToAddOrFinish',
                message: 'Would you like to add a new employee (Engineer / Intern) or finish building your team?',
                choices: ['Add a new Engineer', 'Add a new Intern', 'Finish building my team']

            }
        ])
        .then((userChoice) => {

            // IF answer is Engineer then run engineer prompts
            // Else if answer is Intern then run intern prompts
            // Else if answer is Finish building team then run the exit function to exit program

        })
};

const engineerPrompt = () => {
    console.log(`
    ==================================
        These questions pertain to
                the Engineer
    ==================================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the Engineer's name"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Please enter the Engineer's id number"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter the Engineer's email address"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the Engineer's GitHub username"
        }
    ])
        .then
};

const internPrompt = () => {
    console.log(`
    ==================================
        These questions pertain to
                the Intern
    ==================================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the Engineer's name"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please enter the Engineer's id number"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter the Engineer's email address"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter the name of the Intern's school"
        }
    ])
        .then//push data into an array and ask user if they want to add another employee
    // intern, or finish building team (exit)
}

// TODO: function to write HTML file from js file designated just for that (like the readme generator)
function init() {
    console.log(`
    =====================================
    Welcome to the Team Profile Generator
    
    The following propmts pertain to the
                  Manager
    =====================================
    `);
    managerPrompt()
}

//TODO: call back the initial prompts function
init()