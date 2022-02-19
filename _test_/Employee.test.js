const Employee = require('../lib/Employee');
const choices = {name:'Bob', id:'101', email:'bobsemail'};

test('We are testing if employee is created', () => {
  const employee = new Employee(choices.name,choices.id,choices.email)
  expect(employee.getName()).toBe(choices.name);
  expect(employee.getId()).toBe(choices.id);
  expect(employee.getEmail()).toBe(choices.email);
  expect(true).toBe(true);
});