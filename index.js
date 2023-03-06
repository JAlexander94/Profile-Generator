const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array of first questions for user
const firstquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team managers employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team managers email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team managers office number?',
    },
    {
        type: 'list',
        message: 'Please select an option:',
        name: 'menu',
        choices: ['Add an engineer', 'Add an intern', 'Finish Building the team'],
    }
];

// array engineer questions for user
const engineerquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers GitHub username?',
    },
    {
        type: 'list',
        message: 'Please select an option:',
        name: 'menu',
        choices: ['Add an engineer', 'Add an intern', 'Finish Building the team'],
    }
];

// array intern questions for user
const internquestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is the intern attending?',
    },
    {
        type: 'list',
        message: 'Please select an option:',
        name: 'menu',
        choices: ['Add an engineer', 'Add an intern', 'Finish Building the team'],
    }
];

function init(){
    inquirer.prompt(firstquestions)
    .then((data)=>{
        const manager = new Manager(data.name, data.id,data.email,data.officeNumber)
        const team = [manager]
        let menu = data.menu;
        function askQuestions() {
            if (menu==='Finish Building the team'){            
                console.log(team);
                const html = render(team);
                fs.writeFileSync(outputPath, html);
                return;
            } else if (menu==='Add an engineer'){
                inquirer.prompt(engineerquestions)
                .then((data)=>{
                    const engineer = new Engineer(data.name, data.id,data.email,data.github)
                    team.push(engineer);
                    menu = data.menu;
                    askQuestions();
                })
            } else {
                inquirer.prompt(internquestions)
                .then((data)=>{
                    const intern = new Intern(data.name, data.id,data.email,data.school)
                    team.push(intern);
                    menu = data.menu;
                    askQuestions();
                })
            }
        }
        askQuestions();
    })
}


init()