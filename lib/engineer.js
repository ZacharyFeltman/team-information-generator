const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, email, id, github) {
        super(name, email, id);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

    static questions = [
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name:"email",
            message: "what is your email address?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee ID?",
        },
        {
            type: "input",
            name: "username",
            message: "what is your gitHub username?",
        }
    ]
}

module.exports = Engineer;