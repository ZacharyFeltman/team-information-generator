const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
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
            name: "office_number",
            message: "what is your office number?",
        }
    ]
}

module.exports = Manager;