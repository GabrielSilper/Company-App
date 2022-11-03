const { company : {employees} } = require('./data');

function verifyParams(ID,tasks) {
    if (!employees.some(elem => elem.getID === ID)){
        throw new Error('Error - ID nonexistent');
    }
    if (tasks === undefined || tasks.length === 0) {
        throw new Error('Error - Please, send tasks to continue');
    }
    if (typeof tasks !== 'object') {
        throw new Error('Error - Invalid type insert in tasks - Please, send a array with tasks');
    }
}

function addTask(ID,tasks) {
    try {
        verifyParams(ID,tasks);
        employees.find(elem => elem.getID === ID).setTasks = tasks;
    } catch (error) {
        return error.message;
    }
}

module.exports = addTask;