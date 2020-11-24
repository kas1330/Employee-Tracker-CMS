const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');


const connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "mysql23@#",
    database: "employee_DB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    askQuestions();
  });

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

  function addDept(){
    console.log('Inside addDept function');

      inquirer.prompt(
          {
              type: 'input',
              name: 'deptName',
              message: 'Enter the name of the department you want to add: '
          }
      )

    .then((answer) => {
        connection.query(
            'INSERT INTO department SET ?',
            {dep_name: answer.deptName},
        function(err){
            if(err) throw err;
            console.log('Dept added successfully');
            askQuestions();

        }
        )
    })
  }