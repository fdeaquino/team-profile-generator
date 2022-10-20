const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')
const team = [];
//TODO: add validation to all prompts (optional)
const managerPrompt = () => {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the Manager's name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Manager's id"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the Manager's email address"
            },
            {
                type: 'input',
                name: 'officeNumb',
                message: "Please enter the Manager's office number"
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
            if (userChoice.branchToAddOrFinish === "Add a new Engineer") {
                return engineerPrompt();
            } else if (userChoice.branchToAddOrFinish === "Add a new Intern") {
                return internPrompt();
            } else if (userChoice.branchToAddOrFinish === "Finish building my team") {
                console.log(team);
                return team; //TODO: add function to finish building team and run the exit function to exit program -> generateHTML
            
            }
            
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
            name: 'name',
            message: "Please enter the Engineer's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's id number"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email address"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's GitHub username"
        }
    ])
        .then((engineerAnswers) => {
            //push data into an array and ask user if they want to add another employee
            // intern, or finish building team (exit)
            const { name, id, email, github } = engineerAnswers;
            console.log(engineerAnswers);
            const engineer = new Engineer(name, id, email, github);
            team.push(engineer);
        })
        .then(() => firstRealPrompt())
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
            name: 'name',
            message: "Please enter the Intern's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Intern's id number"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Intern's email address"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the name of the Intern's school"
        }
    ])
    //push data into an array and ask user if they want to add another employee
    // intern, or finish building team (exit)
    .then((internAnswers) => {
        //push data into an array and ask user if they want to add another employee
        // intern, or finish building team (exit)
        const { name, id, email, school } = internAnswers;
        console.log(internAnswers);
        const intern = new Intern(name, id, email, school);
        team.push(intern);
    })
    .then(() => firstRealPrompt())
}

// TODO: exit function start here -- move fucntion to after Intern prompts
const writeToHTML = data => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(`./dist/index.html`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "Team file created! Open index.html to view your team."
            })
        })
    })
    .then(team => {
        return generateHTML(team);
    })
    .then(responseData => {
        console.log("You have successfully created your team! Open index.html to view your team.")
        return writeToHTML(responseData);
    });
}

// exit function end here




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
init();