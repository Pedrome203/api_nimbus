const { Router } = require("express");
const { addStudent } = require("../controllers/student.controller");

const router = Router();

router.post("/", addStudent);

module.exports = router;
