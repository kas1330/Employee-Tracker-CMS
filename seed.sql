USE employee_DB;

-- Departments
INSERT INTO department (dep_name) VALUES ('Sales');
INSERT INTO department (dep_name) VALUES ('Project Management');
INSERT INTO department (dep_name) VALUES ('Legal');
INSERT INTO department (dep_name) VALUES ('Human Resources');
INSERT INTO department (dep_name) VALUES ('Information Technology');
INSERT INTO department (dep_name) VALUES ('Customer Support');

-- Roles

INSERT INTO roles (title, salary, dep_id) VALUES ('Account Manager', 50000, 1);
INSERT INTO roles (title, salary, dep_id) VALUES ('Director of Sales', 65000, 1);
INSERT INTO roles (title, salary, dep_id) VALUES ('Chief Sales Officer', 100000, 1);

INSERT INTO roles (title, salary, dep_id) VALUES ('Project Manager', 50000, 2);
INSERT INTO roles (title, salary, dep_id) VALUES ('Manager of Operations', 70000, 2);

INSERT INTO roles (title, salary, dep_id) VALUES ('File Clerk', 30000, 3);
INSERT INTO roles (title, salary, dep_id) VALUES ('Lawyer', 70000, 3);
INSERT INTO roles (title, salary, dep_id) VALUES ('Chief Legal Advisor', 100000, 3);

INSERT INTO roles (title, salary, dep_id) VALUES ('HR Associate', 30000, 4);
INSERT INTO roles (title, salary, dep_id) VALUES ('HR Manager', 60000, 4);

INSERT INTO roles (title, salary, dep_id) VALUES ('Network Administrator', 60000, 5);
INSERT INTO roles (title, salary, dep_id) VALUES ('Help Desk Analyst', 50000, 5);
INSERT INTO roles (title, salary, dep_id) VALUES ('Chief Technology Officer', 120000, 5);

INSERT INTO roles (title, salary, dep_id) VALUES ('Customer Support Specialist', 50000, 6);
INSERT INTO roles (title, salary, dep_id) VALUES ('Customer Support Representative', 40000, 6);
INSERT INTO roles (title, salary, dep_id) VALUES ('Manager of Customer Support', 50000, 6);

-- Employees

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('John', 'Smith', 1, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Kristin', 'Stewart', 2, 3);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('Kathy', 'Elliot', 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Joan', 'Allen', 4, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Katy', 'Perry', 4, 5);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('James', 'Goodman', 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Mindy', 'Kaling', 6, 8);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Chris', 'Evans', 7, 8);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('Jackie', 'Gleason', 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Sherry', 'Miner', 9, 10);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Shirley', 'Temple', 9, 10);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('Mark', 'Calloway', 10);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Larry', 'Fine', 11, 13);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Curly', 'Horwiz', 12, 13);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('Moe', 'Howard', 13);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Marie', 'Antoinette', 14, 16);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Pat', 'Crawford', 15, 16);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('Paula', 'Dearland', 16);













