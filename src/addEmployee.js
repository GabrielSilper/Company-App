const { company, Employee } = require("./data");
const {employees} = company;

function verifyFunctions(...info) {
    if (info[0] === undefined 
        || info[1] === undefined
        || info[2] === undefined) {
        throw new Error('Missing params to continue - verify if id, first name and last name was add');
    }
    if ( typeof info[1] !== 'string' 
        || typeof info[2] !== 'string' ){
        throw new Error('Missing params to continue - verify if first name and last name was filled with words');
    }
    if ( info[1].length < 3 || info[2].length < 3){
        throw new Error('Missing params to continue - verify if id, first name and last name was filled correctly');
    }
}

function generateRandomID() {
    const part1 = Math.random().toString(16).substring(5);
    const part2 = Math.random().toString(16).substring(5);
    const part3 = Math.random().toString(16).substring(5);
    const part4 = Math.random().toString(16).substring(5);
    const ID = `${part1}-${part2}-${part3}-${part4}`;
    return ID;
}

function addEmployee(employees, ...info) {
    verifyFunctions(...info);
    employees.push(new Employee (...info));
}

console.log(employees);

module.exports = addEmployee;