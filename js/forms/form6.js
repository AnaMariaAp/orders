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
            //Bloque 1
            num_doc_admin_1: {
              caraespecial: true,
               required: true,
               maxlength: 11
            },
            nom_usuario_mancomunado_1:{
               required: true,
               minlength: 4,
               maxlength: 80,
               lettersonly: true
            },
            email_usuario_mancomunado_1:{
               required:true,
               email: true
            },
            cod_usuario_mancomunado_1: {
              caraespecial: true,
               required: true,
               minlength:8,
               maxlength: 8
            },
            //Bloque 2
            num_doc_admin_2: {
              caraespecial: true,
               required: true,
               maxlength: 11
            },
            nom_usuario_mancomunado_2:{
              required: true,
              minlength: 4,
              maxlength: 80,
              lettersonly: true
            },
            email_usuario_mancomunado_2:{
               required:true,
               email: true
            },
            cod_usuario_mancomunado_2: {
              caraespecial: true,
               required: true,
               minlength:1,
               maxlength: 8
            },
            //BLOQUE LIMITES FIRMA CONJUNTA
           lim_firm_conjunta_1: {
             required: "#item_checkbox_lim_1:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_2: {
             required: "#item_checkbox_lim_2:checked",
             maxlength: 15,
             ilimitado: true

           },
           lim_firm_conjunta_3: {
             required: "#item_checkbox_lim_3:checked",
             maxlength: 15,
             ilimitado: true

           },
           lim_firm_conjunta_4: {
             required: "#item_checkbox_lim_4:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_5: {
             required: "#item_checkbox_lim_5:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_6:{
             required:"#item_checkbox_lim_6:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_7:{
             required:"#item_checkbox_lim_7:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_8:{
             required:"#item_checkbox_lim_8:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_9:{
             required:"#item_checkbox_lim_9:checked",
             maxlength: 15,
             ilimitado: true
           },
           box_chequera:{
             required:"#item_checkbox_lim_9:checked",
             maxlength: 6,
             number:true
           },
           lim_firm_conjunta_10:{
             required:"#item_checkbox_lim_10:checked",
             maxlength: 15,
             ilimitado: true

           },
           lim_firm_conjunta_11:{
             required:"#item_checkbox_lim_11:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_12:{
             required:"#item_checkbox_lim_12:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_13:{
             required:"#item_checkbox_lim_13:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_14:{
             required:"#item_checkbox_lim_14:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_15:{
             required:"#item_checkbox_lim_15:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_16:{
             required:"#item_checkbox_lim_16:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_17:{
             required:"#item_checkbox_lim_17:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_18:{
             required:"#item_checkbox_lim_18:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_19:{
             required:"#item_checkbox_lim_19:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_20:{
             required:"#item_checkbox_lim_20:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_21:{
             required:"#item_checkbox_lim_21:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_22:{
             required:"#item_checkbox_lim_22:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_23:{
             required:"#item_checkbox_lim_23:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_24:{
             required:"#item_checkbox_lim_24:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_25:{
             required:"#item_checkbox_lim_25:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_26:{
             required:"#item_checkbox_lim_26:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_27:{
             required:"#item_checkbox_lim_27:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_28:{
             required:"#item_checkbox_lim_28:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_29:{
             required:"#item_checkbox_lim_29:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_30:{
             required:"#item_checkbox_lim_30:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_31:{
             required:"#item_checkbox_lim_31:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_32:{
             required:"#item_checkbox_lim_32:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_33:{
             required:"#item_checkbox_lim_33:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_34:{
             required:"#item_checkbox_lim_34:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_35:{
             required:"#item_checkbox_lim_35:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_36:{
             required:"#item_checkbox_lim_36:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_37:{
             required:"#item_checkbox_lim_37:checked",
             maxlength: 15,
             ilimitado: true
           },
           lim_firm_conjunta_38:{
             required:"#item_checkbox_lim_38:checked",
             maxlength: 15,
             ilimitado: true
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
               maxlength: "Máximo 80 caracteres."
            },
             nom_usuario_mancomunado_1:{
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 80 caracteres."
            },
            nom_usuario_mancomunado_2:{
               minlength: "El campo debe tener al menos 4 caracteres.",
               maxlength: "Máximo 80 caracteres."
            },
             cod_usuario_mancomunado_1:{
               minlength: "Debe tener 8 dígitos.",
               maxlength: "Debe tener 8 dígitos."
            },
            cod_usuario_mancomunado_2:{
               minlength: "Debe tener 8 dígitos.",
               maxlength: "Debe tener 8 dígitos."
            },
            //SECCION 3
            admin_mancomunada:{
               required: "Elegir una opción de las tres disponibles.",
               minlength: "Elija una opción de las tres disponibles."
            },

            check_lim_firm_conjunta: {
               required: "Elegir por lo menos una opción."
            },
             //REPRESENTANTES LEGALES
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
            if(element.attr("name") == "check_lim_firm_conjunta" ){
               error.insertAfter("#box_error_form6_sec2");

            }else if(element.attr("name") == "val_usuario_admin" ){
               error.insertAfter("#box_error_form3_sec3_2");

            }else if(element.attr("name") == "admin_mancomunada" ){
               error.insertAfter("#box_error_form3_sec3_2");

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
     //$('#num_doc_admin_1').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_admin_2').simpleMask( { 'mask': '###########' } );


     // DNI VALIDACION
$('#tipo_doc_ident_1').change(function(){

$('#num_doc_admin_1').rules('remove','maxlength minlength number');

  if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

    $('#num_doc_admin_1').rules('remove','number');
    $('#num_doc_admin_1').attr('maxlength','11');
    $('#num_doc_admin_1').rules('add', {
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

    $('#num_doc_admin_1').val($('#num_doc_admin_1').val().substring(0,8));
    $('#num_doc_admin_1').attr('maxlength','8');
      
    $('#num_doc_admin_1').rules('add', {
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
	$('#num_doc_admin_1').rules('remove','number');
    $('#num_doc_admin_1').attr('maxlength','11');
    $('#num_doc_admin_1').rules("add", {
      maxlength: 11,
      messages: {
        maxlength: "Máximo 11 caracteres"
      }
    });
      
    $('#form').valid();
    return true;
  }

});


// DNI VALIDACION
$('#tipo_doc_ident_2').change(function(){

$('#num_doc_admin_2').rules('remove','maxlength minlength number');

  if (this.value == '1' || this.value == 4 || this.value == 5 || this.value == 6) {

    $('#num_doc_admin_2').rules('remove','number');
    $('#num_doc_admin_2').attr('maxlength','11');
    $('#num_doc_admin_2').rules('add', {
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

    $('#num_doc_admin_2').val($('#num_doc_admin_2').val().substring(0,8));
    $('#num_doc_admin_2').attr('maxlength','8');
      
    $('#num_doc_admin_2').rules('add', {
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
	$('#num_doc_admin_2').rules('remove','number');
    $('#num_doc_admin_2').attr('maxlength','11');
    $('#num_doc_admin_2').rules("add", {
      maxlength: 11,
      messages: {
        maxlength: "Máximo 11 caracteres"
      }
    });
      
    $('#form').valid();
    return true;
  }

});

     //SECCION Autorización Rep leg. empresa
     //$('#num_doc_rep_leg_1').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_rep_leg_2').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_rep_leg_3').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_rep_leg_4').simpleMask( { 'mask': '###########' } );



      $('#item_checkbox_lim_1').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_1').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_1').attr('disabled','disabled');
         $('#lim_firm_conjunta_1').val('');
       }

     });

      $('#item_checkbox_lim_2').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_2').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_2').attr('disabled','disabled');
         $('#lim_firm_conjunta_2').val('');
       }

     });





       $('#item_checkbox_lim_1').click(function(){

         if($(this).is(':checked')){

          $('input[name="check_lim_firm_conjunta"]').not(':eq(0)').prop('checked', false);
          $('input[name="check_lim_firm_conjunta"]').not(':eq(0)').removeAttr('checked');

          $('#lim_firm_conjunta_2-error').remove();
          $('#lim_firm_conjunta_3-error').remove();
          $('#lim_firm_conjunta_4-error').remove();
          $('#lim_firm_conjunta_5-error').remove();
          $('#lim_firm_conjunta_6-error').remove();
          $('#lim_firm_conjunta_7-error').remove();
          $('#lim_firm_conjunta_8-error').remove();
          $('#lim_firm_conjunta_9-error').remove();
          $('#lim_firm_conjunta_10-error').remove();
          $('#lim_firm_conjunta_11error').remove();
          $('#lim_firm_conjunta_12-error').remove();
          $('#lim_firm_conjunta_13-error').remove();
          $('#lim_firm_conjunta_14-error').remove();
          $('#lim_firm_conjunta_15-error').remove();
          $('#lim_firm_conjunta_16-error').remove();
          $('#lim_firm_conjunta_17-error').remove();
          $('#lim_firm_conjunta_18-error').remove();
          $('#lim_firm_conjunta_19-error').remove();
          $('#lim_firm_conjunta_20-error').remove();
          $('#lim_firm_conjunta_21-error').remove();
          $('#lim_firm_conjunta_22-error').remove();
          $('#lim_firm_conjunta_23-error').remove();
          $('#lim_firm_conjunta_24-error').remove();
          $('#lim_firm_conjunta_25-error').remove();
          $('#lim_firm_conjunta_26-error').remove();
          $('#lim_firm_conjunta_27-error').remove();
          $('#lim_firm_conjunta_28-error').remove();
          $('#lim_firm_conjunta_29-error').remove();
          $('#lim_firm_conjunta_30-error').remove();
          $('#lim_firm_conjunta_31-error').remove();
          $('#lim_firm_conjunta_32-error').remove();
          $('#lim_firm_conjunta_33-error').remove();
          $('#lim_firm_conjunta_34-error').remove();
          $('#lim_firm_conjunta_35-error').remove();
          $('#lim_firm_conjunta_36-error').remove();
          $('#lim_firm_conjunta_37-error').remove();
          $('#lim_firm_conjunta_38-error').remove();


          $('#lim_firm_conjunta_2').attr('disabled','disabled');
          $('#lim_firm_conjunta_2').val('');
          $('#lim_firm_conjunta_3').attr('disabled','disabled');
          $('#lim_firm_conjunta_3').val('');
          $('#lim_firm_conjunta_4').attr('disabled','disabled');
          $('#lim_firm_conjunta_4').val('');
          $('#lim_firm_conjunta_5').attr('disabled','disabled');
          $('#lim_firm_conjunta_5').val('');
          $('#lim_firm_conjunta_6').attr('disabled','disabled');
          $('#lim_firm_conjunta_6').val('');
          $('#lim_firm_conjunta_7').attr('disabled','disabled');
          $('#lim_firm_conjunta_7').val('');
          $('#lim_firm_conjunta_8').attr('disabled','disabled');
          $('#lim_firm_conjunta_8').val('');
          $('#lim_firm_conjunta_9').attr('disabled','disabled');
          $('#lim_firm_conjunta_9').val('');
          $('#lim_firm_conjunta_10').attr('disabled','disabled');
          $('#lim_firm_conjunta_10').val('');
          $('#lim_firm_conjunta_11').attr('disabled','disabled');
          $('#lim_firm_conjunta_11').val('');
          $('#lim_firm_conjunta_12').attr('disabled','disabled');
          $('#lim_firm_conjunta_12').val('');
          $('#lim_firm_conjunta_13').attr('disabled','disabled');
          $('#lim_firm_conjunta_13').val('');
          $('#lim_firm_conjunta_14').attr('disabled','disabled');
          $('#lim_firm_conjunta_14').val('');
          $('#lim_firm_conjunta_15').attr('disabled','disabled');
          $('#lim_firm_conjunta_15').val('');
          $('#lim_firm_conjunta_16').attr('disabled','disabled');
          $('#lim_firm_conjunta_16').val('');
          $('#lim_firm_conjunta_17').attr('disabled','disabled');
          $('#lim_firm_conjunta_17').val('');
          $('#lim_firm_conjunta_18').attr('disabled','disabled');
          $('#lim_firm_conjunta_18').val('');
          $('#lim_firm_conjunta_19').attr('disabled','disabled');
          $('#lim_firm_conjunta_19').val('');
          $('#lim_firm_conjunta_20').attr('disabled','disabled');
          $('#lim_firm_conjunta_20').val('');
          $('#lim_firm_conjunta_21').attr('disabled','disabled');
          $('#lim_firm_conjunta_21').val('');
          $('#lim_firm_conjunta_22').attr('disabled','disabled');
          $('#lim_firm_conjunta_22').val('');
          $('#lim_firm_conjunta_23').attr('disabled','disabled');
          $('#lim_firm_conjunta_23').val('');
          $('#lim_firm_conjunta_24').attr('disabled','disabled');
          $('#lim_firm_conjunta_24').val('');
          $('#lim_firm_conjunta_25').attr('disabled','disabled');
          $('#lim_firm_conjunta_25').val('');
          $('#lim_firm_conjunta_26').attr('disabled','disabled');
          $('#lim_firm_conjunta_26').val('');
          $('#lim_firm_conjunta_27').attr('disabled','disabled');
          $('#lim_firm_conjunta_27').val('');
          $('#lim_firm_conjunta_28').attr('disabled','disabled');
          $('#lim_firm_conjunta_28').val('');
          $('#lim_firm_conjunta_29').attr('disabled','disabled');
          $('#lim_firm_conjunta_29').val('');
          $('#lim_firm_conjunta_30').attr('disabled','disabled');
          $('#lim_firm_conjunta_30').val('');
          $('#lim_firm_conjunta_31').attr('disabled','disabled');
          $('#lim_firm_conjunta_31').val('');
          $('#lim_firm_conjunta_32').attr('disabled','disabled');
          $('#lim_firm_conjunta_32').val('');
          $('#lim_firm_conjunta_33').attr('disabled','disabled');
          $('#lim_firm_conjunta_33').val('');
          $('#lim_firm_conjunta_34').attr('disabled','disabled');
          $('#lim_firm_conjunta_34').val('');
          $('#lim_firm_conjunta_35').attr('disabled','disabled');
          $('#lim_firm_conjunta_35').val('');
          $('#lim_firm_conjunta_36').attr('disabled','disabled');
          $('#lim_firm_conjunta_36').val('');
          $('#lim_firm_conjunta_37').attr('disabled','disabled');
          $('#lim_firm_conjunta_37').val('');
          $('#lim_firm_conjunta_38').attr('disabled','disabled');
          $('#lim_firm_conjunta_38').val('');
          $('.segun-version-disable').addClass('disabled');


            $('#item_checkbox_lim_2').attr('disabled','disabled');
            $('#item_checkbox_lim_3').attr('disabled','disabled');
            $('#item_checkbox_lim_4').attr('disabled','disabled');
            $('#item_checkbox_lim_5').attr('disabled','disabled');
            $('#item_checkbox_lim_6').attr('disabled','disabled');
            $('#item_checkbox_lim_7').attr('disabled','disabled');
            $('#item_checkbox_lim_8').attr('disabled','disabled');
            $('#item_checkbox_lim_9').attr('disabled','disabled');
            $('#item_checkbox_lim_10').attr('disabled','disabled');
            $('#item_checkbox_lim_11').attr('disabled','disabled');
            $('#item_checkbox_lim_12').attr('disabled','disabled');
            $('#item_checkbox_lim_13').attr('disabled','disabled');
            $('#item_checkbox_lim_14').attr('disabled','disabled');
            $('#item_checkbox_lim_15').attr('disabled','disabled');
            $('#item_checkbox_lim_16').attr('disabled','disabled');
            $('#item_checkbox_lim_17').attr('disabled','disabled');
            $('#item_checkbox_lim_18').attr('disabled','disabled');
            $('#item_checkbox_lim_19').attr('disabled','disabled');
            $('#item_checkbox_lim_20').attr('disabled','disabled');
            $('#item_checkbox_lim_21').attr('disabled','disabled');
            $('#item_checkbox_lim_22').attr('disabled','disabled');
            $('#item_checkbox_lim_23').attr('disabled','disabled');
            $('#item_checkbox_lim_24').attr('disabled','disabled');
            $('#item_checkbox_lim_25').attr('disabled','disabled');
            $('#item_checkbox_lim_26').attr('disabled','disabled');
            $('#item_checkbox_lim_27').attr('disabled','disabled');
            $('#item_checkbox_lim_28').attr('disabled','disabled');
            $('#item_checkbox_lim_29').attr('disabled','disabled');
            $('#item_checkbox_lim_30').attr('disabled','disabled');
            $('#item_checkbox_lim_31').attr('disabled','disabled');
            $('#item_checkbox_lim_32').attr('disabled','disabled');
            $('#item_checkbox_lim_33').attr('disabled','disabled');
            $('#item_checkbox_lim_34').attr('disabled','disabled');
            $('#item_checkbox_lim_35').attr('disabled','disabled');
            $('#item_checkbox_lim_36').attr('disabled','disabled');
            $('#item_checkbox_lim_37').attr('disabled','disabled');
            $('#item_checkbox_lim_38').attr('disabled','disabled');

          // CHECK CHILDREN
          if (
            $('#item_checkbox_lim_2').is(':checked') ||
            $('#item_checkbox_lim_3').is(':checked') ||
            $('#item_checkbox_lim_4').is(':checked') ||
            $('#item_checkbox_lim_5').is(':checked') ||
            $('#item_checkbox_lim_6').is(':checked') ||
            $('#item_checkbox_lim_7').is(':checked') ||
            $('#item_checkbox_lim_8').is(':checked') ||
            $('#item_checkbox_lim_9').is(':checked') ||
            $('#item_checkbox_lim_10').is(':checked') ||
            $('#item_checkbox_lim_11').is(':checked') ||
            $('#item_checkbox_lim_12').is(':checked') ||
            $('#item_checkbox_lim_13').is(':checked') ||
            $('#item_checkbox_lim_14').is(':checked') ||
            $('#item_checkbox_lim_15').is(':checked') ||
            $('#item_checkbox_lim_16').is(':checked') ||
            $('#item_checkbox_lim_17').is(':checked') ||
            $('#item_checkbox_lim_18').is(':checked') ||
            $('#item_checkbox_lim_19').is(':checked') ||
            $('#item_checkbox_lim_20').is(':checked') ||
            $('#item_checkbox_lim_21').is(':checked') ||
            $('#item_checkbox_lim_22').is(':checked') ||
            $('#item_checkbox_lim_23').is(':checked') ||
            $('#item_checkbox_lim_24').is(':checked') ||
            $('#item_checkbox_lim_25').is(':checked')
          ) {

            // $('.segun-version-disable').removeClass('disabled');
            // $('#lim_firm_conjunta_1').removeAttr('disabled');
            // $('#lim_firm_conjunta_2').removeAttr('disabled');
            // $('#lim_firm_conjunta_3').removeAttr('disabled');
            // $('#lim_firm_conjunta_4').removeAttr('disabled');
            // $('#lim_firm_conjunta_5').removeAttr('disabled');
            // $('#lim_firm_conjunta_6').removeAttr('disabled');
            // $('#lim_firm_conjunta_7').removeAttr('disabled');
            // $('#lim_firm_conjunta_8').removeAttr('disabled');
            // $('#lim_firm_conjunta_9').removeAttr('disabled');
            // $('#lim_firm_conjunta_10').removeAttr('disabled');
            // $('#lim_firm_conjunta_11').removeAttr('disabled');
            // $('#lim_firm_conjunta_12').removeAttr('disabled');
            // $('#lim_firm_conjunta_13').removeAttr('disabled');
            // $('#lim_firm_conjunta_14').removeAttr('disabled');
            // $('#lim_firm_conjunta_15').removeAttr('disabled');
            // $('#lim_firm_conjunta_16').removeAttr('disabled');
            // $('#lim_firm_conjunta_17').removeAttr('disabled');
            // $('#lim_firm_conjunta_18').removeAttr('disabled');
            // $('#lim_firm_conjunta_19').removeAttr('disabled');
            // $('#lim_firm_conjunta_20').removeAttr('disabled');
            // $('#lim_firm_conjunta_21').removeAttr('disabled');
            // $('#lim_firm_conjunta_22').removeAttr('disabled');
            // $('#lim_firm_conjunta_23').removeAttr('disabled');
            // $('#lim_firm_conjunta_24').removeAttr('disabled');

          }




        }else {


                      $('#item_checkbox_lim_2').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_3').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_4').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_5').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_6').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_7').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_8').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_9').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_10').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_11').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_12').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_13').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_14').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_15').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_16').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_17').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_18').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_19').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_20').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_21').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_22').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_23').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_24').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_25').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_26').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_27').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_28').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_29').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_30').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_31').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_32').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_33').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_34').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_35').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_36').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_37').removeAttr('disabled','disabled');
            $('#item_checkbox_lim_38').removeAttr('disabled','disabled');

          $('.segun-version-disable').removeClass('disabled');
          // $('#lim_firm_conjunta_1').removeAttr('disabled');
          // $('#lim_firm_conjunta_2').removeAttr('disabled');
          // $('#lim_firm_conjunta_3').removeAttr('disabled');
          // $('#lim_firm_conjunta_4').removeAttr('disabled');
          // $('#lim_firm_conjunta_5').removeAttr('disabled');
          // $('#lim_firm_conjunta_6').removeAttr('disabled');
          // $('#lim_firm_conjunta_7').removeAttr('disabled');
          // $('#lim_firm_conjunta_8').removeAttr('disabled');
          // $('#lim_firm_conjunta_9').removeAttr('disabled');
          // $('#lim_firm_conjunta_10').removeAttr('disabled');
          // $('#lim_firm_conjunta_11').removeAttr('disabled');
          // $('#lim_firm_conjunta_12').removeAttr('disabled');
          // $('#lim_firm_conjunta_13').removeAttr('disabled');
          // $('#lim_firm_conjunta_14').removeAttr('disabled');
          // $('#lim_firm_conjunta_15').removeAttr('disabled');
          // $('#lim_firm_conjunta_16').removeAttr('disabled');
          // $('#lim_firm_conjunta_17').removeAttr('disabled');
          // $('#lim_firm_conjunta_18').removeAttr('disabled');
          // $('#lim_firm_conjunta_19').removeAttr('disabled');
          // $('#lim_firm_conjunta_20').removeAttr('disabled');
          // $('#lim_firm_conjunta_21').removeAttr('disabled');
          // $('#lim_firm_conjunta_22').removeAttr('disabled');
          // $('#lim_firm_conjunta_23').removeAttr('disabled');
          // $('#lim_firm_conjunta_24').removeAttr('disabled');
          // $('#lim_firm_conjunta_25').removeAttr('disabled');
          // $('#lim_firm_conjunta_26').removeAttr('disabled');
          // $('#lim_firm_conjunta_27').removeAttr('disabled');
          // $('#lim_firm_conjunta_28').removeAttr('disabled');
          // $('#lim_firm_conjunta_29').removeAttr('disabled');
          // $('#lim_firm_conjunta_30').removeAttr('disabled');
          // $('#lim_firm_conjunta_31').removeAttr('disabled');
          // $('#lim_firm_conjunta_32').removeAttr('disabled');
          // $('#lim_firm_conjunta_33').removeAttr('disabled');
          // $('#lim_firm_conjunta_34').removeAttr('disabled');
          // $('#lim_firm_conjunta_35').removeAttr('disabled');
          // $('#lim_firm_conjunta_36').removeAttr('disabled');
          // $('#lim_firm_conjunta_37').removeAttr('disabled');
          // $('#lim_firm_conjunta_38').removeAttr('disabled');

        }

      });



