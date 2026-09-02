"use strict"

$(document).ready(function () {

    $('#formContacto').bootstrapValidator({            
        fields: {
			nombreId: {
                validators: {
                    notEmpty: {
                        message: 'El nombre es obligatorio'
                    }
                }
            },
            apellidoId: {
                validators: {
                    notEmpty: {
                        message: 'El apellido es obligatorio'
                    }
                }
            },
			correoId: {
                validators: {
                    notEmpty: {
                        message: 'El correo es obligatorio'
                    },
					emailAddress: {
						message: 'Ingresa un correo válido'
					}
                }
            },
            telefonoId: {
                validators: {
                    notEmpty: {
                        message: 'El télefono es obligatorio'
                    }
                }
            },
        }
    });

});