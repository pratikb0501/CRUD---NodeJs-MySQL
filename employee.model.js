// const e = require('express');
// var dbConn = require('./config/db.config');

// var Employee = function (employee) {
//     this.first_name = employee.first_name;
//     this.last_name = employee.last_name;
//     this.email = employee.email;
//     this.phone = employee.phone;
//     this.organisation = employee.organisation;
//     this.designation = employee.designation;
//     this.salary = employee.salary;
//     this.status = employee.status ? employee.status : 1;
//     this.created_at = new Date();
//     this.updated_at = new Date();

// };

// Employee.create = function (newEmp, result) {
//     dbConn.query("INSERT INTO employees set ? ", newEmp, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             console.log(res.insertId);
//             result(null.res.insertId);

//         }
//     })
// }

// Employee.findById = function (id, result) {
//     dbConn.query("SELECT * FROM employees where id = ?", id, function (err, res) {
//         if (err) {
//             console.log("error", err);
//             result(err, null)
//         }
//         else {
//             result(null, res)
//         }
//     });
// };

// Employee.findAll = function (result) {
//     dbConn.query("SELECT * FROM employees", function (err, res) {
//         if (err) {
//             console.log("error : ", error);
//             result(null, err)
//         }
//         else {
//             console.log('employees : ', res);
//             result(null, res);
//         };
//     });
// }