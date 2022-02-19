const Intern = require('../lib/Intern');
const choices = {name:'Bob', id:'101', email:'bobsemail', school:'UofT'};

test('We are testing if intern is created', () => {
  const intern = new Intern(choices.name,choices.id,choices.email,choices.school)
  expect(intern.getName()).toBe(choices.name);
  expect(intern.getId()).toBe(choices.id);
  expect(intern.getEmail()).toBe(choices.email);
  expect(intern.getSchool()).toBe(choices.school);
  expect(true).toBe(true);
});