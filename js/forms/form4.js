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
            cod_usuario: {
              caraespecial: true,
               required: true,
               minlength:8,
               maxlength: 8
            },
            tipo_modificacion:{
              required:true
            },
            //SECCION 3
            nom_usuario_admin:{
               required: ".tipo_mod_required:checked",
               minlength: 4,
               maxlength: 30,
               lettersonly: true
            },
            email_usuario_admin:{
             required: ".tipo_mod_required:checked",
              email: true
            },
            tipo_doc_ident:{
              required: ".tipo_mod_required:checked"
            },
            num_doc_admin: {
              required: ".tipo_mod_required:checked",
              maxlength: 11
            },
            tel_admin_usuario:{
              required: ".tipo_mod_required:checked",
               maxlength: 11,
               number: true
            },

            //SECCION 4
            val_usuario_admin:{
              required: "#mod_perfil_usuario:checked",
              minlength: 1
            },
            admin_mancomunada:{
              required: "#val_usuario_admin_conjunta:checked",
              minlength: 1
            },

            num_doc_rep_leg_1: {
               required: ".tipo_mod_required:checked",
               maxlength: 11
            },
            cargo_rep_leg_1:{
               required: ".tipo_mod_required:checked",
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
            cod_usuario:{
              required: "Alfanumérico de 8 caracteres.",
               minlength: "8 caracteres alfanuméricos.",
               maxlength: "8 caracteres alfanuméricos."
            },
            tipo_modificacion:{
              required: "Elegir una opción de las tres disponibles.",
              minlength: "Elegir una opción de las tres disponibles."
            },

            //SECCION 3
            nom_usuario_admin:{
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 30 caracteres."
            },
            existe_usuario:{
              required: "Elegir una opción de las dos disponibles."
            },

            //SECCION 4
            val_usuario_admin:{
              required: "Elegir una opción de las dos disponibles.",
              minlength: "Elija una opción de las dos disponibles."
            },
            admin_mancomunada:{
               required: "Elegir una opción de las tres disponibles.",
               minlength: "Elija una opción de las tres disponibles."
            },

             //SECCION 9
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
         //FIN MENSAJES tipo_modificacion
         //Mensajes en sitios personalizados
         errorPlacement: function (error, element) {
            if(element.attr("name") == "existe_usuario" ){
               error.insertAfter("#box_error_form3_sec2");

            }else if(element.attr("name") == "val_usuario_admin" ){
               error.insertAfter("#box_error_form3_sec3_2");

            }else if(element.attr("name") == "admin_mancomunada" ){
               error.insertAfter("#box_error_form3_sec3_2");

            }else if(element.attr("name") == "tipo_modificacion" ){
               error.insertAfter("#box-error-sec2-error-1");

            }else {
               error.insertAfter(element);
            }
         }

      });
      //FIN JQUERY VALIDATE
       //Cambio de mensaje por defecto Jquery Validate
      jQuery.extend(jQuery.validator.messages, {
        required: 'Campo obligatorio.',
        email: 'Ingrese un email válido',
        number: "Ingrese solamente números.",
        maxlength: jQuery.validator.format("Hasta {0} dígitos."),
        minlength: jQuery.validator.format("Hasta {0} dígitos.")
      });

       //SECCION 1
       $('#num_ruc').simpleMask( { 'mask': '###########' } );
       $('#cod_empresa').simpleMask( { 'mask': '########' } );


       // SECCION 2 VALIDACION DE DNI

       // DNI VALIDACION
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


       //SECCION 3
       //$('#num_doc_admin').simpleMask( { 'mask': '###########' } );
       $('#tel_admin_usuario').simpleMask( { 'mask': '###########' } );

       //SECCION Autorización Rep leg. empresa
       //$('#num_doc_rep_leg_1').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_2').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_3').simpleMask( { 'mask': '###########' } );
       //$('#num_doc_rep_leg_4').simpleMask( { 'mask': '###########' } );

       //SECCION 2:Desactivar opciones y borrado de datos desactivados

       //En sección 2, para la modificación de datos solo se debe activar la sección 1,3 y 5
      $('#mod_datos_usuario').click(function(){
         $('.disabled-1').removeAttr('disabled');
         $('.disabled-3').removeAttr('disabled');
         //$('.disabled-2').attr('disabled','disabled');

         $('.disabled-1 input[type="text"]').removeAttr('disabled');
         $('.disabled-3 input[type="text"]').removeAttr('disabled');
         $('.disabled-2 input[type="radio"]').attr('disabled','disabled');

         $('#rep_leg_doc_1').removeAttr('disabled');

         $('input[name="val_usuario_admin"]').prop('checked', false);
         $('input[name="val_usuario_admin"]').removeAttr('checked');
         $('input[name="admin_mancomunada"]').prop('checked', false);
         $('input[name="admin_mancomunada"]').removeAttr('checked');

      });

      //En la sección 2, para la modificación del perfil solo se debe activar la sección 1,3, 4 y 5
      $('#mod_perfil_usuario').click(function(){
         $('.disabled-1').removeAttr('disabled');
         //$('.disabled-2').removeAttr('disabled');
         $('.disabled-3').removeAttr('disabled');

         $('.disabled-1 input[type="text"]').removeAttr('disabled');
         $('.disabled-2 input[name="val_usuario_admin"]').removeAttr('disabled');
         $('.disabled-3 input[type="text"]').removeAttr('disabled');

         $('#rep_leg_doc_1').removeAttr('disabled');
      });

      //En la sección 2, para la baja de usuario  solo se debe activar la sección 1,3 y 5
      $('#baja_usuario').click(function(){
         $('.disabled-1 input[type="text"]').removeAttr('disabled');
         $('.disabled-3 input[type="text"]').removeAttr('disabled');
         $('.disabled-2 input[type="radio"]').attr('disabled','disabled');

         $('.disabled-1').removeAttr('disabled');
         $('.disabled-3').removeAttr('disabled');
         //$('.disabled-2').attr('disabled','disabled');

         $('#rep_leg_doc_1').removeAttr('disabled');

         $('input[name="val_usuario_admin"]').prop('checked', false);
         $('input[name="val_usuario_admin"]').removeAttr('checked');
         $('input[name="admin_mancomunada"]').prop('checked', false);
         $('input[name="admin_mancomunada"]').removeAttr('checked');

      });


      //Activador radio buttons SECCION 4
      $('#dispo_token_si').click(function(){
         $('.dispo_token_si').removeAttr('disabled');
      });

       $('#dispo_token_no').click(function(){
         $('.dispo_token_si').attr('disabled','disabled');
      });

       //Activador radio buttons Form1 sección 4
      $('#val_usuario_admin_conjunta').click(function(){
         $('input[name="admin_mancomunada"]').removeAttr('disabled');
      });

       $('#val_usuario_admin_solidario').click(function(){
         $('input[name="admin_mancomunada"]').prop('checked', false);
         $('input[name="admin_mancomunada"]').removeAttr('checked');
         $('input[name="admin_mancomunada"]').attr('disabled','disabled');
      });


       // SECCION 5 VALIDAR DNI
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