// SECCION 3 VALIDAR DNI



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



      $('#item_checkbox_lim_3').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_3').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_3').attr('disabled','disabled');
         $('#lim_firm_conjunta_3').val('');
       }

     });
      $('#item_checkbox_lim_4').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_4').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_4').attr('disabled','disabled');
         $('#lim_firm_conjunta_4').val('');
       }
     });
      $('#item_checkbox_lim_5').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_5').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_5').attr('disabled','disabled');
         $('#lim_firm_conjunta_5').val('');
       }
     });
      $('#item_checkbox_lim_6').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_6').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_6').attr('disabled','disabled');
         $('#lim_firm_conjunta_6').val('');
       }
     });
      $('#item_checkbox_lim_7').click(function(){
        if($(this).is(':checked')){
         $('#lim_firm_conjunta_7').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_7').attr('disabled','disabled');
         $('#lim_firm_conjunta_7').val('');
       }
     });
      $('#item_checkbox_lim_8').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_8').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_8').attr('disabled','disabled');
         $('#lim_firm_conjunta_8').val('');
       }
     });
      $('#item_checkbox_lim_9').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_9').removeAttr('disabled');
         $('#box_chequera').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_9').attr('disabled','disabled');
         $('#lim_firm_conjunta_9').val('');

         $('#box_chequera').attr('disabled','disabled');
         $('#box_chequera').val('');
       }
     });
      $('#item_checkbox_lim_10').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_10').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_10').attr('disabled','disabled');
         $('#lim_firm_conjunta_10').val('');
       }
     });
      $('#item_checkbox_lim_11').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_11').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_11').attr('disabled','disabled');
         $('#lim_firm_conjunta_11').val('');
       }
     });
      $('#item_checkbox_lim_12').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_12').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_12').attr('disabled','disabled');
         $('#lim_firm_conjunta_12').val('');
       }
     });
      $('#item_checkbox_lim_13').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_13').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_13').attr('disabled','disabled');
         $('#lim_firm_conjunta_13').val('');
       }
     });
      $('#item_checkbox_lim_14').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_14').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_14').attr('disabled','disabled');
         $('#lim_firm_conjunta_14').val('');
       }
     });
      $('#item_checkbox_lim_15').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_15').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_15').attr('disabled','disabled');
         $('#lim_firm_conjunta_15').val('');
       }
     });
      $('#item_checkbox_lim_16').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_16').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_16').attr('disabled','disabled');
         $('#lim_firm_conjunta_16').val('');
       }
     });
      $('#item_checkbox_lim_17').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_17').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_17').attr('disabled','disabled');
         $('#lim_firm_conjunta_17').val('');
       }
     });
      $('#item_checkbox_lim_18').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_18').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_18').attr('disabled','disabled');
         $('#lim_firm_conjunta_18').val('');
       }
     });
      $('#item_checkbox_lim_19').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_19').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_19').attr('disabled','disabled');
         $('#lim_firm_conjunta_19').val('');
       }
     });
      $('#item_checkbox_lim_20').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_20').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_20').attr('disabled','disabled');
         $('#lim_firm_conjunta_20').val('');
       }
     });
      $('#item_checkbox_lim_21').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_21').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_21').attr('disabled','disabled');
         $('#lim_firm_conjunta_21').val('');
       }
     });
      $('#item_checkbox_lim_22').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_22').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_22').attr('disabled','disabled');
         $('#lim_firm_conjunta_22').val('');
       }
     });
      $('#item_checkbox_lim_23').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_23').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_23').attr('disabled','disabled');
         $('#lim_firm_conjunta_23').val('');
       }
     });
      $('#item_checkbox_lim_24').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_24').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_24').attr('disabled','disabled');
         $('#lim_firm_conjunta_24').val('');
       }
     });
      $('#item_checkbox_lim_25').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_25').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_25').attr('disabled','disabled');
         $('#lim_firm_conjunta_25').val('');
       }
     });
      $('#item_checkbox_lim_26').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_26').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_26').attr('disabled','disabled');
         $('#lim_firm_conjunta_26').val('');
       }
     });
      $('#item_checkbox_lim_27').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_27').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_27').attr('disabled','disabled');
         $('#lim_firm_conjunta_27').val('');
       }
     });
      $('#item_checkbox_lim_28').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_28').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_28').attr('disabled','disabled');
         $('#lim_firm_conjunta_28').val('');
       }
     });
      $('#item_checkbox_lim_29').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_29').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_29').attr('disabled','disabled');
         $('#lim_firm_conjunta_29').val('');
       }
     });
      $('#item_checkbox_lim_30').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_30').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_30').attr('disabled','disabled');
         $('#lim_firm_conjunta_30').val('');
       }
     });
      $('#item_checkbox_lim_31').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_31').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_31').attr('disabled','disabled');
         $('#lim_firm_conjunta_31').val('');
       }
     });
      $('#item_checkbox_lim_32').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_32').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_32').attr('disabled','disabled');
         $('#lim_firm_conjunta_32').val('');
       }
     });
      $('#item_checkbox_lim_33').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_33').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_33').attr('disabled','disabled');
         $('#lim_firm_conjunta_33').val('');
       }
     });
      $('#item_checkbox_lim_34').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_34').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_34').attr('disabled','disabled');
         $('#lim_firm_conjunta_34').val('');
       }
     });
      $('#item_checkbox_lim_35').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_35').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_35').attr('disabled','disabled');
         $('#lim_firm_conjunta_35').val('');
       }
     });
      $('#item_checkbox_lim_36').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_36').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_36').attr('disabled','disabled');
         $('#lim_firm_conjunta_36').val('');
       }
     });

      $('#item_checkbox_lim_37').click(function(){
       if($(this).is(':checked')){
         $('#lim_firm_conjunta_37').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_37').attr('disabled','disabled');
         $('#lim_firm_conjunta_37').val('');
       }
     });

      $('#item_checkbox_lim_38').click(function(){

       if($(this).is(':checked')){
         $('#lim_firm_conjunta_38').removeAttr('disabled');

       }else {
         $('#lim_firm_conjunta_38').attr('disabled','disabled');
         $('#lim_firm_conjunta_38').val('');
       }
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