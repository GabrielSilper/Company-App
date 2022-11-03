const company = {
  employees: [],
};

class Employee {
  constructor(...data) {
    this.ID = data[0];
    this.firstName = data[1];
    this.lastName = data[2];
    this.age = data[3];
    this.sex = data[4];
    this.adress = data[5];
    this.occupation = data[6];
    this.tasks = data[7];
  }
  
  get getID () {
    return this.ID;
  }
  
  get getFirstName() {
    return this.firstName;
  }
  get getLastName() {
    return this.lastName;
  }
  get getAge() {
    return this.age;
  }
  get getSex() {
    return this.sex;
  }
  get getAdress() {
    return this.adress;
  }
  get getOccupation() {
    return this.occupation;
  }

  get getTasks() {
    return this.tasks;
  }

  set setFirstName(firstName) {
    this.firstName = firstName;
  }

  set setLastName(lastName) {
    this.lastName = lastName;
  }
  set setAge(age) {
    this.age = age;
  }
  set setSex(sex) {
    this.sex = sex;
  }
  set setAdress(adress) {
    this.adress = adress;
  }
  set setOccupation(occupation) {
    this.occupation = occupation;
  }
  set setTasks(tasks) {
    this.tasks = tasks;
  }
}

module.exports = { company, Employee };
