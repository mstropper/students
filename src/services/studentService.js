const studentRepo = require('../repositories/studentRepository');

function getAllStudents() {
    return studentRepo.readData();
}

function getStudentByRegistration(registration) {
    const students = studentRepo.readData();
    return students.find(student => student.registration === registration);
}

function addStudent(student) {
    const students = studentRepo.readData();
    const studentExists = students.some(s => s.registration === student.registration);

    if (studentExists) {
        throw new Error('Student with this registration already exists');
    }

    students.push(student);
    studentRepo.writeData(students);
}

function updateStudent(registration, updatedStudent) {
    let students = studentRepo.readData();
    const index = students.findIndex(student => student.registration === registration);

    if (index === -1) {
        throw new Error('Student not found');
    }

    students[index] = { ...students[index], ...updatedStudent };
    studentRepo.writeData(students);
}

function deleteStudent(registration) {
    let students = studentRepo.readData();
    const updatedStudents = students.filter(student => student.registration !== registration);

    if (students.length === updatedStudents.length) {
        throw new Error('Student not found');
    }

    studentRepo.writeData(updatedStudents);
}

module.exports = {
    getAllStudents,
    getStudentByRegistration,
    addStudent,
    updateStudent,
    deleteStudent
};
