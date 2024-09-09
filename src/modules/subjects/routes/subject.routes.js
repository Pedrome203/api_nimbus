const { Router } = require("express");
const { addSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject } = require("../controllers/subject.controller");

const router = Router();

router.post("/", addSubject);
router.get('/all', getAllSubjects);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

module.exports = router;