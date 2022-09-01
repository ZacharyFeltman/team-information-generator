const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

var managerResponse = [];
var engineerResponses = [];
var internResponses = [];

main();

async function main() {
    // Get manager info
    managerResponse = await inquirer.prompt(Manager.questions);
    addEmployees();
}

async function addEmployees() {
    let addingEmployees = true;
    // Add employees
    while(addingEmployees) {
        var action_response = await inquirer.prompt([{
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["Add an engineer", "Add an intern", "I'm finished"],
        }])
    
        switch(action_response.action) {
            // Add an engineer
            case "Add an engineer":
                let engineerResponse = await inquirer.prompt(Engineer.questions);
                engineerResponses.push(engineerResponse);
                break;

            // Add an intern
            case "Add an intern":
                let internResponse = await inquirer.prompt(Intern.questions);
                internResponses.push(internResponse);
                break;

            // User is finished
            case "I'm finished":
                addingEmployees = false;
                break;
        }
    }
}

// Build the page