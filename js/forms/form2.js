$(document).ready(function(){
   $('#form').validate({
      rules: {
         //SECCION 1
         razon_social_empresa: {
            minlength: 4,
            maxlength: 60,
            required: true
         },
         ruc_empresa: {
            required:true,
            maxlength: 11,
            minlength: 11,
            number: true
         },
         cuenta_princ_cargo:{
            required: true,
            minlength: 4,
            maxlength: 20
         },
         codigo_empresa: {
            required: true,
            minlength:8,
            maxlength: 8,
            number: true
         },

         //SECCION 2
         tipos_mod_check: {
               required:  "#mod_datos_empresa:checked",
               minlength: 1
         },

         //SECCION 3
         versiones_sistema:{
            required: "#mod_ver_emp:checked"
         },

         //SECCION 4
         tipo_admin_usuarios:{
            required: false,
            minlength: 1
         },
         admin_mancomunada: {
            required: "#admin_conjunta:checked",
            minlength: 1
         },

         //SECCION 5
         nombre_persona_contacto:{
            required:  true,
            minlength: 4,
            maxlength: 35

         },
         num_ident_persona_contacto: {
            required: true,
            maxlength: 11
         },
         email_persona_contacto:{
            required: true,
            email: true
         },

         // telefono_persona_contacto: {
         //   required: false,
         //   maxlength: 15,
         //   number: true
         // },

         //SECCION 6
         cuenta_empresa_1: {
            campo_18_digitos: true
         },
         cuenta_empresa_2:{
            campo_18_digitos: true
         },
         cuenta_empresa_3:{
           campo_18_digitos: true
         },
         cuenta_empresa_4:{
           campo_18_digitos: true
         },
         cuenta_empresa_5:{
           campo_18_digitos: true
         },
         cuenta_empresa_6:{
           campo_18_digitos: true
         },
         cuenta_empresa_7:{
           campo_18_digitos: true
         },
         cuenta_empresa_8:{
           campo_18_digitos: true
         },
         cuenta_empresa_9:{
           campo_18_digitos: true
         },
         cuenta_empresa_10:{
           campo_18_digitos: true
         },
         cuenta_empresa_11:{
           campo_18_digitos: true
         },
         cuenta_empresa_12:{
           campo_18_digitos: true
         },
         cuenta_empresa_13:{
           campo_18_digitos: true
         },
         cuenta_empresa_14:{
           campo_18_digitos: true
         },
         cuenta_empresa_15:{
           campo_18_digitos: true
         },
         cuenta_empresa_16:{
           campo_18_digitos: true
         },
         cuenta_empresa_17:{
           campo_18_digitos: true
         },
         cuenta_empresa_18:{
           campo_18_digitos: true
         },
         cuenta_empresa_19:{
           campo_18_digitos: true
         },
         cuenta_empresa_20:{
           campo_18_digitos: true
         },

         //SECCION 7
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
           //campo_vacio: 'cuenta_pre_inscrita_nom_1'
         },
         cuenta_pre_inscrita_nom_2: {
           minlength: 4,
           maxlength: 80
           //campo_vacio: 'cuenta_pre_inscrita_nom_2'
         },
         cuenta_pre_inscrita_nom_3: {
           minlength: 4,
           maxlength: 80
           //campo_vacio: 'cuenta_pre_inscrita_nom_3'
         },
         cuenta_pre_inscrita_nom_4: {
           minlength: 4,
           maxlength: 80
           //campo_vacio: 'cuenta_pre_inscrita_nom_4'
         },
         cuentas_pre_inscritas_1: {
            un_checkbox_1: true
         },
         cuentas_pre_inscritas_2: {
            un_checkbox_2: true
         },
         cuentas_pre_inscritas_3: {
            un_checkbox_3: true
         },
         cuentas_pre_inscritas_4: {
            un_checkbox_4: true
         },
          //SECCION 8
          limite_transaccion: {
            required: "#mod_lim_ser:checked"
         },

         limite_diario: {
             required: "#mod_lim_ser:checked",
             numero_mayor: '#limite_transaccion'
          },
         limite_mensual: {
            required: "#mod_lim_ser:checked",
            numero_mayor: '#limite_diario'
         },
         num_doc_rep_leg_1: {
            maxlength: 11
         },
         cargo_rep_leg_1:{
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

         cuenta_pre_inscrita_num_1:{
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular',
           required: 'Se requiere el Nombre del Titular'
         },


         cuenta_pre_inscrita_num_2:{
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular',
           required: 'Se requiere el Nombre del Titular'
         },

         cuenta_pre_inscrita_num_3:{
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular',
           required: 'Se requiere el Nombre del Titular'
         },

         cuenta_pre_inscrita_num_4:{
           minlength: "Ingrese 18 dígitos exactos.",
           maxlength: "Ingrese 18 dígitos exactos.",
           campo_vacio: 'Se requiere el Nombre del Titular',
           required: 'Se requiere el Nombre del Titular'
         },


         radio_cuenta_empresa_1:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_2:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_3:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_4:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_5:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_6:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_7:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_8:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_9:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_10:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_11:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_12:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_13:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_14:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_15:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_16:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_17:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_18:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_19:{
            required: "Elegir Agregar o Eliminar"
         },
         radio_cuenta_empresa_20:{
            required: "Elegir Agregar o Eliminar"
         },
         cuentas_pre_inscritas_1:{
            required: "Elegir Agregar o Eliminar"
         },
         //SECCION 1
         razon_social_empresa:{
            minlength: "El campo debe tener al menos 4 caracteres.",
            maxlength: "Máximo 60 caracteres."
         },
         ruc_empresa:{
            maxlength: "Ingrese 11 dígitos exactos.",
            minlength: "Ingrese 11 dígitos exactos."
         },
         cuenta_princ_cargo:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos.",
            required: "Campo requerido"
         },
         codigo_empresa:{
            required: "Campo obligatorio.",
            minlength: "El número debe tener 8 dígitos.",
            maxlength: "El número debe tener 8 dígitos."
         },
         //SECCION 2
         tipos_modif:{
            required: "Elegir una de las dos opciones"
         },
         mod_dat_basicos:{
            required: "Elegir al menos una opción"
         },
         tipos_mod_check:{
            required: "Elegir al menos una opción"
         },
         //SECCION 3
         versiones_sistema:{
            required: "Elegir una opción de las cinco disponibles."
         },
         //SECCION 4
         tipo_admin_usuarios:{
            required: "Elegir una opción de las dos disponibles.",
            minlength: "Elija una opción de las dos disponibles."
         },
         admin_mancomunada:{
            required: "Elegir una opción de las tres disponibles.",
            minlength: "Elija una opción de las tres disponibles."
         },
         //SECCION 5
         nombre_persona_contacto:{
            required: "Campo obligatorio, máximo 35 caracteres.",
            minlength: "El campo debe tener al menos 4 caracteres.",
            maxlength: "Máximo 35 caracteres."
         },
         num_ident_persona_contacto:{
            required: "Campo obligatorio.",
            maxlength: "Máximo 11 caracteres."
         },
         //  telefono_persona_contacto: {
         //   maxlength: "Máximo 15 caracteres, sólo números."
         // },
         //SECCION 6
         cuenta_empresa_1:{
            required: "Campo obligatorio, 18 dígitos exactos.",
            minlength: "Campo obligatorio, 18 dígitos exactos.",
            maxlength: "Campo obligatorio, 18 dígitos exactos."
         },
         cuenta_empresa_2:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_3:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_4:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_5:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_6:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_7:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_8:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_9:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_10:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_11:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_12:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_13:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_14:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_15:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_16:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_17:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_18:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_19:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         cuenta_empresa_20:{
            minlength: "Ingrese 18 dígitos exactos.",
            maxlength: "Ingrese 18 dígitos exactos."
         },
         //SECCION 7
         cuenta_pre_inscrita_nom_1:{
            maxlength: "Máximo 80 caracteres."
         },
         cuenta_pre_inscrita_nom_2:{
            maxlength: "Máximo 80 caracteres."
         },
         cuenta_pre_inscrita_nom_3:{
            maxlength: "Máximo 80 caracteres."
         },
         cuenta_pre_inscrita_nom_4:{
            maxlength: "Máximo 80 caracteres."
         },
          //SECCION 8
          limite_transaccion:{
            maxlength: "Máximo 12 digitos."
         },
         limite_diario:{
            maxlength: "Máximo 12 digitos.",
            numero_mayor: "Límite Diario debe ser mayor o igual al Límite por Transacción"
         },
         limite_mensual:{
            maxlength: "Máximo 12 digitos.",
            numero_mayor: "Límite Mensual debe ser mayor o igual al Límite Diario"
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
      //"box-error-sec3
      errorPlacement: function (error, element) {
         if(element.attr("name") == "tipos_modif" ){
            error.insertAfter("#box-error-sec2-error-1");

         }else if(element.attr("name") == "versiones_sistema" ){
            error.insertAfter("#box-error-sec3");

         }else if(element.attr("name") == "tipo_admin_usuarios" ){
            error.insertAfter("#box-error-sec4-error-1");

         }else if(element.attr("name") == "admin_mancomunada" ){
            error.insertAfter("#box-error-sec4-error-1");

         }else if(element.attr("name") == "tipos_mod_check" ){
            error.insertAfter("#box-error-sec2-error-2");

         }else if(element.attr("name") == "radio_cuenta_empresa_1" ){
            error.insertAfter(".error_1");

         }else if(element.attr("name") == "radio_cuenta_empresa_2" ){
            error.insertAfter(".error_2");

         }else if(element.attr("name") == "radio_cuenta_empresa_3" ){
            error.insertAfter(".error_3");

         }else if(element.attr("name") == "radio_cuenta_empresa_4" ){
            error.insertAfter(".error_4");

         }else if(element.attr("name") == "radio_cuenta_empresa_5" ){
            error.insertAfter(".error_5");

         }else if(element.attr("name") == "radio_cuenta_empresa_6" ){
            error.insertAfter(".error_6");

         }else if(element.attr("name") == "radio_cuenta_empresa_7" ){
            error.insertAfter(".error_7");

         }else if(element.attr("name") == "radio_cuenta_empresa_8" ){
            error.insertAfter(".error_8");

         }else if(element.attr("name") == "radio_cuenta_empresa_9" ){
            error.insertAfter(".error_9");

         }else if(element.attr("name") == "radio_cuenta_empresa_10" ){
            error.insertAfter(".error_10");

         }else if(element.attr("name") == "radio_cuenta_empresa_11" ){
            error.insertAfter(".error_11");

         }else if(element.attr("name") == "radio_cuenta_empresa_12" ){
            error.insertAfter(".error_12");

         }else if(element.attr("name") == "radio_cuenta_empresa_13" ){
            error.insertAfter(".error_13");

         }else if(element.attr("name") == "radio_cuenta_empresa_14" ){
            error.insertAfter(".error_14");

         }else if(element.attr("name") == "radio_cuenta_empresa_15" ){
            error.insertAfter(".error_15");

         }else if(element.attr("name") == "radio_cuenta_empresa_16" ){
            error.insertAfter(".error_16");

         }else if(element.attr("name") == "radio_cuenta_empresa_17" ){
            error.insertAfter(".error_17");

         }else if(element.attr("name") == "radio_cuenta_empresa_18" ){
            error.insertAfter(".error_18");

         }else if(element.attr("name") == "radio_cuenta_empresa_19" ){
            error.insertAfter(".error_19");

         }else if(element.attr("name") == "radio_cuenta_empresa_20" ){
            error.insertAfter(".error_20");

         }else if(element.attr("name") == "cuentas_pre_inscritas_1" ){
            error.insertAfter(".error_21");

         }else if(element.attr("name") == "cuentas_pre_inscritas_2" ){
            error.insertAfter(".error_22");

         }else if(element.attr("name") == "cuentas_pre_inscritas_3" ){
            error.insertAfter(".error_23");

         }else if(element.attr("name") == "cuentas_pre_inscritas_4" ){
            error.insertAfter(".error_24");

         }else {
            error.insertAfter(element);
         }
      }
   });
   //FIN JQUERY VALIDATE

   // LIMITES DE SERVICIOS
   $('#limite_transaccion, #limite_diario, #limite_mensual').on('change keyup', function(){

     $('#limite_transaccion, #limite_diario, #limite_mensual').valid();
   });




   //Cambio de mensaje por defecto Jquery Validate
   jQuery.extend(jQuery.validator.messages, {
       required: 'Campo obligatorio.',
       email: 'Por favor ingrese un email válido',
       number: "Por favor ingrese solamente números.",
       require_from_group: $.validator.format( "Seleccionar al menos {0} opción." )
   });

   //SECCION 6: VAlidacion de si es 0, 18 digitos o 0011
   jQuery.validator.addMethod("campo_18_digitos", function(value, element)
   {
      return this.optional(element) || value.length == 20 || value == '0011';
   }, "De ser llenado, el campo debe tener 18 dígitos exactos");


   //SECCION 7
   $.validator.addMethod("un_checkbox_1", function(value, element) {
       if($(".un_checkbox_1:radio:checked").length == 1){
          return true;
      }else {
          return false;
      }
   },"Seleccionar sólo una opción, Agregar o Eliminar");

   $.validator.addMethod("un_checkbox_2", function(value, element) {
       if($(".un_checkbox_2:radio:checked").length == 1){
          return true;
      }else {
          return false;
      }
   },"Seleccionar sólo una opción, Agregar o Eliminar");

   $.validator.addMethod("un_checkbox_3", function(value, element) {
       if($(".un_checkbox_3:radio:checked").length == 1){
          return true;
      }else {
          return false;
      }
   },"Seleccionar sólo una opción, Agregar o Eliminar");

   $.validator.addMethod("un_checkbox_4", function(value, element) {
       if($(".un_checkbox_4:radio:checked").length == 1){
          return true;
      }else {
          return false;
      }
   },"Seleccionar sólo una opción, Agregar o Eliminar");



   $('#cuenta_pre_inscrita_num_1, #cuenta_pre_inscrita_nom_1').keyup(function(){

      var num_cuenta    = $('input#cuenta_pre_inscrita_num_1').val().length;
      var nombre        = $('input#cuenta_pre_inscrita_nom_1').val().length;
      var checkbox_item = $('input[name="cuentas_pre_inscritas_1"]');

      if(num_cuenta == 20 && nombre > 0 ){
         checkbox_item.removeAttr('disabled');
         $('label#cuentas_pre_inscritas_1-error').css('display','initial');

      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#cuentas_pre_inscritas_1-error').css('display','none');
      }
      $('#cuenta_pre_inscrita_num_1').valid();
      $('#cuenta_pre_inscrita_nom_1').valid();
   });

   $('#cuenta_pre_inscrita_num_2, #cuenta_pre_inscrita_nom_2').keyup(function(){

      var num_cuenta    = $('input#cuenta_pre_inscrita_num_2').val().length;
      var nombre        = $('input#cuenta_pre_inscrita_nom_2').val().length;
      var checkbox_item = $('input[name="cuentas_pre_inscritas_2"]');

      if(num_cuenta == 20 && nombre > 0 ){
         checkbox_item.removeAttr('disabled');
         $('label#cuentas_pre_inscritas_2-error').css('display','initial');

      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         $('label#cuentas_pre_inscritas_2-error').css('display','none');
      }
      $('#cuenta_pre_inscrita_num_2').valid();
      $('#cuenta_pre_inscrita_nom_2').valid();

   });

   $('#cuenta_pre_inscrita_num_3, #cuenta_pre_inscrita_nom_3').keyup(function(){

      var num_cuenta    = $('input#cuenta_pre_inscrita_num_3').val().length;
      var nombre        = $('input#cuenta_pre_inscrita_nom_3').val().length;
      var checkbox_item = $('input[name="cuentas_pre_inscritas_3"]');

      if(num_cuenta == 20 && nombre > 0 ){
         checkbox_item.removeAttr('disabled');
         $('label#cuentas_pre_inscritas_3-error').css('display','initial');

      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#cuentas_pre_inscritas_3-error').css('display','none');
      }
      $('#cuenta_pre_inscrita_num_3').valid();
      $('#cuenta_pre_inscrita_nom_3').valid();

   });

   $('#cuenta_pre_inscrita_num_4, #cuenta_pre_inscrita_nom_4').keyup(function(){

      var num_cuenta    = $('input#cuenta_pre_inscrita_num_4').val().length;
      var nombre        = $('input#cuenta_pre_inscrita_nom_4').val().length;
      var checkbox_item = $('input[name="cuentas_pre_inscritas_4"]');

      if(num_cuenta == 20 && nombre > 0 ){
         checkbox_item.removeAttr('disabled');
         $('label#cuentas_pre_inscritas_4-error').css('display','initial');

      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#cuentas_pre_inscritas_4-error').css('display','none');
      }
      $('#cuenta_pre_inscrita_num_4').valid();
      $('#cuenta_pre_inscrita_nom_4').valid();

   });


   //SECCION 6: Validacion Agregar o Modificar
   $('#cuenta_empresa_1').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_1"]');

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_1-error').css('display','initial');

      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_1-error').css('display','none');
      }
   });

   $('#cuenta_empresa_2').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_2"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_2-error').css('display','initial');

      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_2-error').css('display','none');
      }
   });

   $('#cuenta_empresa_3').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_3"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_3-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_3-error').css('display','none');

      }
   });

   $('#cuenta_empresa_4').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_4"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_4-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_4-error').css('display','none');

      }
   });

     $('#cuenta_empresa_5').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_5"]');

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_5-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_5-error').css('display','none');

      }
   });

   $('#cuenta_empresa_6').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_6"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_6-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_6-error').css('display','none');

      }
   });

   $('#cuenta_empresa_7').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_7"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_7-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_7-error').css('display','none');

      }
   });

  $('#cuenta_empresa_8').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_8"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_8-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_8-error').css('display','none');

      }
   });

  $('#cuenta_empresa_9').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_9"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_9-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_9-error').css('display','none');

      }
   });

  $('#cuenta_empresa_10').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_10"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_10-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_10-error').css('display','none');

      }
   });

  $('#cuenta_empresa_11').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_11"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_11-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_11-error').css('display','none');

      }
   });

  $('#cuenta_empresa_12').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_12"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_12-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_12-error').css('display','none');

      }
   });

  $('#cuenta_empresa_13').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_13"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_13-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_13-error').css('display','none');

      }
   });

  $('#cuenta_empresa_14').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_14"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_14-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_14-error').css('display','none');

      }
   });

  $('#cuenta_empresa_15').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_15"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_15-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_15-error').css('display','none');

      }
   });

  $('#cuenta_empresa_16').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_16"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_16-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_16-error').css('display','none');

      }
   });

  $('#cuenta_empresa_17').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_17"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_17-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_17-error').css('display','none');

      }
   });

  $('#cuenta_empresa_18').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_18"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_18-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_18-error').css('display','none');

      }
   });

  $('#cuenta_empresa_19').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_19"]')

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_19-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_19-error').css('display','none');

      }
   });

  $('#cuenta_empresa_20').keyup(function(){

      var checkbox_item = $('input[name="radio_cuenta_empresa_20"]');

      if($(this).val().length == 20){
         checkbox_item.removeAttr('disabled');
         $('label#radio_cuenta_empresa_20-error').css('display','initial');
      }else{
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         $('label#radio_cuenta_empresa_20-error').css('display','none');

      }
   });

  // $('#baja_empresa_existente').click(function(){

  //     $('#nombre_persona_contacto').rules("remove");
  //     $('#tipo_doc_ident').rules("remove");
  //     $('#email_persona_contacto').rules("remove");
  //     $('#num_ident_persona_contacto').rules("remove");


  //     $('#nombre_persona_contacto').attr("disabled",'');
  //     $('#tipo_doc_ident').attr("disabled",'');
  //     $('#email_persona_contacto').attr("disabled",'');
  //     $('#num_ident_persona_contacto').attr("disabled",'');

  // });

  /*$('#mod_datos_empresa').click(function(){

   $('#nombre_persona_contacto').rules("remove");
   $('#tipo_doc_ident').rules("remove");
   $('#email_persona_contacto').rules("remove");
   $('#num_ident_persona_contacto').rules("remove");


      $('#nombre_persona_contacto').removeAttr("disabled");
      $('#tipo_doc_ident').removeAttr("disabled");
      $('#email_persona_contacto').removeAttr("disabled");
      $('#num_ident_persona_contacto').removeAttr("disabled");

      $('#admin-mancomunada-items').attr('disabled', 'disabled');


      $('#nombre_persona_contacto').rules("add", {
         required:  true,
         minlength: 4,
         maxlength: 35,
        messages: {
         required: "Campo obligatorio, máximo 35 caracteres.",
         minlength: "El campo debe tener al menos 4 caracteres.",
         maxlength: "Máximo 35 caracteres."
        }
      });

      $('#tipo_doc_ident').rules("add", {
         required:  true
      });

      $('#email_persona_contacto').rules("add", {
         required: true,
         email: true
      });

      $('#num_ident_persona_contacto').rules("add", {
        required:  true,
        maxlength: 11,
        messages: {
            required: "Campo obligatorio, máximo 11 números.",
            maxlength: "Máximo 11 caracteres, sólo números."
        }
      });
  });*/

   //SECCION 2 TIPO DE MODIFICACIOn
   // $('#mod_dat_basicos').click(function(){


   //    $('#nombre_persona_contacto').val("");
   //    $('#tipo_doc_ident').val("");
   //    $('#email_persona_contacto').val("");
   //    $('#num_ident_persona_contacto').val("");

   // });

   //SECCION 1
   //RUC EMPRESA
   $('#ruc_empresa').simpleMask( { 'mask': '###########' } );
   $('#codigo_empresa').simpleMask( { 'mask': '########' } );

   //SECCION 5
   //$('#num_ident_persona_contacto').simpleMask( { 'mask': '###########' } );
   //TELEFONO
   // $('#telefono_persona_contacto').simpleMask({
   //   'mask': '###############'
   // });

   // DNI VALIDACION
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




   //SECCION Autorización Rep leg. empresa
   /*$('#num_doc_rep_leg_1').simpleMask( { 'mask': '###########' } );
   $('#num_doc_rep_leg_2').simpleMask( { 'mask': '###########' } );
   $('#num_doc_rep_leg_3').simpleMask( { 'mask': '###########' } );
   $('#num_doc_rep_leg_4').simpleMask( { 'mask': '###########' } );*/

   //Validación cifras con guiones
   $('#cuenta_princ_cargo').simpleMask( { 'mask': '####-####-##########' } );

   //Validación cifras con guiones form1-sec5
   $('.form1-sec5 .form-control').simpleMask( { 'mask': '####-####-##########' } );

   //Posicionamiento de Cursor siempre al final de casilla cuentas
   $('.form1-sec5 .form-control').click(function(){
      var SearchInput = $(this);
      var strLength= SearchInput.val().length * 2;

      SearchInput.focus();
      // SearchInput[0].setSelectionRange(strLength, strLength);
   });

   //Validación cifras con guiones form1-sec6
   $('.form1-sec6 .sec6-num-cuenta').simpleMask( { 'mask': '####-####-##########' } );
   $('.form1-sec6 .sec6-num-cuenta').click(function(){
      var SearchInput = $(this);
      var strLength= SearchInput.val().length * 2;

      SearchInput.focus();
      SearchInput[0].setSelectionRange(strLength, strLength);
   });

   //Activador radio buttons Form1 sección 4
   $('#admin_conjunta').click(function(){
      $('fieldset #admin-mancomunada-items input[name="admin_mancomunada"]').removeAttr('disabled');
   });

   $('#admin_indistinta').click(function(){
      $('fieldset #admin-mancomunada-items input[name="admin_mancomunada"]').attr('disabled','disabled');
      $('input[name="admin_mancomunada"]').prop('checked', false);
      $('input[name="admin_mancomunada"]').removeAttr('checked');
   });


    //SECCION 1: Validación de repeticíon de campos
      // $('#cuenta_princ_cargo').blur(function(){

      //    var campo1 = $('#cuenta_princ_cargo').val();
      //    var campo2 = $('#cuenta_empresa_1').val();

      //    if( campo2 == '0011'){
      //       $('#cuenta_empresa_1').val(campo1);
      //    }

      //    $(this).data('old', $(this).data('new') || '');
      //    $(this).data('new', $(this).val());

      //    var old_campo1 = $(this).data("old");
      //    var new_campo1 = $(this).data("new");

      //    if(old_campo1 == campo2) {
      //       $('#cuenta_empresa_1').val(new_campo1);
      //    }

      // });

   //SECCION 2: Activar y desactivar Secciones
   // mod_datos_empresa
   $('#item_checkbox_lim_1').click(function(){
     if($(this).is(':checked')){
      $('#lim_firm_conjunta_1').removeAttr('disabled');
      $('#eliminar_item_1').removeAttr('disabled');
      $('#modificar_item_1').removeAttr('disabled');

    }else {
      $('#lim_firm_conjunta_1').attr('disabled','disabled');
      $('#lim_firm_conjunta_1').val('');

      $('#eliminar_item_1').attr('disabled','disabled');
      $('input[name="eliminar_item_1"]').prop('checked', false);
      $('input[name="modificar_item_1"]').prop('checked', false);

      $('input[name="eliminar_item_1"]').removeAttr('checked');
      $('input[name="modificar_item_1"]').removeAttr('checked');
    }

  });
   //Modificar Versión de la Empresa / Sección 3
   $('#mod_ver_emp').click(function(){
      if($(this).is(':checked')){
         $('.disabled-1 input[type="radio"]').removeAttr('disabled');
         $('.ie6 .disabled-1 input, .ie7 .disabled-1 input, .ie8 .disabled-1 input, .ie9 .disabled-1 input').removeAttr('disabled');

      }else {
         $('.disabled-1 input[type="radio"]').attr('disabled','disabled');
         $('.ie6 .disabled-1 input, .ie7 .disabled-1 input, .ie8 .disabled-1 input, .ie9 .disabled-1 input').attr('disabled','disabled');
         $('input[name="versiones_sistema"]').prop('checked', false);
         $('input[name="versiones_sistema"]').removeAttr('checked');
      }
   });

   //Modificar Tipo de Administración de la Empresa / Sección 4
   $('#mod_tipo_admin_emp').click(function(){
      if($(this).is(':checked')){
         $('.disabled-2 input[name="tipo_admin_usuarios"]').removeAttr('disabled');
		 $('input[name="adm_avanzada_check"]').removeAttr('disabled');
		 
         //$('.ie6 .disabled-2 input, .ie7 .disabled-2 input, .ie8 .disabled-2 input, .ie9 .disabled-2 input').removeAttr('disabled');

      }else {
         $('.disabled-2 input[type="radio"]').attr('disabled','disabled');
         //$('.ie6 .disabled-2 input, .ie7 .disabled-2 input, .ie8 .disabled-2 input, .ie9 .disabled-2 input').attr('disabled','disabled');
         $('input[name="tipo_admin_usuarios"]').prop('checked', false);
         $('input[name="admin_mancomunada"]').prop('checked', false);
		 $('input[name="tipo_admin_usuarios"]').removeAttr('checked');
         $('input[name="admin_mancomunada"]').removeAttr('checked');
		 $('input[name="adm_avanzada_check"]').attr('disabled','disabled');
		 $('input[name="adm_avanzada_check"]').removeAttr('checked');
      }
   });

   //Modificar Cuentas de la Empresa / Sección 6
    $('#mod_cuentas_emp').click(function(){

        if($(this).is(':checked')) {
            //$('.disabled-4').removeAttr('disabled');
            $('.disabled-4 input[type="text"]').removeAttr('disabled');
            $('.disabled-4 input[type="radio"]').attr('required','required');
        }else {
            //$('.disabled-4').attr('disabled','disabled');
            $('.disabled-4 input[type="text"]').attr('disabled','disabled');
            $('.disabled-4 input[type="text"]').val('0011');
            $('.disabled-4 input[type="radio"]').prop('checked', false);
            $('.disabled-4 input[type="radio"]').removeAttr('checked');
        }

        $('.disabled-4 input[type="radio"]').attr('disabled','disabled');
   });

   //Modificar Cuentas Pre Inscritas / Sección 7
   $('#mod_cuentas_pre_ins').click(function(){
        if($(this).is(':checked')){
            //$('.disabled-5').removeAttr('disabled');
            $('#cuenta_pre_inscrita_num_1').val('0011');
            $('.disabled-5 input[type=text]').removeAttr('disabled');
        } else {
            $('#cuenta_pre_inscrita_num_1').val('0011');
            $('#cuenta_pre_inscrita_num_1').valid();
            //$('.disabled-5').attr('disabled','disabled');
            $('.disabled-5 input[type=text]').attr('disabled','disabled');
            $('.disabled-5 input.act-0011').val('0011');
            $('.disabled-5 input.des-0011').val('');
            $('.disabled-5 input[type="radio"]').prop('checked', false);
            $('.disabled-5 input[type="radio"]').removeAttr('checked');
        }

        $('.disabled-5 input[type="radio"]').attr('disabled','disabled');
   });

   // Modificar Límites de Servicios / Sección 8
   $('#mod_lim_ser').click(function(){
      if( $('#mod_lim_ser').is(':checked') ){
         //$('.disabled-6').removeAttr('disabled');
         $('.disabled-6 input[type=text]').removeAttr('disabled');
         $('input.decimales_lim').mask("000,000,000,000", {reverse: true});

      }else{
         //$('.disabled-6').attr('disabled','disabled');
         $('.disabled-6 input[type=text]').attr('disabled','disabled');
         $('input.decimales_lim').val('');
      }
   });

   //Activar Seccion 2
    $('#mod_datos_empresa').click(function(){
        $('.disabled-0 input[type="checkbox"]').prop('checked', false);
        $('.disabled-0 input[type="checkbox"]').removeAttr('checked');
        $('.disabled-0 input[type="checkbox"]').removeAttr('disabled');

    });

    var check_cuenta = false;
   // SECCION 2 :TIPOS DE MODIFICACIÓN
   $('#mod_cuentas_emp').on('click', function(){

      if (!check_cuenta) {
         $('#cuenta_empresa_1').val('0011');
         check_cuenta=true;
         return true;
      }

      if (check_cuenta) {
         $('#cuenta_empresa_1').val('0011');
         check_cuenta = false;
         return true;

      }

   }); 

   /*$('#mod_cuentas_pre_ins').click(function(){

      // if ($('#cuenta_pre_inscrita_num_1').val().length == 4) {
      //    $('#cuenta_pre_inscrita_num_1').val('0011 1');
      //    return true;
      // }else{
      //    $('#cuenta_pre_inscrita_num_1').val('0011');
      //    return true;
      // }

   });*/


   // SECCION 9 : autorizacion DNI
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


    //SECCION 2: Desactivar y borrar todo cuando se activa Eliminar baja_empresa_existente
   //baja_empresa_existente
   $('#baja_empresa_existente').click(function(){
      $('.disabled-0 input[type="checkbox"]').prop('checked', false);
      $('.disabled-0 input[type="checkbox"]').removeAttr('checked');
      $('.disabled-0 input[type="checkbox"]').attr('disabled','disabled');
      $('.disabled-1 input[type="radio"]').attr('disabled','disabled');
      $('.disabled-2 input[type="radio"]').attr('disabled','disabled');
      $('.disabled-1 input[type="radio"]').prop('checked', false);
      $('.disabled-1 input[type="radio"]').removeAttr('checked');
      $('.disabled-2 input[type="radio"]').prop('checked', false);
      $('.disabled-2 input[type="radio"]').removeAttr('checked');

      //$('.disabled-4').attr('disabled','disabled');
      $('.disabled-4 input[type="radio"]').removeAttr('required');
      $('.disabled-4 input[type="text"]').val('0011');
      $('.disabled-4 input[type="text"]').attr('disabled','disabled');
      $('.disabled-4 input[type="radio"]').prop('checked', false);
      $('.disabled-4 input[type="radio"]').removeAttr('checked');
      $('.disabled-4 input[type="radio"]').attr('disabled','disabled');

      //$('.disabled-5').attr('disabled','disabled');
      $('.disabled-5 input.act-0011').val('0011');
      $('.disabled-5 input.des-0011').val('');
      $('.disabled-5 input[type="text"]').attr('disabled','disabled');
      $('.disabled-5 input[type="radio"]').prop('checked', false);
      $('.disabled-5 input[type="radio"]').removeAttr('checked');
      $('.disabled-5 input[type="radio"]').attr('disabled','disabled');

      //$('.disabled-6').attr('disabled','disabled');
      $('input.decimales_lim').val('');
      $('.disabled-6 input[type="text"]').attr('disabled','disabled');

     //$('.baja_empresa_total input[type="radio"]').prop('checked', false);
     //$('.baja_empresa_total input[type="checkbox"]').prop('checked', false);

     $('#num_ident_persona_contacto').rules("remove");
     //$('#tipo_doc_ident').removeClass('error').rules("remove",'required');
     //$('#tipo_doc_ident').val('');
   });



   //Validar Formulario y pasar a impresión
   $('#btn-submit').click(function(){
      var validator = $('#form').validate();

      $('#form').valid();
      var numinvalidos = validator.numberOfInvalids();

      if(numinvalidos> 0){
         alert('Error: Falta llenar '+numinvalidos+' campos obligatorios.');
         $('#form')[0].focus();
         return false;

      }else{
         window.print();
         return false;
      }

   });
});

function checked_input(param) {
        if($(param).is(':checked')) {
            $(param).prop('checked', true);
        }
        else {
            $(param).prop('checked', false);
        }
    }