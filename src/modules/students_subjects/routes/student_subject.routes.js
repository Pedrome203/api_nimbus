const { Router } = require("express");
const { addSubjectIntoStudent, removeSubject } = require("../controllers/student_subject.controller");

const router = Router();

router.post("/", addSubjectIntoStudent);
router.delete('/:id', removeSubject);

module.exports = router;