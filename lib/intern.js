const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, email, id, school) {
    super(name, email, id);
    this.school = school;
    }
}

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "What is your position at the company?",
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
            name: "school",
            message: "what school did you attend?",
        }
    ])
}