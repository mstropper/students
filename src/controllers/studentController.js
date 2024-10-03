const studentService = require('../services/studentService');

function getAllStudents(req, res) {
    try {
        const students = studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

function getStudent(req, res) {
    const { registration } = req.params;

    try {
        const student = studentService.getStudentByRegistration(registration);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

function addStudent(req, res) {
    const newStudent = req.body;

    // Verificação de campos obrigatórios
    if (!newStudent.name || !newStudent.email || !newStudent.registration) {
        return res.status(400).json({ message: 'Missing required fields: name, email, and registration' });
    }

    try {
        studentService.addStudent(newStudent);
        res.status(201).json({ message: 'Student added successfully', student: newStudent });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function updateStudent(req, res) {
    const { registration } = req.params;
    const updatedData = req.body;

    try {
        studentService.updateStudent(registration, updatedData);
        res.status(200).json({ message: 'Student updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function deleteStudent(req, res) {
    const { registration } = req.params;

    try {
        studentService.deleteStudent(registration);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
};
