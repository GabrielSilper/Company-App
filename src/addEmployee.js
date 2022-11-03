const { company, Employee } = require("./data");

function addEmployee(employees, ...info) {
    if (info[0] === undefined 
        || info[1] === undefined
        || info[2] === undefined) {
        
    }
    employees.push(new Employee (...info));
}

module.exports = addEmployee;