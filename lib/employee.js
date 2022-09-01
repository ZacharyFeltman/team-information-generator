class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  
  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`ID: ${this.id}`);
  }
}

module.exports = Employee