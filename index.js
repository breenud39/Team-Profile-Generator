const inquirer = require('inquirer');
const fs = require('fs');
const makePage = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamGen = [];

const createNewTeam = () => 
{
  return inquirer.prompt([
    {
      type: 'list',
      name: 'titleJob',
      message: 'What is the job title? (Required)',
      choices: ['Manager', 'Engineer', 'Intern', 'Finished']
    },
  ]).then(choices => {
    if(choices.titleJob === 'Manager'){
      addManager();
    } else if(choices.titleJob === 'Engineer'){
      addEngineer();
    } else if(choices.titleJob === 'Intern'){
      addIntern();
    } else if(choices.titleJob === 'Finished'){
      generateHTML();
    }
  });
};
createNewTeam();

const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Manager name? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Manager name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Manager id? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Manager id number!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Manager email? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Manager email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the Manager office number? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Manager office number!');
          return false;
        }
      }
    },
  ]).then (answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    // console.log(manager.getName());
    // teamGen.push(manager);
    // console.log(answers);
    // makePage.generateManager(manager);
    teamGen.push(makePage.generateManager(manager));
    createNewTeam();
  })
};


const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineer name? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Engineer name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineer id? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Engineer id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineer email? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Engineer email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the Engineer github? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Engineer github!');
          return false;
        }
      }
    },
  ]).then (answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamGen.push(makePage.generateEngineer(engineer));
    createNewTeam();
  })
};

const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Intern name? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Intern name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Intern id? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Intern id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Intern email? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Intern email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the Intern school? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Intern school!');
          return false;
        }
      }
    },
  ]).then (answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamGen.push(makePage.generateIntern(intern));
    createNewTeam();
  })
};

// Node.js program to demonstrate the
// fs.writeFile() method

function generateHTML()
{
  
  fs.writeFile("./dist/index.html",makePage.generatePage(teamGen), (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      // console.log("The written has the following contents:");
      // console.log(fs.readFileSync("./src/page-template.js", "utf8"));
    }
  });
}