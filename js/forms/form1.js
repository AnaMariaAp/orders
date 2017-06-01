   $(document).ready(function() {

     /** JQuery Validate **/
     $("#form").validate({
       rules: {
         /*SECCION 1*/
         razon_social_empresa: {
           required: true,
           minlength: 4,
           maxlength: 60
         },
         ruc_empresa: {
           required: true,
           maxlength: 11,
           minlength: 11,
           number: true
         },
         cuenta_princ_cargo: {
           required: true,
           minlength: 20,
           maxlength: 20
         },
         /*SECCION 2*/
         versiones_sistema: {
           required: true
         },
         /*SECCION 3*/
         tipo_admin_usuarios: {
           required: true,
           minlength: 1
         },
         admin_mancomunada: {
           required: "#admin_conjunta:checked",
           minlength: 1
         },
         /*SECCION 4*/
         nombre_persona_contacto: {
           required: true,
           minlength: 4,
           maxlength: 35
         },
         tipo_doc_ident: {
           required: true
         },
         num_ident_persona_contacto: {
           required: true,
           maxlength: 11
         },

         // telefono_persona_contacto: {
         //   required: false,
         //   maxlength: 15,
         //   number: true
         // },

         email_persona_contacto: {
           required: true,
           email: true
         },

         /*SECCION 5*/
         cuenta_empresa_1: {
           required: true,
           minlength: 20,
           maxlength: 20
         },
         cuenta_empresa_2: {
          campo_18_digitos: true
         },
         cuenta_empresa_3: {
           campo_18_digitos: true
        },
         cuenta_empresa_4: {
           campo_18_digitos: true
        },
         cuenta_empresa_5: {
           campo_18_digitos: true
        },
         cuenta_empresa_6: {
           campo_18_digitos: true
        },
         cuenta_empresa_7: {
           campo_18_digitos: true
        },
         cuenta_empresa_8: {
           campo_18_digitos: true
        },
         cuenta_empresa_9: {
           campo_18_digitos: true
        },
         cuenta_empresa_10: {
           campo_18_digitos: true
        },
         cuenta_empresa_11: {
           campo_18_digitos: true
        },
         cuenta_empresa_12: {
           campo_18_digitos: true
        },
         cuenta_empresa_13: {
           campo_18_digitos: true
        },
         cuenta_empresa_14: {
           campo_18_digitos: true
        },
         cuenta_empresa_15: {
           campo_18_digitos: true
        },
         cuenta_empresa_16: {
           campo_18_digitos: true
        },
         cuenta_empresa_17: {
           campo_18_digitos: true
        },
         cuenta_empresa_18: {
           campo_18_digitos: true
        },
         cuenta_empresa_19: {
           campo_18_digitos: true
        },
         cuenta_empresa_20: {
           campo_18_digitos: true
        },
         /*SECCION 6*/
         cuenta_pre_inscrita_num_1: {
           campo_18_digitos: true,
           campo_vacio : 'cuenta_pre_inscrita_nom_1'
         },
         cuenta_pre_inscrita_num_2: {
           campo_18_digitos: true,
           campo_vacio : 'cuenta_pre_inscrita_nom_2'
         },
         cuenta_pre_inscrita_num_3: {
           campo_18_digitos: true,
           campo_vacio : 'cuenta_pre_inscrita_nom_3'
         },
         cuenta_pre_inscrita_num_4: {
           campo_18_digitos: true,
           campo_vacio : 'cuenta_pre_inscrita_nom_4'
         },
         cuenta_pre_inscrita_nom_1: {
           minlength: 4,
           maxlength: 80
         },
         cuenta_pre_inscrita_nom_2: {
           minlength: 4,
           maxlength: 80
         },
         cuenta_pre_inscrita_nom_3: {
           minlength: 4,
           maxlength: 80
         },
         cuenta_pre_inscrita_nom_4: {
           minlength: 4,
           maxlength: 80
         },
         /*SECCION 7*/
         limite_transaccion: {
           required: true
           /*number: true,*/
           /*maxlength: 12*/
         },
         limite_diario: {
           required: true,
           number: true,
           numero_mayor: '#limite_transaccion'
         },
         limite_mensual: {
           required: true,
           number: true,
           numero_mayor: '#limite_diario'
         },
         num_doc_rep_leg_1: {
           maxlength: 11
         },
         cargo_rep_leg_1: {
           minlength: 4,
           maxlength: 80
         },
         num_doc_rep_leg_2: {
           maxlength: 11
         },
         cargo_rep_leg_2: {
           minlength: 4,
           maxlength: 80
         },
         num_doc_rep_leg_3: {
           maxlength: 11
         },
         cargo_rep_leg_3: {
           minlength: 4,
           maxlength: 80
         },
         num_doc_rep_leg_4: {
           maxlength: 11
         },
         cargo_rep_leg_4: {
           minlength: 4,
           maxlength: 80
         }
       },
       /*FIN REGLAS*/

       messages: {
         /*SECCION 1*/
         razon_social_empresa: {
           required: "Campo obligatorio, máximo 60 caracteres.",
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 60 caracteres."
         },
         ruc_empresa: {
           required: "Campo obligatorio, 11 dígitos.",
           maxlength: "Ingrese 11 dígitos exactos.",
           minlength: "Ingrese 11 dígitos exactos."
         },
         cuenta_princ_cargo: {
           required: "Campo obligatorio, 18 dígitos.",
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },

         /*SECCION 2*/
         versiones_sistema: {
           required: "Elegir una opción de las cinco disponibles."
         },

         /*SECCION 3*/
         tipo_admin_usuarios: {
           required: "Elegir una opción de las dos disponibles.",
           minlength: "Elija una opción de las dos disponibles."
         },
         admin_mancomunada: {
           required: "Elegir una opción de las tres disponibles.",
           minlength: "Elija una opción de las tres disponibles."
         },

         /*SECCION 4*/
         nombre_persona_contacto: {
           required: "Campo obligatorio, máximo 35 caracteres.",
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 35 caracteres."
         },
         num_ident_persona_contacto: {
           required: "Campo obligatorio.",
           maxlength: "Máximo 11 caracteres."
         },

         cuenta_empresa_1: {
           required: "Campo obligatorio, se copiará por defecto el número de cuenta de la Sección 1.",
           minlength: "Campo obligatorio, se copiará por defecto el número de cuenta de la Sección 1.",
           maxlength: "Campo obligatorio, se copiará por defecto el número de cuenta de la Sección 1."
         },
         cuenta_empresa_2: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_3: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_4: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_5: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_6: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_7: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_8: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_9: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_10: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_11: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_12: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_13: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_14: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_15: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_16: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_17: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_18: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_19: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_20: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos."
         },

         /*SECCION 6*/
         cuenta_pre_inscrita_num_1: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular'
         },
         cuenta_pre_inscrita_num_2: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular'

         },
         cuenta_pre_inscrita_num_3: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular'

         },
         cuenta_pre_inscrita_num_4: {
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular'

         },
         cuenta_pre_inscrita_nom_1: {
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },
         cuenta_pre_inscrita_nom_2: {
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },
         cuenta_pre_inscrita_nom_3: {
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },
         cuenta_pre_inscrita_nom_4: {
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },

         /*SECCION 7*/
         limite_transaccion: {
           required: "Campo Obligatorio, hasta 12 dígitos"
         },
         limite_diario: {
           required: "Campo Obligatorio, hasta 12 dígitos",
           numero_mayor: "Límite Diario debe ser mayor o igual al Límite por Transacción"
         },
         limite_mensual: {
           required: "Campo Obligatorio, hasta 12 dígitos",
           numero_mayor: "Límite Mensual debe ser mayor o igual al Límite Diario"
         },

         /*SECCION 8*/
         num_doc_rep_leg_1: {
           required: "Campo obligatorio.",
           maxlength: "Máximo 11 caracteres, sólo números."
         },
         cargo_rep_leg_1: {
           required: "Campo obligatorio.",
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },
         num_doc_rep_leg_2: {
           required: "Campo obligatorio.",
           maxlength: "Máximo 11 caracteres, sólo números."
         },
         cargo_rep_leg_2: {
           required: "Campo obligatorio.",
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },
         num_doc_rep_leg_3: {
           required: "Campo obligatorio.",
           maxlength: "Máximo 11 caracteres, sólo números."
         },
         cargo_rep_leg_3: {
           required: "Campo obligatorio.",
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         },
         num_doc_rep_leg_4: {
           required: "Campo obligatorio.",
           maxlength: "Máximo 11 caracteres, sólo números."
         },
         cargo_rep_leg_4: {
           required: "Campo obligatorio.",
           minlength: "El campo debe tener al menos 4 caracteres.",
           maxlength: "Máximo 80 caracteres."
         }
       },
       errorPlacement: function(error, element) {
         if (element.attr("name") == "versiones_sistema") {
           error.insertAfter("#box-error-sec2");

         } else if (element.attr("name") == "tipo_admin_usuarios") {
           error.insertAfter("#box-error-sec3");

         } else if (element.attr("name") == "admin_mancomunada") {
           error.insertAfter("#box-error-sec3");

         } else {
           error.insertAfter(element);
         }
       }

     });
     /** Fin JQuery Validate()**/




