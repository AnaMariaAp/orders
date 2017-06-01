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
               required: true,
               maxlength: 11
            },
            nom_usuario_mancomunado_2:{
               required: true,
               minlength: 1,
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
               minlength:8,
               maxlength: 8
            },
            //SECCION 2

            //SECCION 3
            check_lim_firm_conjunta:{
                required:  "#mod_datos_empresa:checked"
            },
            //BLOQUE LIMITES FIRMA CONJUNTA
           lim_firm_conjunta_1: {
             maxlength: 15,
             ilimitado: true

           },
           lim_firm_conjunta_2: {
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_2:checked"
           },
           lim_firm_conjunta_3: {
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_3:checked"

           },
           lim_firm_conjunta_4: {
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_4:checked"

           },
           lim_firm_conjunta_5: {
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_5:checked"

           },
           lim_firm_conjunta_6:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_6:checked"

           },
           lim_firm_conjunta_7:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_7:checked"
           },
           lim_firm_conjunta_8:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_8:checked"
           },
           lim_firm_conjunta_9:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_9:checked"
           },
           box_chequera:{
             maxlength: 6,
             ilimitado: true,
             required: "#item_checkbox_lim_9:checked"
           },
           lim_firm_conjunta_10:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_10:checked"
           },
           lim_firm_conjunta_11:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_11:checked"
           },
           lim_firm_conjunta_12:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_12:checked"
           },
           lim_firm_conjunta_13:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_13:checked"
           },
           lim_firm_conjunta_14:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_14:checked"
           },
           lim_firm_conjunta_15:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_15:checked"
           },
           lim_firm_conjunta_16:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_16:checked"
           },
           lim_firm_conjunta_17:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_17:checked"
           },
           lim_firm_conjunta_18:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_18:checked"
           },
           lim_firm_conjunta_19:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_19:checked"
           },
           lim_firm_conjunta_20:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_20:checked"
           },
           lim_firm_conjunta_21:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_21:checked"
           },
           lim_firm_conjunta_22:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_22:checked"
           },
           lim_firm_conjunta_23:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_23:checked"
           },
           lim_firm_conjunta_24:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_24:checked"
           },
           lim_firm_conjunta_25:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_25:checked"
           },
           lim_firm_conjunta_26:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_26:checked"
           },
           lim_firm_conjunta_27:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_27:checked"
           },
           lim_firm_conjunta_28:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_28:checked"
           },
           lim_firm_conjunta_29:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_29:checked"
           },
           lim_firm_conjunta_30:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_30:checked"
           },
           lim_firm_conjunta_31:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_31:checked"
           },
           lim_firm_conjunta_32:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_32:checked"
           },
           lim_firm_conjunta_33:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_33:checked"
           },
           lim_firm_conjunta_34:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_34:checked"
           },
           lim_firm_conjunta_35:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_35:checked"
           },
           lim_firm_conjunta_36:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_36:checked"
           },
           lim_firm_conjunta_37:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_37:checked"
           },
           lim_firm_conjunta_38:{
             maxlength: 15,
             ilimitado: true,
             required: "#item_checkbox_lim_38:checked"
           },
           // checkbox_item_1:{
           //   d: true
           // },
           // checkbox_item_2:{
           //   un_checkbox_2: true
           // },
           // checkbox_item_3:{
           //   un_checkbox_3: true
           // },
           // checkbox_item_4:{
           //   un_checkbox_4: true
           // },
           // checkbox_item_5:{
           //   un_checkbox_5: true
           // },
           // checkbox_item_6:{
           //   un_checkbox_6: true
           // },
           // checkbox_item_7:{
           //   un_checkbox_7: true
           // },
           // checkbox_item_8:{
           //   un_checkbox_8: true
           // },
           // checkbox_item_9:{
           //   un_checkbox_9: true
           // },
           // checkbox_item_10:{
           //   d0: true
           // },
           // checkbox_item_11:{
           //   d1: true
           // },
           // checkbox_item_12:{
           //   un_checkbox_12: true
           // },
           // checkbox_item_13:{
           //   un_checkbox_13: true
           // },
           // checkbox_item_14:{
           //   un_checkbox_14: true
           // },
           // checkbox_item_15:{
           //   un_checkbox_15: true
           // },
           // checkbox_item_16:{
           //   un_checkbox_16: true
           // },
           // checkbox_item_17:{
           //   un_checkbox_17: true
           // },
           // checkbox_item_18:{
           //   un_checkbox_18: true
           // },
           // checkbox_item_19:{
           //   un_checkbox_19: true
           // },
           // checkbox_item_20:{
           //   un_checkbox_20: true
           // },
           // checkbox_item_21:{
           //   un_checkbox_21: true
           // },
           // checkbox_item_22:{
           //   un_checkbox_22: true
           // },
           // checkbox_item_23:{
           //   un_checkbox_23: true
           // },
           // checkbox_item_24:{
           //   un_checkbox_24: true
           // },
           // checkbox_item_25:{
           //   un_checkbox_25: true
           // },
           // checkbox_item_26:{
           //   un_checkbox_26: true
           // },
           // checkbox_item_27:{
           //   un_checkbox_27: true
           // },
           // checkbox_item_28:{
           //   un_checkbox_28: true
           // },
           // checkbox_item_29:{
           //   un_checkbox_29: true
           // },
           // checkbox_item_30:{
           //   un_checkbox_30: true
           // },
           // checkbox_item_31:{
           //   un_checkbox_31: true
           // },
           // checkbox_item_32:{
           //   un_checkbox_32: true
           // },
           // checkbox_item_33:{
           //   un_checkbox_33: true
           // },
           // checkbox_item_34:{
           //   un_checkbox_34: true
           // },
           // checkbox_item_35:{
           //   un_checkbox_35: true
           // },
           // checkbox_item_36:{
           //   un_checkbox_36: true
           // },
           // checkbox_item_37:{
           //   un_checkbox_37: true
           // },
           // checkbox_item_38:{
           //   un_checkbox_38: true
           // },
            //SECCION 8
          rep_leg_doc_1:{
            required: ".sec2_tipo_modificacion:checked"
         },
         num_doc_rep_leg_1: {
            required:  ".sec2_tipo_modificacion:checked",
            maxlength: 11,
            number: true
         },
         cargo_rep_leg_1:{
            required:  ".sec2_tipo_modificacion:checked",
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
               maxlength: "Debe tener 8 dígitos.",
               number: "Debe ingresar sólo números"
            },
            cod_usuario_mancomunado_2:{
               minlength: "Debe tener 8 dígitos.",
               maxlength: "Debe tener 8 dígitos.",
               number: "Debe ingresar sólo números"
            },
            //SECCION 2
             tipos_modif:{
               required: "Elegir una de las dos opciones"
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
            },
            checkbox_item_1: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_2: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_3: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_4: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_5: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_6: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_7: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_8: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_9: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_10: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_11: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_12: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_13: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_14: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_15: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_16: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_17: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_18: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_19: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_20: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_21: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_22: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_23: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_24: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_25: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_26: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_27: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_28: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_29: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_30: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_31: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_32: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_33: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_34: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_35: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_36: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_37: {
              required: "Elegir Modificar o Eliminar"
            },
            checkbox_item_38: {
              required: "Elegir Modificar o Eliminar"
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

           }else if(element.attr("name") == "tipos_modif" ){
             error.insertAfter("#box_error_2");

           }else if(element.attr("name") == "checkbox_item_1" ){
             error.insertAfter(".error_1");

          }else if(element.attr("name") == "checkbox_item_2" ){
             error.insertAfter(".error_2");

          }else if(element.attr("name") == "checkbox_item_3" ){
             error.insertAfter(".error_3");

          }else if(element.attr("name") == "checkbox_item_4" ){
             error.insertAfter(".error_4");

          }else if(element.attr("name") == "checkbox_item_5" ){
             error.insertAfter(".error_5");

          }else if(element.attr("name") == "checkbox_item_6" ){
             error.insertAfter(".error_6");

          }else if(element.attr("name") == "checkbox_item_7" ){
             error.insertAfter(".error_7");

          }else if(element.attr("name") == "checkbox_item_8" ){
             error.insertAfter(".error_8");

          }else if(element.attr("name") == "checkbox_item_9" ){
             error.insertAfter(".error_9");

          }else if(element.attr("name") == "checkbox_item_10" ){
             error.insertAfter(".error_10");

          }else if(element.attr("name") == "checkbox_item_11" ){
             error.insertAfter(".error_11");

          }else if(element.attr("name") == "checkbox_item_12" ){
             error.insertAfter(".error_12");

          }else if(element.attr("name") == "checkbox_item_13" ){
             error.insertAfter(".error_13");

          }else if(element.attr("name") == "checkbox_item_14" ){
             error.insertAfter(".error_14");

          }else if(element.attr("name") == "checkbox_item_15" ){
             error.insertAfter(".error_15");

          }else if(element.attr("name") == "checkbox_item_16" ){
             error.insertAfter(".error_16");

          }else if(element.attr("name") == "checkbox_item_17" ){
             error.insertAfter(".error_17");

          }else if(element.attr("name") == "checkbox_item_18" ){
             error.insertAfter(".error_18");

          }else if(element.attr("name") == "checkbox_item_19" ){
             error.insertAfter(".error_19");

          }else if(element.attr("name") == "checkbox_item_20" ){
             error.insertAfter(".error_20");

          }else if(element.attr("name") == "checkbox_item_21" ){
             error.insertAfter(".error_21");

          }else if(element.attr("name") == "checkbox_item_22" ){
             error.insertAfter(".error_22");

          }else if(element.attr("name") == "checkbox_item_23" ){
             error.insertAfter(".error_23");

          }else if(element.attr("name") == "checkbox_item_24" ){
             error.insertAfter(".error_24");

          }else if(element.attr("name") == "checkbox_item_25" ){
             error.insertAfter(".error_25");

          }else if(element.attr("name") == "checkbox_item_26" ){
             error.insertAfter(".error_26");

          }else if(element.attr("name") == "checkbox_item_27" ){
             error.insertAfter(".error_27");

          }else if(element.attr("name") == "checkbox_item_28" ){
             error.insertAfter(".error_28");

          }else if(element.attr("name") == "checkbox_item_29" ){
             error.insertAfter(".error_29");

          }else if(element.attr("name") == "checkbox_item_30" ){
             error.insertAfter(".error_30");

          }else if(element.attr("name") == "checkbox_item_31" ){
             error.insertAfter(".error_31");

          }else if(element.attr("name") == "checkbox_item_32" ){
             error.insertAfter(".error_32");

          }else if(element.attr("name") == "checkbox_item_33" ){
             error.insertAfter(".error_33");

          }else if(element.attr("name") == "checkbox_item_34" ){
             error.insertAfter(".error_34");

          }else if(element.attr("name") == "checkbox_item_35" ){
             error.insertAfter(".error_35");

          }else if(element.attr("name") == "checkbox_item_36" ){
             error.insertAfter(".error_36");

          }else if(element.attr("name") == "checkbox_item_37" ){
             error.insertAfter(".error_37");

          }else if(element.attr("name") == "checkbox_item_38" ){
             error.insertAfter(".error_38");
           }else {
             error.insertAfter(element);
           }
         }
      });





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
        minlength: jQuery.validator.format("Hasta {0} dígitos.")
      });

         //VALIDACION SECCION 3: MODIFICAR ELIMINAR
         $.validator.addMethod("d", function(value, element) {
          if($(".d:radio:checked").length == 1){
             return true;
           }else {
               return false;
           }
         },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_2", function(value, element) {
         //    if($(".un_checkbox_2:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_3", function(value, element) {
         //    if($(".un_checkbox_3:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_4", function(value, element) {
         //    if($(".un_checkbox_4:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_5", function(value, element) {
         //    if($(".un_checkbox_5:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_6", function(value, element) {
         //    if($(".un_checkbox_6:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_7", function(value, element) {
         //    if($(".un_checkbox_7:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_8", function(value, element) {
         //    if($(".un_checkbox_8:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_9", function(value, element) {
         //    if($(".un_checkbox_9:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d0", function(value, element) {
         //    if($(".d0:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d1", function(value, element) {
         //    if($(".d1:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d2", function(value, element) {
         //    if($(".d2:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d3", function(value, element) {
         //    if($(".d3:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d4", function(value, element) {
         //    if($(".d4:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d5", function(value, element) {
         //    if($(".d5:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d6", function(value, element) {
         //    if($(".d6:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d7", function(value, element) {
         //    if($(".d7:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d8", function(value, element) {
         //    if($(".d8:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("d9", function(value, element) {
         //    if($(".d9:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_20", function(value, element) {
         //    if($(".un_checkbox_20:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_21", function(value, element) {
         //    if($(".un_checkbox_21:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_22", function(value, element) {
         //    if($(".un_checkbox_22:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_23", function(value, element) {
         //    if($(".un_checkbox_23:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_24", function(value, element) {
         //    if($(".un_checkbox_24:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_25", function(value, element) {
         //    if($(".un_checkbox_25:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_26", function(value, element) {
         //    if($(".un_checkbox_26:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_27", function(value, element) {
         //    if($(".un_checkbox_27:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_28", function(value, element) {
         //    if($(".un_checkbox_28:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_29", function(value, element) {
         //    if($(".un_checkbox_29:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_30", function(value, element) {
         //    if($(".un_checkbox_30:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");


         // $.validator.addMethod("un_checkbox_31", function(value, element) {
         //    if($(".un_checkbox_31:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_32", function(value, element) {
         //    if($(".un_checkbox_32:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");


         // $.validator.addMethod("un_checkbox_33", function(value, element) {
         //    if($(".un_checkbox_33:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");


         // $.validator.addMethod("un_checkbox_34", function(value, element) {
         //    if($(".un_checkbox_34:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_35", function(value, element) {
         //    if($(".un_checkbox_35:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_36", function(value, element) {
         //    if($(".un_checkbox_36:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_37", function(value, element) {
         //    if($(".un_checkbox_36:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

         // $.validator.addMethod("un_checkbox_38", function(value, element) {
         //    if($(".un_checkbox_36:radio:checked").length == 1){
         //       return true;
         //   }else {
         //       return false;
         //   }
         // },"Seleccionar Agregar o Eliminar");

     //FIN VALIDACION SECCION 3: MODIFICAR ELIMINAR

     //SECCION 1
     $('#num_ruc').simpleMask( { 'mask': '###########' } );
     $('#cod_empresa').simpleMask( { 'mask': '########' } );
     //$('#num_doc_admin_1').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_admin_2').simpleMask( { 'mask': '###########' } );


     //SECCION Autorización Rep leg. empresa
     //$('#num_doc_rep_leg_1').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_rep_leg_2').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_rep_leg_3').simpleMask( { 'mask': '###########' } );
     //$('#num_doc_rep_leg_4').simpleMask( { 'mask': '###########' } );


     //Modificación
     $('#mod_datos_empresa').click(function(){
      $('.baja_empresa_total ').removeAttr('disabled');
      $('.baja_empresa_total table tr td input[type="checkbox"]').removeAttr('disabled');

      $('.baja_empresa_total input[type="text"]').attr('disabled','disabled');
      $('.baja_empresa_total input[type="text"]').val('');

      $('.baja_empresa_total input[type="radio"]').prop('checked', false);
      $('.baja_empresa_total input[type="radio"]').removeAttr('checked');
      $('.baja_empresa_total input[type="radio"]').removeAttr('checked');
      $('.baja_empresa_total input[type="radio"]').attr('disabled','disabled');

      $('.disabled_1').removeAttr('disabled');
      $('.disabled_1 input[type="text"]').removeAttr('disabled');
      $('.disabled_1 select').removeAttr('disabled');
     });

     //Dar de baja
     $('#baja_empresa_existente').click(function(){
      $('.baja_empresa_total ').removeAttr('disabled');
      $('.baja_empresa_total input[type="checkbox"]').removeAttr('disabled');

      $('.baja_empresa_total input[type="text"]').attr('disabled','disabled');
      $('.baja_empresa_total input[type="text"]').val('');

      $('.baja_empresa_total input[type="radio"]').prop('checked', false);
      $('.baja_empresa_total input[type="radio"]').removeAttr('checked');
      $('.baja_empresa_total input[type="radio"]').removeAttr('checked');
      $('.baja_empresa_total input[type="radio"]').attr('disabled','disabled');

      $('.disabled_1').removeAttr('disabled');
      $('.disabled_1 input[type="text"]').removeAttr('disabled');
      $('.disabled_1 select').removeAttr('disabled');

       $('#btn-submit').removeAttr('disabled');
    });

     //Bloquear todos menos el primero
     $('.todas_operaciones').click(function(){

       var otras_operaciones = $('otras_operaciones');

       if($(this).is(':checked')){
         $('.otras_operaciones input[type="checkbox"]').attr('disabled','disabled');
         $('.otras_operaciones input[type="checkbox"]').prop('checked', false);
         $('.otras_operaciones input[type="checkbox"]').removeAttr('checked');
         $('.otras_operaciones input[type="text"]').attr('disabled','disabled');
         $('.otras_operaciones input[type="text"]').val('');

       }else{
         $('.demas_operaciones').removeAttr('disabled');
       }
     });


     //BLOQUE 3
     $('#item_checkbox_lim_1').click(function(){

       var campo         = $('#lim_firm_conjunta_1')
       var checkbox_item = $('input[name="checkbox_item_1"]');
       var error_firm    = $('label#lim_firm_conjunta_1-error');

       if($(this).is(':checked')){

        $('.otras_operaciones input[type=radio]').prop('checked', false);
        $('.otras_operaciones input[type=radio]').removeAttr('checked');
        $('.otras_operaciones input[type=radio]').attr('disabled', 'diesabled');
        
         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_1-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_2').click(function(){

       var campo         = $('#lim_firm_conjunta_2');
       var checkbox_item = $('input[name="checkbox_item_2"]');
       var error_firm    = $('label#lim_firm_conjunta_2-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_2-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_3').click(function(){

       var campo         = $('#lim_firm_conjunta_3')
       var checkbox_item = $('input[name="checkbox_item_3"]');
       var error_firm    = $('label#lim_firm_conjunta_3-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_3-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_4').click(function(){

       var campo         = $('#lim_firm_conjunta_4')
       var checkbox_item = $('input[name="checkbox_item_4"]');
       var error_firm    = $('label#lim_firm_conjunta_4-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_4-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_5').click(function(){

       var campo         = $('#lim_firm_conjunta_5')
       var checkbox_item = $('input[name="checkbox_item_5"]');
       var error_firm    = $('label#lim_firm_conjunta_5-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_5-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_6').click(function(){

       var campo         = $('#lim_firm_conjunta_6')
       var checkbox_item = $('input[name="checkbox_item_6"]');
       var error_firm    = $('label#lim_firm_conjunta_6-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_6-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_7').click(function(){

       var campo         = $('#lim_firm_conjunta_7')
       var checkbox_item = $('input[name="checkbox_item_7"]');
       var error_firm    = $('label#lim_firm_conjunta_7-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_7-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_8').click(function(){

       var campo         = $('#lim_firm_conjunta_8')
       var checkbox_item = $('input[name="checkbox_item_8"]');
       var error_firm    = $('label#lim_firm_conjunta_8-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_8-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_9').click(function(){

       var campo         = $('#lim_firm_conjunta_9')
       var checkbox_item = $('input[name="checkbox_item_9"]');
       var error_firm    = $('label#lim_firm_conjunta_9-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         $('#box_chequera').removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_9-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         $('#box_chequera').attr('disabled','disabled');
         $('#box_chequera').val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_10').click(function(){

       var campo         = $('#lim_firm_conjunta_10')
       var checkbox_item = $('input[name="checkbox_item_10"]');
       var error_firm    = $('label#lim_firm_conjunta_10-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_10-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_11').click(function(){

       var campo         = $('#lim_firm_conjunta_11')
       var checkbox_item = $('input[name="checkbox_item_11"]');
       var error_firm    = $('label#lim_firm_conjunta_11-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_11-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_12').click(function(){

       var campo         = $('#lim_firm_conjunta_12')
       var checkbox_item = $('input[name="checkbox_item_12"]');
       var error_firm    = $('label#lim_firm_conjunta_12-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_12-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_13').click(function(){

       var campo         = $('#lim_firm_conjunta_13')
       var checkbox_item = $('input[name="checkbox_item_13"]');
       var error_firm    = $('label#lim_firm_conjunta_13-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_13-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_14').click(function(){

       var campo         = $('#lim_firm_conjunta_14')
       var checkbox_item = $('input[name="checkbox_item_14"]');
       var error_firm    = $('label#lim_firm_conjunta_14-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_14-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_15').click(function(){

       var campo         = $('#lim_firm_conjunta_15')
       var checkbox_item = $('input[name="checkbox_item_15"]');
       var error_firm    = $('label#lim_firm_conjunta_15-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_15-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_16').click(function(){

       var campo         = $('#lim_firm_conjunta_16')
       var checkbox_item = $('input[name="checkbox_item_16"]');
       var error_firm    = $('label#lim_firm_conjunta_16-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_16-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_17').click(function(){

       var campo         = $('#lim_firm_conjunta_17')
       var checkbox_item = $('input[name="checkbox_item_17"]');
       var error_firm    = $('label#lim_firm_conjunta_17-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_17-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_18').click(function(){

       var campo         = $('#lim_firm_conjunta_18')
       var checkbox_item = $('input[name="checkbox_item_18"]');
       var error_firm    = $('label#lim_firm_conjunta_18-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_18-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_19').click(function(){

       var campo         = $('#lim_firm_conjunta_19')
       var checkbox_item = $('input[name="checkbox_item_19"]');
       var error_firm    = $('label#lim_firm_conjunta_19-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_19-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_20').click(function(){

       var campo         = $('#lim_firm_conjunta_20')
       var checkbox_item = $('input[name="checkbox_item_20"]');
       var error_firm    = $('label#lim_firm_conjunta_20-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_20-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_21').click(function(){

       var campo         = $('#lim_firm_conjunta_21')
       var checkbox_item = $('input[name="checkbox_item_21"]');
       var error_firm    = $('label#lim_firm_conjunta_21-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_21-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_22').click(function(){

       var campo         = $('#lim_firm_conjunta_22')
       var checkbox_item = $('input[name="checkbox_item_22"]');
       var error_firm    = $('label#lim_firm_conjunta_22-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_22-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_23').click(function(){

       var campo         = $('#lim_firm_conjunta_23');
       var checkbox_item = $('input[name="checkbox_item_23"]');
       var error_firm    = $('label#lim_firm_conjunta_23-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_23-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_24').click(function(){

       var campo         = $('#lim_firm_conjunta_24');
       var checkbox_item = $('input[name="checkbox_item_24"]');
       var error_firm    = $('label#lim_firm_conjunta_24-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_24-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_25').click(function(){

       var campo         = $('#lim_firm_conjunta_25')
       var checkbox_item = $('input[name="checkbox_item_25"]');
       var error_firm    = $('label#lim_firm_conjunta_25-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_25-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_26').click(function(){

       var campo         = $('#lim_firm_conjunta_26')
       var checkbox_item = $('input[name="checkbox_item_26"]');
       var error_firm    = $('label#lim_firm_conjunta_26-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_26-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_27').click(function(){

       var campo         = $('#lim_firm_conjunta_27')
       var checkbox_item = $('input[name="checkbox_item_27"]');
       var error_firm    = $('label#lim_firm_conjunta_27-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_27-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_28').click(function(){

       var campo         = $('#lim_firm_conjunta_28')
       var checkbox_item = $('input[name="checkbox_item_28"]');
       var error_firm    = $('label#lim_firm_conjunta_28-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_28-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_29').click(function(){

       var campo         = $('#lim_firm_conjunta_29')
       var checkbox_item = $('input[name="checkbox_item_29"]');
       var error_firm    = $('label#lim_firm_conjunta_29-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_29-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_30').click(function(){

       var campo         = $('#lim_firm_conjunta_30')
       var checkbox_item = $('input[name="checkbox_item_30"]');
       var error_firm    = $('label#lim_firm_conjunta_30-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_30-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_31').click(function(){

       var campo         = $('#lim_firm_conjunta_31')
       var checkbox_item = $('input[name="checkbox_item_31"]');
       var error_firm    = $('label#lim_firm_conjunta_31-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_31-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_32').click(function(){

       var campo         = $('#lim_firm_conjunta_32')
       var checkbox_item = $('input[name="checkbox_item_32"]');
       var error_firm    = $('label#lim_firm_conjunta_32-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_32-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_33').click(function(){

       var campo         = $('#lim_firm_conjunta_33')
       var checkbox_item = $('input[name="checkbox_item_33"]');
       var error_firm    = $('label#lim_firm_conjunta_33-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_33-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_34').click(function(){

       var campo         = $('#lim_firm_conjunta_34')
       var checkbox_item = $('input[name="checkbox_item_34"]');
       var error_firm    = $('label#lim_firm_conjunta_34-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_34-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_35').click(function(){

       var campo         = $('#lim_firm_conjunta_35')
       var checkbox_item = $('input[name="checkbox_item_35"]');
       var error_firm    = $('label#lim_firm_conjunta_35-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_35-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_36').click(function(){

       var campo         = $('#lim_firm_conjunta_36')
       var checkbox_item = $('input[name="checkbox_item_36"]');
       var error_firm    = $('label#lim_firm_conjunta_36-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_36-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_37').click(function(){

       var campo         = $('#lim_firm_conjunta_37')
       var checkbox_item = $('input[name="checkbox_item_37"]');
       var error_firm    = $('label#lim_firm_conjunta_37-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_37-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
       }
     });

     $('#item_checkbox_lim_38').click(function(){

       var campo         = $('#lim_firm_conjunta_38')
       var checkbox_item = $('input[name="checkbox_item_38"]');
       var error_firm    = $('label#lim_firm_conjunta_38-error');

       if($(this).is(':checked')){

         campo.removeAttr('disabled');
         error_firm.css('display','initial');

         $(campo).keyup(function(){

             var campo_length    = $(campo).val().length;
             var error_checkbox  = $('label#checkbox_item_38-error');

             if( campo_length > 0 ){
               checkbox_item.removeAttr('disabled');
               error_checkbox.css('display','initial');

             }else{
               checkbox_item.attr('disabled','disabled');
               checkbox_item.prop('checked', false);
               checkbox_item.removeAttr('checked');
               error_checkbox.css('display','none');
             }
         });

       }else {
         campo.attr('disabled','disabled');
         campo.val('');
         checkbox_item.attr('disabled','disabled');
         checkbox_item.prop('checked', false);
         checkbox_item.removeAttr('checked');
         error_firm.css('display','none');
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