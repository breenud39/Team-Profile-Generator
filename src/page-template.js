const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const generatePage = (obj) => {
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
    <header class ="bg-danger height"><h1 class="text-light text-center">My Team</h1></header>
    ${generateManager(obj)} ${generateEngineer(obj)}
  </body>
  </html>
  `;
};

const generateManager = (obj) =>
{
  return `
  <section>
  <h2>${obj.getName()}</h2>
  <h2>${obj.getRole()}</h2>
  <section>
    <ul>
      <li>ID: ${obj.getId()}</li>
      <li>Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
      <li>Office number: ${obj.officeNumber}</li>
    </ul>
  </section>
</section>
`;
}

const generateEngineer = (obj) =>
{
  return `
  <section>
  <h2>${obj.getName()}</h2>
  <h2>${obj.getRole()}</h2>
  <section>
    <ul>
      <li>ID: ${obj.getId()}</li>
      <li>Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
      <li>Github: ${obj.getGithub()}</li>
    </ul>
  </section>
</section>
`;
}

// const generateIntern = (obj) =>
// {
//   return `
//   <section>
//   <h2>${obj.getName()}</h2>
//   <h2>${obj.getRole()}</h2>
//   <section>
//     <ul>
//       <li>ID: ${obj.getId()}</li>
//       <li>Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
//       <li>Office number: ${obj.getSchool()}</li>
//     </ul>
//   </section>
// </section>
// `;
// }

module.exports = {
  generatePage,
  generateManager,
  generateEngineer,
  // generateIntern
}