// VALIDATE ONKEYPRESS
$('#cuenta_pre_inscrita_num_1').on('keypress', function(){
  $('#cuenta_pre_inscrita_nom_1').valid();
});
$('#cuenta_pre_inscrita_nom_1').on('keypress', function(){
  $('#cuenta_pre_inscrita_num_1').valid();
});
$('#cuenta_pre_inscrita_num_2').on('keypress', function(){
  $('#cuenta_pre_inscrita_nom_2').valid();
});
$('#cuenta_pre_inscrita_nom_2').on('keypress', function(){
  $('#cuenta_pre_inscrita_num_2').valid();
});
$('#cuenta_pre_inscrita_num_3').on('keypress', function(){
  $('#cuenta_pre_inscrita_nom_3').valid();
});
$('#cuenta_pre_inscrita_nom_3').on('keypress', function(){
  $('#cuenta_pre_inscrita_num_3').valid();
});
$('#cuenta_pre_inscrita_num_4').on('keypress', function(){
  $('#cuenta_pre_inscrita_nom_4').valid();
});
$('#cuenta_pre_inscrita_nom_4').on('keypress', function(){
  $('#cuenta_pre_inscrita_num_4').valid();
});


/*$('#num_doc_rep_leg_2').on('keypress', function(){
    $('#rep_leg_doc_2').valid();
    $('#cargo_rep_leg_2').valid();
});

$('#num_doc_rep_leg_3').on('keypress', function(){
    $('#rep_leg_doc_3').valid();
    $('#cargo_rep_leg_3').valid();
});

$('#num_doc_rep_leg_4').on('keypress', function(){
    $('#rep_leg_doc_4').valid();
    $('#cargo_rep_leg_4').valid();
});*/



