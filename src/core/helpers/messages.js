module.exports = {
    errors: {
        password: { message: 'Password Incorrecta', code: 400 },
        errorAddStudent: { message: 'El estudiante no pude ser registrado', code: 400 },
        dataBase: { message: 'Error al registrar en la base de datos', code: 400 },
        create: { message: 'Error al dar de alta registro', code: 400 },
        read: { message: 'Error al leer registro', code: 400 },
        update: { message: 'Error al actualizar registro', code: 400 },
        delete: { message: 'Error al eliminar registro', code: 400 },
        file: { message: 'El archivo no se pudo subir', code: 400 },
        server: { message: 'Error en servidor', code: 500 },
        emailAlredy: { message: 'El email ya existe', code: 400 }

    },

    success: {
        successAddStudent: { message: 'Estudiante registrado con exito', code: 200 },
        email: { message: 'Email encontrado', code: 200 },
        create: { message: 'Registro exitoso', code: 200 },
        read: { message: '', code: 200 },
        update: { message: 'Actualización exitosa', code: 200 },
        delete: { message: 'Eliminación exitosa', code: 200 },
        file: { message: 'Archivo subido correctamente', code: 200 },

    },
};
