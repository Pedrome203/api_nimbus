const express = require("express");
const studentSubjectRoutes = require("./routes/student_subject.routes");

const router = express.Router();

router.use("/", studentSubjectRoutes);


module.exports = router;
