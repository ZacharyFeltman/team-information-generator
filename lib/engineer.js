const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, email, id, gitHubName) {
    super(name, email, id);
    this.gitHubName = gitHubName;
    }
}

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineer",
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
            name: "username",
            message: "what is your gitHub username?",
        }
    ])
}