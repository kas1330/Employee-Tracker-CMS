const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "mysql23@#",
    database: "employeeDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    askQuestions();
  });

// askQuestions();
//   const questions = [
//     {
//         type: 'list',
//         name: 'option',
//         message: 'What would you like to do?',
//         choices: ['Add department', 'Add role', 'Add employee', 'View departments', 'View roles', 'View employees', 'Update employe roles']
//     }
    // {
    // type: 'input',
    // name: 'name',
    // message: 'Enter a name:'
    // },
    // {
    // type: 'input',
    // name: 'id',
    // message: 'Enter an id:'
    // },
    // {
    // type: 'input',
    // name: 'email',
    // message: 'Enter an email:'
    // },
    // {
    //     when: answer => {
    //         return answer.option === 'Add department'
    //     },
    //     type: 'input',
    //     name: 'officeNumber',
    //     message: 'Enter their office number:'
    // },
    // {
    //     when: answer => {
    //         return answer.role === 'Engineer'
    //     },
    //     type: 'input',
    //     name: 'github',
    //     message: 'Enter their gitHub user name:'
    // },
    // {
    //     when: answer => {
    //         return answer.role === 'Intern'
    //     },
    //     type: 'input',
    //     name: 'school',
    //     message: 'Enter their school:'
    // },
    // {
    // type: 'list',
    // name: 'addPerson',
    // message: 'Would you like to add someone else?',
    // choices: ['Yes', 'No']
    // }

// ];

  function askQuestions(){
    inquirer.prompt(
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: ['Add department', 'Add role', 'Add employee', 'View departments', 'View roles', 'View employees', 'Update employee roles']
        }
    )
    .then((answer) => {
        console.log(answer.option);
        switch(answer.option) {
            case 'Add department':
                addDept();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Add employee':
                addEmp();
                break;
            case 'View departments':
                viewDept();
                break;
            case 'View roles':
                viewRoles();
                break;
            case 'View employees':
                viewEmp();
                break;
            case 'Update employee role':
                updateEmp();
                break;
        }

    })
    

  }