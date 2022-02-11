const { getDiffieHellman } = require("crypto");
const { getNamespaceURI } = require("parse5/lib/tree-adapters/default");

class Employee 
{
  constructor(name = '')
  {
    this.name = name;
    this.id = id;
    this.email = email;
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
  };
}


module.exports = Employee;