const inquirer = require('inquirer');
const makepage = require('./src/page-template');

const Employee =  require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

const createNewTeam = () => 
{
  return inquirer.prompt([
    {
      type: 'list',
      name: 'titleJob',
      message: 'What is the job title? (Required)',
      choices: ['Employee', 'Manager', 'Engineer', 'Intern']
    },
  ]).then(choices => {
    console.log(choices)
    if(choices.titleJob === 'Employee'){
      addEmployee();
    } else  if(choices.titleJob === 'Manager'){
      // addManager();
    } else  if(choices.titleJob === 'Engineer'){
      addEngineer();
    } else  if(choices.titleJob === 'Intern'){
      addIntern();
    }
  });
};
createNewTeam();

function addEmployee () {
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

// const addManager = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the Manager name? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Manager name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'What is the Manager id? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Manager id!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is the Manager email? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Manager email!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: 'What is the Manager office Number? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Manager office number!');
//           return false;
//         }
//       }
//     },
//   ]).then (answers => {
//     const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
//     createNewTeam();
//   })
// };


// const addEngineer = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the Engineer name? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Engineer name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'What is the Engineer id? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Engineer id!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is the Engineer email? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Engineer email!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: 'What is the Engineer office Number? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Engineer office number!');
//           return false;
//         }
//       }
//     },
//   ]).then (answers => {
//     const engineer = new Engineer(answers.name, answers.id, answers.email, answers.officeNumber, answers.github)
//   })
// };

// const addIntern = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the Intern name? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Intern name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'What is the Intern id? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Intern id!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is the Intern email? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Intern email!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: 'What is the Intern office Number? (Required)',
//       validate: nameInput =>
//       {
//         if(nameInput)
//         {
//           return true;
//         }
//         else
//         {
//           console.log('Please enter your Intern office number!');
//           return false;
//         }
//       }
//     },
//   ]).then (answers => {
//     const intern = new Intern(answers.name, answers.id, answers.email, answers.officeNumber, answers.github, answers.school)
//   })
// };

// // promptUser()
// //   // .then(promptProject)
// //   .then(portfolioData => 
// //     {
// //     const pageHTML = generatePage(portfolioData);

// //     // fs.writeFile('./index.html', pageHTML, err => {
// //     //   if (err) throw new Error(err);

// //     //   console.log('Page created! Check out index.html in this directory to see it!');
// //     // });
// //   });

// // writing files
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
// };

// // copying file
// const copyFile = () => {
//   return new Promise((resolve, reject) => {
//     fs.copyFile('./src/style.css', './dist/style.css', err => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve({
//         ok: true,
//         message: 'Stylesheet created!'
//       });
//     });
//   });
// };

// module.exports = { writeFile, copyFile };