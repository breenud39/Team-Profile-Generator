const Engineer = require('../lib/Engineer');
const choices = {name:'Bob', id:'101', email:'bobsemail', github:'bobby'};

test('We are testing if engineer is created', () => {
  const engineer = new Engineer(choices.name,choices.id,choices.email,choices.github)
  expect(engineer.getName()).toBe(choices.name);
  expect(engineer.getId()).toBe(choices.id);
  expect(engineer.getEmail()).toBe(choices.email);
  expect(engineer.getGithub()).toBe(choices.github);
  expect(engineer.getRole()).toBe("Engineer");
  expect(true).toBe(true);
});