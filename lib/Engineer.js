const Employee = require("./Employee");

class Engineer {}

class Engineer extends Employee
{
  constructor(name = '')
  {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.github = github;
  }
  
  getGithub()
  {
  };
  getRole()
  {
  }; // Override to return Engineer
}


module.exports = Engineer;