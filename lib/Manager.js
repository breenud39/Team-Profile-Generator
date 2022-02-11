const { toThrowErrorMatchingSnapshot } = require("jest-snapshot");

class Manager {}

function Manager(name = '')
{
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
}

getName()
{
  return `${this.name}`;
};
getId()
{
};
getEmail()
{
};
getRole()
{
}; //Override to get Intern

module.exports = Manager;