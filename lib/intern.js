const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, email, id, school) {
        super(name, email, id);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
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
            message: "What is your employee ID?"
        },
        {
            type: "input",
            name: "school",
            message: "what school did you attend?",
        }
    ]
}

module.exports = Intern;