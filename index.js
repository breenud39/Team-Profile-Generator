const inquirer = require('inquirer')
const fs = require('fs');
const generatePage = require('./src/page-template');
const pageHTML = generatePage();
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});



const createNewTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'titleJob',
      message: 'What is the job title? (Required)',
      choices: ['Employee', 'Engineer', 'Intern']
    },
  ]).then(choices => {
    if(choices === 'Employee'){
      addEmployee();
    } else  if(choices === 'Engineer'){
      addEngineer();
    } else  if(choices === 'Intern'){
      addIntern();
    }
  });
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Employee name? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Employee name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Employee id? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Employee id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Employee email? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Employee email!');
          return false;
        }
      }
    },
  ]).then (answers => {
    const employee = new Employee(answers.name, answers.id, answers.email)
  })
};

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
          console.log('Please enter your Manager id!');
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
      message: 'What is the Manager office Number? (Required)',
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
      name: 'officeNumber',
      message: 'What is the Engineer office Number? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Engineer office number!');
          return false;
        }
      }
    },
  ]).then (answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.officeNumber, answers.github)
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
      name: 'officeNumber',
      message: 'What is the Intern office Number? (Required)',
      validate: nameInput =>
      {
        if(nameInput)
        {
          return true;
        }
        else
        {
          console.log('Please enter your Intern office number!');
          return false;
        }
      }
    },
  ]).then (answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.officeNumber, answers.github, answers.school)
  })
};

// promptUser()
//   // .then(promptProject)
//   .then(portfolioData => 
//     {
//     const pageHTML = generatePage(portfolioData);

//     // fs.writeFile('./index.html', pageHTML, err => {
//     //   if (err) throw new Error(err);

//     //   console.log('Page created! Check out index.html in this directory to see it!');
//     // });
//   });

addManager();