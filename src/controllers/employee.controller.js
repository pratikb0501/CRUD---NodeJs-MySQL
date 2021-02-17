const Employee = require('../models/employee.model');
var employeeModel = require('../models/employee.model')

exports.getEmployeeList = (req, res) => {
    // res.send("good morning")
    employeeModel.getEmployeeDetails((err, details) => {
        if (err) {
            console.log("error");
        }
        else {
            res.send(details);
        }

    })
}

exports.getEmployeeById = (req, res) => {
    // console.log("hello pratik")
    employeeModel.getEmployeeById(req.params.id, (err, details) => {
        //console.log("huraahhhh");
        if (err) {
            console.log("Error: ", error);
        } else {
            res.send(details);
        }
    })
}

exports.createNewEmployee = (req, res) => {
    const employeeData = new employeeModel(req.body);
    console.log("Requested Data :", employeeData);
    if (!req.body) {
        console.log("sorry");
        res.sendStatus(400).send({ success: false, message: "Please fill all the details" })
    } else {
        // console.log("Data entered sucessfully");
        employeeModel.createNewEmployee(employeeData, (err, employee) => {
            if (err) {
                // console.log("Error: ", err);
                res.send(err)
            } else {
                res.json({ status: true, message: "New Entry inserted ", data: employee })
            }
        })
    }
}

exports.updateEmployee = (req, res) => {
    const employeeData = new employeeModel(req.body);
    console.log("Requested Data to Update :", employeeData);
    if (!req.body) {
        console.log("Sorry");
        res.status(400).send({ success: false, message: "Couldnot update data" })
    } else {
        employeeModel.updateEmployee(req.params.id, employeeData, (err, employee) => {
            if (err) {
                res.send(err)
            } else {
                res.json({ status: true, message: "Employee updated Successfully", data: employee })
            }
        })
    }

}

exports.deleteEmployee = (req, res) => {
    console.log("Deleted record!! ")
    employeeModel.deleteEmployee(req.params.id, (err, details) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            res.send(details);
        }

    })
}