// LIMITES DE SERVICIOS
$('#limite_transaccion, #limite_diario, #limite_mensual').on('change keyup', function(){
  $('#limite_transaccion, #limite_diario, #limite_mensual').valid();
});



// SECCION 4 TIPO DE DOCUMENTO DE IDENTIDAD
$('#tipo_doc_ident').change(function(){

  $('#num_ident_persona_contacto').rules('remove','maxlength minlength number');

  if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

    $('#num_ident_persona_contacto').rules('remove','number');
    $('#num_ident_persona_contacto').attr('maxlength','11');
    $('#num_ident_persona_contacto').rules('add', {
      maxlength: 11,
      messages: {
        maxlength: "Máximo 11 caracteres"
      }
    });
      
    var validator = $('#form').validate();
    $('#form').valid();
    return true;
  }
    
  // DNI LIBRETA ELECTORAL
  if (this.value == 2) {

    $('#num_ident_persona_contacto').val($('#num_ident_persona_contacto').val().substring(0,8));
    $('#num_ident_persona_contacto').attr('maxlength','8');
      
    $('#num_ident_persona_contacto').rules('add', {
      number: true,
      maxlength: 8,
      minlength: 8,
      messages: {
        number: "Debe ingresar sólo números",
        maxlength: "Máximo 8 caracteres",
        minlength: "Minimo 8 caracteres"
      }
    });
      
    $('#form').valid(); 
    return true;
  }

  //CARNET DE IDENTIDAD MILITAR
  if (this.value == 3 ) {
	$('#num_ident_persona_contacto').rules('remove','number');
    $('#num_ident_persona_contacto').attr('maxlength','11');
    $('#num_ident_persona_contacto').rules("add", {
      maxlength: 11,
      messages: {
        maxlength: "Máximo 11 caracteres"
      }
    });
      
    $('#form').valid();
    return true;
  }

});

   // SECCION 8 AUTORIZACION DE LOS REPRESENTANTES
  $('#rep_leg_doc_1').change(function() {
    // Add or Required Rules
    if (!this.value) {
      $('#cargo_rep_leg_1').rules('remove');
      $('#num_doc_rep_leg_1').removeAttr('required');
      $('#cargo_rep_leg_1').removeAttr('required');
      $('#num_doc_rep_leg_1').attr('maxlength','11');

      //Vaciamos los campos
      $('#num_doc_rep_leg_1').val('');
      $('#cargo_rep_leg_1').val('');

      $('#form').valid();
      return true;
    }
    
    $('#cargo_rep_leg_1').rules('add', {required: true, minlength: 4});
    $('#num_doc_rep_leg_1').rules('add', {required: true});
    $('#num_doc_rep_leg_1').rules('remove', 'minlength');

    if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

      $('#num_doc_rep_leg_1').rules('remove','number');
      $('#num_doc_rep_leg_1').attr('maxlength','11');
      $('#num_doc_rep_leg_1').rules('add', {
        maxlength: 11,
        messages: {
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      var validator = $('#form').validate();
      $('#form').valid();
      return true;
    }
    
    // DNI LIBRETA ELECTORAL
    if (this.value == 2) {

      $('#num_doc_rep_leg_1').val($('#num_doc_rep_leg_1').val().substring(0,8));
      $('#num_doc_rep_leg_1').attr('maxlength','8');
      
      $('#num_doc_rep_leg_1').rules('add', {
        number: true,
        maxlength: 8,
        minlength: 8,
        messages: {
          maxlength: "Máximo 8 caracteres",
          minlength: "Minimo 8 caracteres",
          number: "Debe ingresar sólo números"
        }
      });
      
      $('#form').valid(); 
      return true;
    }

    //CARNET DE IDENTIDAD MILITAR
    if (this.value == 3 ) {
		$('#num_doc_rep_leg_1').rules('remove','number');
      $('#num_doc_rep_leg_1').attr('maxlength','11');
      $('#num_doc_rep_leg_1').rules("add", {
        required: true,
        maxlength: 11,
        messages: {
          required: "Campo obligatorio, máximo 11 carácteres.",
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      $('#form').valid();
      return true;
      }
   });

  $('#rep_leg_doc_2').change(function() {
    // Add or Required Rules
    if (!this.value) {
      $('#num_doc_rep_leg_2').rules('remove');
      $('#cargo_rep_leg_2').rules('remove');
      $(this).rules('remove');
      $(this).removeAttr('required');
      $('#num_doc_rep_leg_2').removeAttr('required');
      $('#cargo_rep_leg_2').removeAttr('required');
      $('#num_doc_rep_leg_2').attr('maxlength','11');

      //Vaciamos los campos
      $('#num_doc_rep_leg_2').val('');
      $('#cargo_rep_leg_2').val('');

      $('#form').valid();
      return true;
    }
    
    $('#cargo_rep_leg_2').rules('add', {required: true, minlength: 4});
    $('#num_doc_rep_leg_2').rules('add', {required: true});
    $('#num_doc_rep_leg_2').rules('remove', 'minlength');

    if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

      $('#num_doc_rep_leg_2').rules('remove','number');
      $('#num_doc_rep_leg_2').attr('maxlength','11');
      $('#num_doc_rep_leg_2').rules('add', {
        maxlength: 11,
        messages: {
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      var validator = $('#form').validate();
      $('#form').valid();
      return true;
    }
    
    // DNI LIBRETA ELECTORAL
    if (this.value == 2) {

      $('#num_doc_rep_leg_2').val($('#num_doc_rep_leg_2').val().substring(0,8));
      $('#num_doc_rep_leg_2').attr('maxlength','8');
      
      $('#num_doc_rep_leg_2').rules('add', {
        number: true,
        maxlength: 8,
        minlength: 8,
        messages: {
          maxlength: "Máximo 8 caracteres",
          minlength: "Minimo 8 caracteres",
          number: "Debe ingresar sólo números"
        }
      });
      
      $('#form').valid(); 
      return true;
    }

    //CARNET DE IDENTIDAD MILITAR
    if (this.value == 3 ) {
		$('#num_doc_rep_leg_2').rules('remove','number');
      $('#num_doc_rep_leg_2').attr('maxlength','11');
      $('#num_doc_rep_leg_2').rules("add", {
        maxlength: 11,
        messages: {
          required: "Campo obligatorio, máximo 11 carácteres.",
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      $('#form').valid();
      return true;
    }
  });

  $('#num_doc_rep_leg_2, #cargo_rep_leg_2').keyup(function() {

    if( $('#cargo_rep_leg_2').val().trim().length > 0 || $('#num_doc_rep_leg_2').val().trim().length > 0 ) {
      $('#rep_leg_doc_2, #cargo_rep_leg_2, #num_doc_rep_leg_2').rules('add', {required: true});
      $('#rep_leg_doc_2, #cargo_rep_leg_2, #num_doc_rep_leg_2').attr('required','required');
    }
    else {
      $('#rep_leg_doc_2, #cargo_rep_leg_2, #num_doc_rep_leg_2').rules('remove');
      $('#rep_leg_doc_2, #cargo_rep_leg_2, #num_doc_rep_leg_2').removeAttr('required');
      $('#rep_leg_doc_2').removeClass('error');
    }

    $('#form').valid();
  });


  $('#rep_leg_doc_3').change(function() {
    // Add or Required Rules
    if (!this.value) {
      $('#num_doc_rep_leg_3').rules('remove');
      $('#cargo_rep_leg_3').rules('remove');
      $(this).rules('remove');
      $(this).removeAttr('required');
      $('#num_doc_rep_leg_3').removeAttr('required');
      $('#cargo_rep_leg_3').removeAttr('required');
      $('#num_doc_rep_leg_3').attr('maxlength','11');

      //Vaciamos los campos
      $('#num_doc_rep_leg_3').val('');
      $('#cargo_rep_leg_3').val('');

      $('#form').valid();
      return true;
    }
    
    $('#cargo_rep_leg_3').rules('add', {required: true, minlength: 4});
    $('#num_doc_rep_leg_3').rules('add', {required: true});
    $('#num_doc_rep_leg_3').rules('remove', 'minlength');

    if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

      $('#num_doc_rep_leg_3').rules('remove','number');
      $('#num_doc_rep_leg_3').attr('maxlength','11');
      $('#num_doc_rep_leg_3').rules('add', {
        maxlength: 11,
        messages: {
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      var validator = $('#form').validate();
      $('#form').valid();
      return true;
    }
    
    // DNI LIBRETA ELECTORAL
    if (this.value == 2) {

      $('#num_doc_rep_leg_3').val($('#num_doc_rep_leg_3').val().substring(0,8));
      $('#num_doc_rep_leg_3').attr('maxlength','8');
      
      $('#num_doc_rep_leg_3').rules('add', {
        number: true,
        maxlength: 8,
        minlength: 8,
        messages: {
          maxlength: "Máximo 8 caracteres",
          minlength: "Minimo 8 caracteres",
          number: "Debe ingresar sólo números"
        }
      });
      
      $('#form').valid(); 
      return true;
    }

    //CARNET DE IDENTIDAD MILITAR
    if (this.value == 3 ) {
	$('#num_doc_rep_leg_3').rules('remove','number');
      $('#num_doc_rep_leg_3').attr('maxlength','11');
      $('#num_doc_rep_leg_3').rules("add", {
        maxlength: 11,
        messages: {
          required: "Campo obligatorio, máximo 11 carácteres.",
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      $('#form').valid();
      return true;
    }
  });


  $('#num_doc_rep_leg_3, #cargo_rep_leg_3').keyup(function() {

    if( $('#cargo_rep_leg_3').val().trim().length > 0 || $('#num_doc_rep_leg_3').val().trim().length > 0 ) {
      $('#rep_leg_doc_3, #cargo_rep_leg_3, #num_doc_rep_leg_3').rules('add', {required: true});
      $('#rep_leg_doc_3, #cargo_rep_leg_3, #num_doc_rep_leg_3').attr('required','required');
    }
    else {
      $('#rep_leg_doc_3, #cargo_rep_leg_3, #num_doc_rep_leg_3').rules('remove');
      $('#rep_leg_doc_3, #cargo_rep_leg_3, #num_doc_rep_leg_3').removeAttr('required');
      $('#rep_leg_doc_3').removeClass('error');
    }

    $('#form').valid();
  });
   
  
  $('#rep_leg_doc_4').change(function() {
    // Add or Required Rules
    if (!this.value) {
      $('#num_doc_rep_leg_4').rules('remove');
      $('#cargo_rep_leg_4').rules('remove');
      $(this).rules('remove');
      $(this).removeAttr('required');
      $('#num_doc_rep_leg_4').removeAttr('required');
      $('#cargo_rep_leg_4').removeAttr('required');
      $('#num_doc_rep_leg_4').attr('maxlength','11');

      //Vaciamos los campos
      $('#num_doc_rep_leg_4').val('');
      $('#cargo_rep_leg_4').val('');

      $('#form').valid();
      return true;
    }
    
    $('#cargo_rep_leg_4').rules('add', {required: true, minlength: 4});
    $('#num_doc_rep_leg_4').rules('add', {required: true});
    $('#num_doc_rep_leg_4').rules('remove', 'minlength');

    if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

      $('#num_doc_rep_leg_4').rules('remove','number');
      $('#num_doc_rep_leg_4').attr('maxlength','11');
      $('#num_doc_rep_leg_4').rules('add', {
        maxlength: 11,
        messages: {
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      var validator = $('#form').validate();
      $('#form').valid();
      return true;
    }
    
    // DNI LIBRETA ELECTORAL
    if (this.value == 2) {

      $('#num_doc_rep_leg_4').val($('#num_doc_rep_leg_4').val().substring(0,8));
      $('#num_doc_rep_leg_4').attr('maxlength','8');
      
      $('#num_doc_rep_leg_4').rules('add', {
        number: true,
        maxlength: 8,
        minlength: 8,
        messages: {
          maxlength: "Máximo 8 caracteres",
          minlength: "Minimo 8 caracteres",
          number: "Debe ingresar sólo números"
        }
      });
      
      $('#form').valid(); 
      return true;
    }

    //CARNET DE IDENTIDAD MILITAR
    if (this.value == 3 ) {
	$('#num_doc_rep_leg_4').rules('remove','number');
      $('#num_doc_rep_leg_4').attr('maxlength','11');
      $('#num_doc_rep_leg_4').rules("add", {
        maxlength: 11,
        messages: {
          required: "Campo obligatorio, máximo 11 carácteres.",
          maxlength: "Máximo 11 caracteres"
        }
      });
      
      $('#form').valid();
      return true;
    }
  });

  
  $('#num_doc_rep_leg_4, #cargo_rep_leg_4').keyup(function() {

    if( $('#cargo_rep_leg_4').val().trim().length > 0 || $('#num_doc_rep_leg_4').val().trim().length > 0 ) {
      $('#rep_leg_doc_4, #cargo_rep_leg_4, #num_doc_rep_leg_4').rules('add', {required: true});
      $('#rep_leg_doc_4, #cargo_rep_leg_4, #num_doc_rep_leg_4').attr('required','required');
    }
    else {
      $('#rep_leg_doc_4, #cargo_rep_leg_4, #num_doc_rep_leg_4').rules('remove');
      $('#rep_leg_doc_4, #cargo_rep_leg_4, #num_doc_rep_leg_4').removeAttr('required');
      $('#rep_leg_doc_4').removeClass('error');
    }

    $('#form').valid();
  });




     /*Cambio de mensaje por defecto Jquery Validate*/
     jQuery.extend(jQuery.validator.messages, {
       required: 'Campo obligatorio.',
       email: 'Por favor ingrese un email válido',
       number: "Por favor ingrese solamente números.",
       maxlength: jQuery.validator.format("Hasta {0} dígitos."),
       minlength: jQuery.validator.format("Hssta {0} dígitos.")
     });


     //SECCION 1: Validación de repeticíon de campos
     $('#cuenta_princ_cargo').blur(function() {

       var campo1 = $('#cuenta_princ_cargo').val();
       var campo2 = $('#cuenta_empresa_1').val();

       if (campo2 == '0011') {
         $('#cuenta_empresa_1').val(campo1);
       }

       $(this).data('old', $(this).data('new') || '');
       $(this).data('new', $(this).val());

       var old_campo1 = $(this).data("old");
       var new_campo1 = $(this).data("new");

       if (old_campo1 == campo2) {
         $('#cuenta_empresa_1').val(new_campo1);
       }

     });

     //RUC EMPRESA
     $('#ruc_empresa').simpleMask({
       'mask': '###########'
     });

     //Cuenta Principal Cargo
     $('#cuenta_princ_cargo').simpleMask({
       'mask': '####-####-##########'
     });

     //SECCION 4
     /*$('#num_ident_persona_contacto').simpleMask({
       'mask': '###########'
     });*/

     // //TELEFONO
     // $('#telefono_persona_contacto').simpleMask({
     //   'mask': '###############'
     // });

     //SECCION 5
     //Cifras con guiones
     $('.form1-sec5 .form-control').simpleMask({
       'mask': '####-####-##########'
     });

     $('.form1-sec5 .form-control').click(function() {
       this.selectionStart = this.selectionEnd = this.value.length;
     });

     //SECCION 6
     //Cifras con guiones
     $('.form1-sec6 .sec6-num-cuenta').simpleMask({
       'mask': '####-####-##########'
     });

     $('.form1-sec6 .sec6-num-cuenta').click(function() {
       this.selectionStart = this.selectionEnd = this.value.length;
     });

     //SECCION 6: VAlidacion de si es 0, 18 digitos o 0011
     jQuery.validator.addMethod("campo_18_digitos", function(value, element) {
       return this.optional(element) || value.length == 20 || value == '0011';
     }, "De ser llenado, el campo debe tener 18 dígitos exactos");


     //SECCION 3
     //Activador radio buttons
     $('#admin_conjunta').click(function() {
       $('#admin-mancomunada-items input[name="admin_mancomunada"]').removeAttr('disabled');
     });

     $('#admin_indistinta').click(function() {
       $('#admin-mancomunada-items input[name="admin_mancomunada"]').attr('disabled', 'disabled');
       $('input[name="admin_mancomunada"]').prop('checked', false);
       $('input[name="admin_mancomunada"]').removeAttr('checked');
     });


     //SECCION 7
     //Comas
     $('.val-decimales').slideDown('fast');
     //$('.val-decimales').number(true, 0);
     $('input.val-decimales').mask("000,000,000,000", {reverse: true});

     //SECCION 1:Tooltip
     $(function() {
       $('[data-toggle="tooltip"]').tooltip();
     });

     //Autorización Rep leg. empresa
     /*$('#num_doc_rep_leg_1').simpleMask({
       'mask': '###########'
     });
     $('#num_doc_rep_leg_2').simpleMask({
       'mask': '###########'
     });
     $('#num_doc_rep_leg_3').simpleMask({
       'mask': '###########'
     });
     $('#num_doc_rep_leg_4').simpleMask({
       'mask': '###########'
     });*/

     //BOTON IMPRIMIR
     //Validar Formulario y pasar a impresión
     $('#btn-submit').click(function() {
       var validator = $('#form').validate();

       $('#form').valid();
       var numinvalidos = validator.numberOfInvalids();

       if (numinvalidos > 0) {
         alert('Error: Falta llenar ' + numinvalidos + ' campos obligatorios.');
         $('#form')[0].focus();
         return false;

       } else {
         window.print();
         return false;
       }
     });

   });