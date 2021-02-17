var dbConn = require('../../config/db.config');

var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Employee.getEmployeeDetails = (result) => {
    dbConn.query('SELECT * FROM employees ', (err, res) => {
        if (err) {
            console.log("Error Occured while Fetching ", err);
            result(null, err)
        }
        else {
            console.log("Fetched Successfully");
            result(null, res)
        }
    })
}

Employee.getEmployeeById = (id, result) => {
    dbConn.query('SELECT * FROM employees WHERE id =?', id, name, (err, res) => {
        if (err) {
            console.log("Error: Unable to fetch ", err);
            result(null, err);
        } else {
            console.log("Fetched Sucessfully");
            result(null, res)
        }
    })
}

Employee.createNewEmployee = (employeeData, result) => {
    dbConn.query("INSERT INTO employees SET ?", employeeData, (err, res) => {
        if (err) {
            console.log("Error : Data cannot be inserted");
            result(null, err)
        } else {
            console.log("Data inserted successfully");
            result(null, res)
        }
    })
}

Employee.updateEmployee = (id, employeeData, result) => {
    dbConn.query('UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary =?, status=?  WHERE id=? ',
        [employeeData.first_name, employeeData.last_name, employeeData.email, employeeData.phone, employeeData.organization, employeeData.designation, employeeData.salary, employeeData.status, id],
        (err, res) => {
            if (err) {
                console.log("Error while updating record", err);

                result(null, err)
            } else {
                console.log("Data Updated sucessfully");
                result(null, res)
            }
        })
}

Employee.deleteEmployee = (id, result) => {
    dbConn.query('DELETE FROM employees WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log("Error while deleting record");
            result(null, err)
        } else {
            console.log("Record Deleted Successfully model");
            result(null, res)
        }
    })
}


module.exports = Employee;