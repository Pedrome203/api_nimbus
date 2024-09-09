const { Router } = require("express");
const { addStudent, getStudentById, updateStudent, deleteStudent, getAllStudents } = require("../controllers/student.controller");

const router = Router();

router.post("/", addStudent);
router.get('/all', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;
