const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            choices: "What is you position at the company"
        },
        {
            type: "input",
            name:"email",
            message: "what is your email address?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "office_number",
            message: "what is your office number?",
        }
    ])
}