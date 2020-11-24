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












