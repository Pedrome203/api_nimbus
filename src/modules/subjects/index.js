const express = require("express");
const subjectRoutes = require("./routes/subject.routes");

const router = express.Router();

router.use("/", subjectRoutes);


module.exports = router;
