class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`ID: ${this.id}`);
  }
}

module.exports = Employee