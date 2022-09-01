const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

describe("Test employee types: Manager, Engineer & Intern...", () => {
    it("Testing the Manager...", () => {
        const manager = new Manager("Zach", "zach@email.com", "12345", "4");
        expect(manager.getRole()).toBe("Manager");
        expect(manager.getName()).toBe("Zach");
        expect(manager.getEmail()).toBe("zach@email.com");
        expect(manager.getId()).toBe("12345");
        expect(manager.getOfficeNumber()).toBe("4");
    });
});