const express = require("express");
const myrouter = express.Router();

const employeeController = require('../controllers/employee.controller');


myrouter.get('/', employeeController.getEmployeeList)
myrouter.get('/:id', employeeController.getEmployeeById)
myrouter.post('/', employeeController.createNewEmployee)
myrouter.put('/:id', employeeController.updateEmployee)
myrouter.delete("/:id", employeeController.deleteEmployee)

module.exports = myrouter;