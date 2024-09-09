const Student = require('../../modules/students/models/student.model');
const Subject = require('../../modules/subjects/models/subject.model');
const StudentSubject = require('../../modules/students_subjects/models/student_subject.model');  // Importa el modelo de la tabla intermedia


Student.belongsToMany(Subject, {
    through: StudentSubject,
    foreignKey: 'id_student',

});

Subject.belongsToMany(Student, {
    through: StudentSubject,
    foreignKey: 'id_subject',

});

module.exports = {
    Student,
    Subject,
    StudentSubject
};
