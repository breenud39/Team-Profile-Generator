const Manager = require('../lib/Manager');
const choices = {name:'Bob', id:'101', email:'bobsemail', officeNumber:'10'};

test('We are testing if manager is created', () => {
  const manager = new Manager(choices.name,choices.id,choices.email,choices.officeNumber)
  expect(manager.getName()).toBe(choices.name);
  expect(manager.getId()).toBe(choices.id);
  expect(manager.getEmail()).toBe(choices.email);
  expect(manager.officeNumber).toBe(choices.officeNumber);
  expect(manager.getRole()).toBe("Manager");
  expect(true).toBe(true);
});