const { company, Employee } = require("./data");

function addGhostEmployees(employees) {
    employees.push(new Employee ('0001','Gabriel','Silper'));
    employees.push(new Employee ('0002','Fulano','Moreira'));
    employees.push(new Employee ('0003','Sicrano','Bezerra'));
    employees.push(new Employee ('0004','Beltrano','Silva'));
    employees.push(new Employee ('0005','Potrano','Teixeira'));
}

module.exports = addGhostEmployees;