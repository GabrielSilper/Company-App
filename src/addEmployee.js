const { Employee } = require("./data");

function verifyInfo(...info) {
  if (info[0] === undefined || info[1] === undefined) {
    throw new Error(
      "Missing params to continue - verify if first name and last name was add"
    );
  }
  if (typeof info[0] !== "string" || typeof info[1] !== "string") {
    throw new Error(
      "Missing params to continue - verify if first name and last name was filled with words"
    );
  }
  if (info[0].length < 3 || info[1].length < 3) {
    throw new Error(
      "Missing params to continue - verify if first name and last name was filled correctly"
    );
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
  if (employees === undefined) {
    throw new Error(
      "This fuction need a param object type to define where will insert the employee"
    );
  }
  if (typeof employees !== "object") {
    throw new Error(
      "This fuction need a param object type to define where will insert the employee"
    );
  }
  verifyInfo(...info);
  employees.push(new Employee(generateRandomID(), ...info));
  return `Funcionário ${info[0]} ${info[1]} adicionado com sucesso!!!`
}

module.exports = addEmployee;
