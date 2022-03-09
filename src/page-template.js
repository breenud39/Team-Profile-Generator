const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const generatePage = (teamGen) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header class ="bg-danger height">
      <h1 class="text-light text-location">My Team</h1>
    </header>

    <section class="d-flex justify-content-between m-5">
    ${teamGen}
    </section>    
  </body>
  </html>
  `;
};

const generateManager = (obj) =>
{
  return `
  <section class="shadow card" style="width: 18rem;">
  <div class = "card-body">
    <div class="card-title">
      <h2 class="text-light">${obj.getName()}</h2>
      <h2 class="text-light">${obj.getRole()}</h2>
    </div>
    <ul class="list-inline mx-auto justify-content-center m-3">
      <li class="border p-2 bg-white rounded">ID: ${obj.getId()}</li>
      <li class="border p-2 bg-white rounded">Email: <a href="mailto${obj.getEmail()}:">${obj.getEmail()}</a></li>
      <li class="border p-2 bg-white rounded">Office number: ${obj.officeNumber}</li>
    </ul>
  </div>
</section>
`;
};

const generateEngineer = (obj) =>
{
  return `
  <section class="shadow card" style="width: 18rem;">
  <div class = "card-body">
    <div class="card-title">
      <h2 class="text-light">${obj.getName()}</h2>
      <h2 class="text-light">${obj.getRole()}</h2>
    </div>
    <ul class="list-inline mx-auto justify-content-center m-3">
      <li class="border p-2 bg-white rounded">ID: ${obj.getId()}</li>
      <li class="border p-2 bg-white rounded">Email: <a href="mailto${obj.getEmail()}:">${obj.getEmail()}</a></li>
      <li class="border p-2 bg-white rounded">Github: <a href="http://github.com/${obj.getGithub()}" target="_blank" rel="noopener noreferrer">${obj.getGithub()}</a></li>
    </ul>
  </div>
</section>
`;
};


const generateIntern = (obj) =>
{
  return `
  <section class="shadow card" style="width: 18rem;">
  <div class = "card-body">
    <div class="card-title">
      <h2 class="text-light">${obj.getName()}</h2>
      <h2 class="text-light">${obj.getRole()}</h2>
    </div>
    <ul class="list-inline mx-auto justify-content-center m-3">
      <li class="border p-2 bg-white rounded">ID: ${obj.getId()}</li>
      <li class="border p-2 bg-white rounded">Email: <a href="mailto${obj.getEmail()}:">${obj.getEmail()}</a></li>
      <li class="border p-2 bg-white rounded">School: ${obj.getSchool()}</li>
    </ul>
  </div>
</section>
`;
};

module.exports = {
  generatePage,
  generateManager,
  generateEngineer,
  generateIntern
};