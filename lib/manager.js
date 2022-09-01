const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNUmber = officeNumber;
    }
}


function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
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
            name: "office_number",
            message: "what is your office number?",
        }
    ])
}








  
  module.exports = Shape;