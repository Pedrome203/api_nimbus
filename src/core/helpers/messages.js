module.exports = {
    errors: {
        //error student
        errorAddStudent: { message: 'El estudiante no pude ser registrado', code: 400 },
        errorNotFoundStudent: { message: 'El estudiante no fue encontrado', code: 400 },
        //error subject
        errorAddSubject: { message: 'El estudiante no pude ser registrado', code: 400 },
        errorNotFoundSubject: { message: 'La materia no fue encontrado', code: 400 },
        //others errors
        read: { message: 'Error al leer registro', code: 400 },
        server: { message: 'Error en servidor', code: 500 },

    },

    success: {
        //success student
        successAddStudent: { message: 'Estudiante registrado con exito', code: 200 },
        successDeleteStudent: { message: 'Estudiante eliminado correctamente', code: 200 },
        successUpdateStudent: { message: 'El estudiante se ha actualizado correctamente', code: 200 },

        //success subject
        successAddSubject: { message: 'Materia registrada con exito', code: 200 },
        successDeleteSubject: { message: 'Materia eliminada correctamente', code: 200 },
        successUpdateSubject: { message: 'La materia se ha actualizado correctamente', code: 200 },

        //others success
        read: { message: '', code: 200 },

    },
};
