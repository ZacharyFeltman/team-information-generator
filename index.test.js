const internal = require("stream");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

describe("Test employee types: Manager, Engineer & Intern...", () => {
    // Test the Manager Class
    it("Testing the Manager...", () => {
        const manager = new Manager("Zach", "zach@email.com", "12345", "4");
        expect(manager.getRole()).toBe("Manager");
        expect(manager.getName()).toBe("Zach");
        expect(manager.getEmail()).toBe("zach@email.com");
        expect(manager.getId()).toBe("12345");
        expect(manager.getOfficeNumber()).toBe("4");
    });
    
    // Test the Engineer class
    it("Testing the Engineer...", () => {
        const engineer = new Engineer("Zach", "zach@email.com", "12345", "ZachFeltman");
        expect(engineer.getRole()).toBe("Engineer");
        expect(engineer.getName()).toBe("Zach");
        expect(engineer.getEmail()).toBe("zach@email.com");
        expect(engineer.getId()).toBe("12345");
        expect(engineer.getGithub()).toBe("ZachFeltman");
    });

    // Test the Intern Class
    it("Testing the Intern...", () => {
        const intern = new Intern("Zach", "zach@email.com", "12345", "4");
        expect(intern.getRole()).toBe("Intern");
        expect(intern.getName()).toBe("Zach");
        expect(intern.getEmail()).toBe("zach@email.com");
        expect(intern.getId()).toBe("12345");
        expect(intern.getSchool()).toBe("4");
    });
});