const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const studentRoutes = require('./modules/students');
// const subjectsRoutes = require('./modules/subjects')

app.use('/api/students', studentRoutes);
// app.use('/api/subjects', subjectsRoutes);



const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN PUERTO: ${PORT}`);
});
