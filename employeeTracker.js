const mysql = require('mysql');
const inquirer = require('inquirer');


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
    start();
  });