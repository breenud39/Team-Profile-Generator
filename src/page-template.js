const generatePage = () => {
  console.log(generatePage);

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
  </body>
  </html>
  `;
};

const generateManager = () =>
{
  return `
  <section>
  <h2>{manager.getName()}</h2>
  <h2>${manager.getRole()}</h2>
  <section>
    <ul>
      <li>ID: ${manager.getId()}</li>
      <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li>Office number: ${manager.getOfficeNumber()}</li>
    </ul>
  </section>
</section>
`;
}

const generateIntern = () =>
{}

const generateEngineer = () =>
{}