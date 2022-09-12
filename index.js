const fs = require("fs");
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
    await addEmployees();
    writeHtmlFile();
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
                var engineerResponse = await inquirer.prompt(Engineer.questions);
                engineerResponses.push(engineerResponse);
                break;

            // Add an intern
            case "Add an intern":
                var internResponse = await inquirer.prompt(Intern.questions);
                internResponses.push(internResponse);
                break;

            // User is finished
            case "I'm finished":
                addingEmployees = false;
                break;
        }
    }
}

const HTML_HEADER = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/reset.css" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Company team information cards</h1>
    </header>`;
    
function writeHtmlFile() {
    let filename = "myTeam.html";
    
    fs.appendFile(filename, HTML_HEADER, () => {});
    
    // Write my stuff
    writeManagerToFile(filename, managerResponse);
    writeEningeersToFile(filename, engineerResponses);
    writeInternsToFile(filename, internResponses);
    
    fs.appendFile(filename, HTML_FOOTER, () => {});
}

function writeManagerToFile(filename, managerResponse) {
    let manager = new Manager(managerResponse.name, managerResponse.email, managerResponse.id, managerResponse.office_number)
    let managerHtml = `<div class="manager card">
    Role: ${manager.getRole()} </br>
    Name: ${manager.getName()} </br?
    <a href="${manager.getEmail()}">${manager.getEmail()}</a></br>
    ID: ${manager.getId()}</br>
    Office number: ${manager.getOfficeNumber()}
    </div>`;
    fs.appendFile(filename, managerHtml, () => {});
}

function writeEningeersToFile(filename, engineerResponses) {
    console.log("# of engineers: ", engineerResponses.length);
    for(let i = 0; i < engineerResponses.length; i++) {
        let engineerResponse = engineerResponses[i];
        let engineer = new Engineer(engineerResponse.name, engineerResponse.email, engineerResponse.id, engineerResponse.username);
        let engineerHtml = `<div class="engineer card">
        Role: ${engineer.getRole()}</br>
        Name: ${engineer.getName()}</br>
    <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></br>
        ID: ${engineer.getId()}
    <a href="http://www.github.com/${engineer.getGithub()}" target="_blank">GitHub</a>
</div>`;
fs.appendFile(filename, engineerHtml, () => {});
}
}

function writeInternsToFile(filename, internResponses) {
    console.log("# of inters: ", internResponses.length);
    for(let i = 0; i < internResponses.length; i++) {
        let internResponse = internResponses[i];
        let intern = new Intern(internResponse.name, internResponse.email, internResponse.id, internResponse.school);
        let internHtml = `<div class="Intern card">
        Role: ${intern.getRole()}</br>
        Name: ${intern.getName()}</br>
        <a href="${intern.getEmail()}">${intern.getEmail()}</a></br>
        ID: ${intern.getId()}</br>
        School: ${intern.getSchool()}
        </div>`;
        fs.appendFile(filename, internHtml, () => {});
    }
}
const HTML_FOOTER = `</body>
</html>`;