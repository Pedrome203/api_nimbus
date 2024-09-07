const express = require("express");
const studentRoutes = require("./routes/student.routes");

const router = express.Router();

router.use("/", studentRoutes);


module.exports = router;