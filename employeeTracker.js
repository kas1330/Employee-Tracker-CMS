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
            choices: ['Add department', 'Add role', 'Add employee', 'View departments', 'View roles', 'View employees', 'Update employee roles', 'Done']
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
            case 'Update employee roles':
                updateEmp();
                break;
            case 'Done':
                connectionEnd();
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

  function addRole(){
    console.log('Inside addRole function');

      inquirer.prompt([
          {
              type: 'input',
              name: 'roleName',
              message: 'Enter the role you want to add: '
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role you added: '
          },
          {
            type: 'input',
            name: 'depID',
            message: 'Enter the department ID for the role you added: '
          }
        ])

    .then((answer) => {
        connection.query(
            'INSERT INTO roles SET ?',
            {title: answer.roleName,
             salary: answer.salary,
             dep_id: answer.depID
            },
        function(err){
            if(err) throw err;
            console.log('Role added successfully');
            askQuestions();

        }
        )
    })
  }

  function addEmp(){
    console.log('Inside addEmp function');

      inquirer.prompt([
          {
              type: 'input',
              name: 'firstName',
              message: "Enter the employee's first name: "
          },
          {
            type: 'input',
            name: 'lastName',
            message: "Enter the employee's last name: "
          },
          {
            type: 'input',
            name: 'roleID',
            message: "Enter the employee's role id: "
          },
          {
            type: 'input',
            name: 'managID',
            message: "Enter the employee's manager's id: "
          }
        ])

    .then((answer) => {
        connection.query(
            'INSERT INTO employees SET ?',
            {first_name: answer.firstName,
             last_name: answer.lastName,
             role_id: answer.roleID,
             manager_id: answer.managID
            },
        function(err){
            if(err) throw err;
            console.log('Employee added successfully');
            askQuestions();

        }
        )
    })
  }

  function viewDept(){
    console.log('Inside viewDept function');

        connection.query(
            'SELECT * FROM department',

        function(err, res){
            if(err) throw err;
            console.log('SQL ran successfully');
            //Display the departments in a table
            // console.log(res);
            console.table(res);
            // askQuestions();
        }
        )
  }

function viewRoles(){
    console.log('Inside viewRoles function');
    connection.query(
        'SELECT * FROM roles',

    function(err, res){
        if(err) throw err;
        console.log('SQL ran successfully');
        //Display the departments in a table
        // console.log(res);
        console.table(res);
        
        askQuestions();
    }
    )
}

function viewEmp(){
    console.log('Inside viewEmp function');
    connection.query(
        'SELECT * FROM employees',

    function(err, res){
        if(err) throw err;
        console.log('SQL ran successfully');
        //Display the departments in a table
        // console.log(res);
        console.table(res);

        askQuestions();
    }
    )
}

function updateEmp(){
    console.log('Inside updateEmp function');

      inquirer.prompt([
        {
            type: 'input',
            name: 'idNum',
            message: "Enter the employee's id number: ",
        },
        {
            type: 'input',
            name: 'roleID',
            message: "Enter the employees new role id: ",
        }
        ])

    .then((answer) => {
        let idNum = answer.idNum;
        let roleIDnum = answer.roleID;
        
        connection.query(
            'UPDATE employees SET ? WHERE ?',
            [
                {
                    role_id: roleIDnum
                },
                {
                    id: idNum
                }
            ],
            function(err){
                if(err) throw err;
                console.log('Employee name updated successfully');
                
                askQuestions();
            }
        )
    })
}

function connectionEnd(){
    connection.end();
}