const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/:registration', studentController.getStudent);
router.post('/', studentController.addStudent);
router.put('/:registration', studentController.updateStudent);
router.delete('/:registration', studentController.deleteStudent);

module.exports = router;
