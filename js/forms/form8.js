$(document).ready(function(){
      $('#form').validate({
        rules: {
            //SECCION 1
            razon_social_empresa: {
              required:true,
              minlength: 4,
              maxlength: 60
            },
            num_ruc: {
              required: true,
              minlength: 11,
              maxlength: 11,
              number: true
            },
            cod_empresa: {
               required: true,
               minlength:8,
               maxlength: 8,
               number: true
            },

            //SECCION 2
            nom_usuario_admin:{
               required: true,
               minlength: 4,
               maxlength: 30,
               lettersonly: true

            },
            email_usuario_admin:{
               required:true,
               email: true
            },
            tipo_doc_ident:{
               required: true
            },
            num_doc_admin: {
               required: true,
               maxlength: 11
            },
            tel_admin_usuario:{
              required: true,
               maxlength: 11,
               number: true
            },
            //SECCION 3
            num_tokens:{
              required: true,
              minlength: 1,
              maxlength: 3,
              number: true
            },
            //SECCION 4
            nombre_persona_contacto:{
               required: true,
               minlength: 4,
               maxlength: 35
            },
            tipo_doc_ident_contacto:{
               required: true
            },
            num_ident_persona_contacto: {
               required: true,
               maxlength: 11
            },
            email_persona_contacto:{
               required: true,
               email: true
            },
            num_doc_rep_leg_1: {
              required: true,
               maxlength: 11
            },
            cargo_rep_leg_1:{
              required: true,
               minlength: 4,
               maxlength: 80
            },
            num_doc_rep_leg_2: {
               maxlength: 11
            },
            cargo_rep_leg_2:{
               minlength: 4,
               maxlength: 80
            },
            num_doc_rep_leg_3: {
               maxlength: 11
            },
            cargo_rep_leg_3:{
               minlength: 4,
               maxlength: 80
            },
            num_doc_rep_leg_4: {
               maxlength: 11
            },
            cargo_rep_leg_4:{
               minlength: 4,
               maxlength: 80
            }
         },
         //Fin Reglas

         messages: {
            //SECCION 1
             razon_social_empresa:{
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 60 caracteres."
            },
            num_ruc:{
              minlength: "11 dígitos exactos.",
              maxlength: "11 dígitos exactos."
            },
            cod_empresa:{
               minlength: "El número debe tener 8 dígitos.",
               maxlength: "El número debe tener 8 dígitos."
            },

            //SECCION 2
            nom_usuario_admin:{
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 30 caracteres."
            },
            //SECCION 3
            num_tokens:{
               minlength: "El número debe tener 3 dígitos.",
               maxlength: "El número debe tener 3 dígitos."
            },

            //SECCION 4
            nombre_persona_contacto:{
               required: "Campo obligatorio, máximo 35 caracteres.",
               minlength: "El campo debe tener al menos 4 caracteres."
            },
            num_ident_persona_contacto:{
               required: "Campo obligatorio, máximo 11 números.",
               maxlength: "Máximo 11 caracteres, sólo números."
            },

             //SECCION 5
            num_doc_rep_leg_1:{
               required: "Campo obligatorio.",
               maxlength: "Máximo 11 caracteres, sólo números."
            },
            cargo_rep_leg_1:{
               required: "Campo obligatorio.",
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 80 caracteres."
            },
            num_doc_rep_leg_2:{
               required: "Campo obligatorio.",
               maxlength: "Máximo 11 caracteres, sólo números."
            },
            cargo_rep_leg_2:{
               required: "Campo obligatorio.",
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 80 caracteres."
            },
            num_doc_rep_leg_3:{
               required: "Campo obligatorio.",
               maxlength: "Máximo 11 caracteres, sólo números."
            },
            cargo_rep_leg_3:{
               required: "Campo obligatorio.",
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 80 caracteres."
            },
            num_doc_rep_leg_4:{
               required: "Campo obligatorio.",
               maxlength: "Máximo 11 caracteres, sólo números."
            },
            cargo_rep_leg_4:{
               required: "Campo obligatorio.",
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 80 caracteres."
            }
         }
         //FIN MENSAJES
      });
      //FIN JQUERY VALIDATE
       //Cambio de mensaje por defecto Jquery Validate
      jQuery.extend(jQuery.validator.messages, {
        required: 'Campo obligatorio.',
        email: 'Ingrese un email válido',
        number: "Ingrese solamente números.",
        maxlength: jQuery.validator.format("Hasta {0} dígitos."),
        minlength: jQuery.validator.format("Hssta {0} dígitos.")
      });



// SECCION 3 VALIDAR DNI
$('#tipo_doc_ident').change(function(){

  $('#num_doc_admin').rules('remove','maxlength minlength number');

  if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

    $('#num_doc_admin').rules('remove','number');
    $('#num_doc_admin').attr('maxlength','11');
    $('#num_doc_admin').rules('add', {
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

    $('#num_doc_admin').val($('#num_doc_admin').val().substring(0,8));
    $('#num_doc_admin').attr('maxlength','8');
      
    $('#num_doc_admin').rules('add', {
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
	$('#num_doc_admin').rules('remove','number');
    $('#num_doc_admin').attr('maxlength','11');
    $('#num_doc_admin').rules("add", {
      maxlength: 11,
      messages: {
        maxlength: "Máximo 11 caracteres"
      }
    });
      
    $('#form').valid();
    return true;
  }

});


// SECCION 4 VALIDAR DNI
$('#tipo_doc_ident_contacto').change(function() {

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



    // FORMULARIO EMAIL 4 CAMPOS


// SECCION 3 VALIDAR DNI
  $('#rep_leg_doc_1').change(function() {
    // Add or Required Rules
    if (!this.value) {
      $('#num_doc_rep_leg_1').rules('remove');
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




       //SECCION 1
       $('#num_ruc').simpleMask( { 'mask': '###########' } );
       $('#cod_empresa').simpleMask( { 'mask': '########' } );

       //SECCION 2
       //$('#num_doc_admin').simpleMask( { 'mask': '###########' } );
       $('#tel_admin_usuario').simpleMask( { 'mask': '###########' } );

       //SECCION 3
       $('#num_tokens').simpleMask( { 'mask': '###' } );

       //SECCION 4
       //$('#num_ident_persona_contacto').simpleMask( { 'mask': '###########' } );

       //SECCION Autorización Rep leg. empresa
       //$('#num_doc_rep_leg_1').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_2').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_3').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_4').simpleMask( { 'mask': '###########' } );

      //Validar Formulario y pasar a impresión
      $('#btn-submit').click(function(){
         var validator = $('#form').validate();

         $('#form').valid();
         var numinvalidos = validator.numberOfInvalids();

         if(numinvalidos> 0){
            alert('Error: Falta llenar '+numinvalidos+' campos obligatorios.');
            $('#form').focus();
            return false;

         }else{
            window.print();
            return false;
         }
      });
});