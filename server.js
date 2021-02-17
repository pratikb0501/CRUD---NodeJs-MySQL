const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const db = require('./config/db.config')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const employeeRouter = require('./src/routes/employee.route')

app.use('/employee/allDetails', employeeRouter)




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is listening on ${port}`)
})


app.get('/', (req, res) => {
    res.send("<h1>Hello pratik</h1>")
})

