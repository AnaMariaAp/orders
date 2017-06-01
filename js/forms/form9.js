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
              maxlength: 11,
              minlength: 11,
              number: true
            },
            cod_empresa: {
               required: true,
               minlength:8,
               maxlength: 8,
               number: true
            },
            cod_usuario: {
              caraespecial: true,
              required: true,
              minlength:8,
              maxlength: 8
            },
            num_token_devuelto: {
               required: true,
               minlength:10,
               maxlength: 10
            },
            num_token_asignado: {
               required: true,
               minlength:10,
               maxlength: 10
            },

            //SECCION 2
            token_devolucion:{
              required: true,
              minlength: 1
            },
            //SECCION 3
            cuenta_pre_inscrita_num_1: {
              required:true,
              minlength: 20,
              maxlength: 20
            },
            cuenta_pre_inscrita_num_2: {
              campo_18_digitos: true
            },
            //SECCION 4
            nombre_persona_contacto:{
               required: true,
               minlength: 4,
               maxlength: 35,
               lettersonly: true
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
              required: "11 dígitos exactos",
              minlength: "El número debe tener 11 dígitos.",
              maxlength: "El número debe tener 11 dígitos."
            },
            cod_empresa:{
               minlength: "El número debe tener 8 dígitos.",
               maxlength: "El número debe tener 8 dígitos."
            },
            cod_usuario:{
               minlength: "El número debe tener 8 caracteres alfanuméricos.",
               maxlength: "El número debe tener 8 caracteres alfanuméricos."
            },

            //SECCION 2
            token_devolucion:{
              required: "Elegir una opción de las dos disponibles.",
              minlength: "Elija una opción de las dos disponibles."
            },

            //SECCION 3
            cuenta_pre_inscrita_num_1:{
              required: "Campo obligatorio, 18 dígitos exactos.",
              minlength: "Campo obligatorio, 18 dígitos exactos.",
              maxlength: "Campo obligatorio, 18 dígitos exactos."
            },

            //SECCION 4
            nombre_persona_contacto:{
               required: "Campo obligatorio, máximo 35 caracteres.",
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 35 caracteres."
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
         },
         //FIN MENSAJES
          //Mensajes en sitios personalizados
         errorPlacement: function (error, element) {
            if(element.attr("name") == "token_devolucion" ){
               error.insertAfter("#box_error");

            }else {
               error.insertAfter(element);
            }
         }
      });

// PERSONA DE CONTACTO DNI


// SECCION 3 VALIDAR DNI
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


//Autorizaciond e los representantes de la empresa

   // SECCION 8 AUTORIZACION DE LOS REPRESENTANTES
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



      //FIN JQUERY VALIDATE
       //Cambio de mensaje por defecto Jquery Validate
      jQuery.extend(jQuery.validator.messages, {
        required: 'Campo obligatorio.',
        email: 'Ingrese un email válido',
        number: "Ingrese solamente números.",
        maxlength: jQuery.validator.format("Hasta {0} dígitos."),
        minlength: jQuery.validator.format("Hasta {0} dígitos."),
        require_from_group: jQuery.validator.format("Llenar al menos {0} campo.")
      });

       //SECCION 1
       $('#num_ruc').simpleMask( { 'mask': '###########' } );
       $('#cod_empresa').simpleMask( { 'mask': '########' } );


      $('#num_token_devuelto').simpleMask( { 'mask': '##########' } );
      $('#num_token_asignado').simpleMask( { 'mask': '##########' } );

       //SECCION 2
       //$('#num_ident_persona_contacto').simpleMask( { 'mask': '###########' } );

       //SECCION Autorización Rep leg. empresa
       //$('#num_doc_rep_leg_1').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_2').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_3').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_4').simpleMask( { 'mask': '###########' } );



      //Validacion Reposicion en Garantía
      $('#num_token_devuelto, #num_token_asignado').keyup(function(){
          var token_devuelto = $('#num_token_devuelto').val();
          var token_asignado = $('#num_token_asignado').val();

          if(token_devuelto != "" && token_asignado != ""){
              $('#token_devolucion_repo_garantia').removeAttr('disabled');
              //$('#token_devolucion_repo_perdida').removeAttr('disabled');
          }else{
              $('#token_devolucion_repo_garantia').attr('disabled','disabled');
              $('input[id="token_devolucion_repo_garantia"]').prop('checked', false);
              $('input[id="token_devolucion_repo_garantia"]').removeAttr('checked');

              //$('#token_devolucion_repo_perdida').attr('disabled','disabled');
              //$('input[id="token_devolucion_repo_perdida"]').prop('checked', false);
          }

      });

      /*Validación cifras con guiones*/
      $('#cuenta_pre_inscrita_num_1, #cuenta_pre_inscrita_num_2').simpleMask( { 'mask': '####-####-##########' } );

       //Tooltip
       $(function () {
         $('[data-toggle="tooltip"]').tooltip()
       });

       //Posicionamiento de Cursor siempre al final de casilla cuentas
       $('.sec6-num-cuenta').click(function(){
          var SearchInput = $(this);
          var strLength= SearchInput.val().length * 2;

          SearchInput.focus();
          SearchInput[0].setSelectionRange(strLength, strLength);
       });

       //SECCION 6: VAlidacion de si es 0, 18 digitos o 0011
       jQuery.validator.addMethod("campo_18_digitos", function(value, element)
       {
          return this.optional(element) || value.length == 20 || value == '0011';
       }, "De ser llenado, el campo debe tener 18 dígitos exactos");


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