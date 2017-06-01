var letras=' ABCÇDEFGHIJKLMNÑOPQRSTUVWXYZabcçdefghijklmnñopqrstuvwxyzàáÀÁéèÈÉíìÍÌïÏóòÓÒúùÚÙüÜ';
var numeros='1234567890';
var cantidades='-1234567890.,';

function SoloNumeros()
{
/*
Descripcion	:	Permite el ingreso unicamente de Numeros.
Autor		: 	OPihue
*/

if(window.event.keyCode!=13)
	{
	var Tecla;
	Tecla = String.fromCharCode(window.event.keyCode);
	if ( !(Tecla>="0"&&Tecla<="9") )
		{
		window.event.keyCode = 0;
		}
	}
}
/*agregardo 10-07-2013 kgca*/
function validarDominioEmail_F6(obj, sec){
	var retorno = true;
	var sText = obj;	
	var temp1, temp2, temp3, tempInter, tempInter2;	
	var msj;
	msj="El Correo Electrónico del usuario mancomunado "+sec+" no es válido.";
	
	if(sText.value.indexOf("@") != -1){
		temp1 = sText.value.substring(sText.value.indexOf("@")+1, sText.value.length);		
		if(temp1.indexOf("@") == -1){
			if(temp1.length>0){
				if(temp1.indexOf(".") != -1){//hay un primer punto
					temp2 = temp1.substring(temp1.indexOf(".")+1, temp1.length);
					tempInter = temp1.substring(temp1.indexOf("@")+1, temp1.indexOf("."));
					if(temp2.indexOf(".") != -1){//hay un segundo punto
						temp3 = temp2.substring(temp2.indexOf(".")+1, temp2.length);
						tempInter2 = temp2.substring(0, temp2.indexOf(".")-1);
						if(temp3.indexOf(".") != -1){//hay un tercer punto
							alert(msj);
							sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
							retorno = false;
						}
						else if(!soloLetrasKGCA(temp3)){
							alert(msj);
							sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
							retorno = false;
						}
						else if(!soloLetrasKGCA(tempInter2)){
							alert(msj);
							sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
							retorno = false;
						}
						else if(!soloLetrasKGCAMasGuionesyNumeros(tempInter)){
							alert(msj);
							sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
							retorno = false;
						}
					}
					else if(!soloLetrasKGCA(temp2)){
						alert(msj);
						sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
						retorno = false;
					}
					else if(!soloLetrasKGCAMasGuionesyNumeros(tempInter)){
						alert(msj);
						sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
						retorno = false;
					}
				}else if(!soloLetrasKGCAMasGuionesyNumeros(temp1)){
						alert(msj);
						sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
						retorno = false;
				}
			}
		}else{
			alert(msj);
			sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
			retorno = false;
		}
	}
	return retorno;
}

//********************************************************************************************//

function validar(opm){
	var x;
	var y;
	var p=0;
	var r=0;
	var w;
	var z;
	var flags=0;

	/*****************************************************************************************************************
	 *****************************************************************************************************************
	 ** HOJA 2
	 *****************************************************************************************************************
	 *****************************************************************************************************************/
	//razon social empresa
	x = document.f.razSocEmp2;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese la Razón Social de la Empresa.");
		x.focus();
		return false;
	}
	//ruc
	x = document.f.rucEmp2;
	x.value = trim(x.value);
	
	var tipoDoc = document.forms[0].combTipoDocumento.value;
	if(tipoDoc<0){
		alert("Ingrese el Tipo de Documento de la Empresa.");
		document.forms[0].combTipoDocumento.focus();
		return false;
	}else{		
		if(!soloDigitos(x.value)){
			alert("El Documento de la Empresa ingresado no es válido.");
			x.focus();
			return false;
		}else{
			if(tipoDoc == 1 && x.value.length != 11){
				alert("El RUC debe tener 11 dígitos.");
				x.focus();
				return false;	
			}
			if(tipoDoc == 2 && x.value.length ==0){
				alert("El documento debe tener como máximo 10 dígitos.");
				x.focus();
				return false;	
			}
		}
	}
	
	/*if(document.f.tipoFormulario.value == "F6I"){*/
	//ruc
	x = document.f.codemp;
	x.value = trim(x.value);
		if(x.value.length != 8){
				alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
				x.focus();
				return false;	
			}
	
	

		
		//emailm1
		x = document.f.emailm1.value;
		x = trim(x);
		
		if(document.f.emailm1.disabled == false){
			if (x.length==0){
				alert("En la Sección 1, ingrese el Correo Electrónico del Usuario Mancomunado 1 no es válido.");
				document.f.emailm1.focus();
				return false;
			}
			if (x.length>0){
				if (x.indexOf("@")==-1||x.indexOf(".")==-1){
					alert("En la Sección 1, el Correo Electrónico del Usuario Mancomunado 1 no es válido.");
					document.f.emailm1.focus();
					return false;
				}	
				if(trim(x).indexOf(" ") != -1){
					alert("En la Sección 1, el Correo Electrónico del Usuario Mancomunado 1 no es válido.");
					document.f.emailm1.focus();
					return false;
				}	
			}
			/*var retorno = validarDominioEmail(document.f.emailm1, '4');
			if(retorno == false){
				document.f.emailm1.focus();
				return false;
			}*/			
		}
		
		
		
		//emailm2
		x = document.f.emailm2.value;
		x = trim(x);
		
		if(document.f.emailm2.disabled == false){
			if (x.length==0){
				alert("En la Sección 1, ingrese el Correo Electrónico del Usuario Mancomunado 2 no es válido.");
				document.f.emailm2.focus();
				return false;
			}
			if (x.length>0){
				if (x.indexOf("@")==-1||x.indexOf(".")==-1){
					alert("En la Sección 1, el Correo Electrónico del Usuario Mancomunado 2 no es válido.");
					document.f.emailm2.focus();
					return false;
				}	
				if(trim(x).indexOf(" ") != -1){
					alert("En la Sección 1, el Correo Electrónico del Usuario Mancomunado 2 no es válido.");
					document.f.emailm2.focus();
					return false;
				}	
			}
			/*var retorno = validarDominioEmail(document.f.emailm2, '4');
			if(retorno == false){
				document.f.emailm2.focus();
				return false;
			}		*/	
		}
		//versiones del sistema
	x = document.f.versionSistema;

	if (!x.disabled){
		for( i = 0; i < x.length; i++ ){
			if(x[i].checked == true )
				break;
		}
	
		if (i == x.length){
		
			alert("Seleccione una Versión del Sistema");
			x[0].focus();
			return false;
		}
	}
	//Mancomunado 1///
	tipoDoc = document.f.combTipoDocumentoM1.value;
	x = document.f.dniMancomunado1;
	x.value = trim(x.value);
	y = document.getElementById('nombreMancomunado1');
	y.value = trim(y.value);
	
	if(tipoDoc<0){
		alert("Ingrese el Tipo de Documento de la mancomunado 1.");
		document.f.combTipoDocumentoM1.focus();
		return false;
	}else{		
		
			if((x.value.length != 8 || x.value=="") && (tipoDoc == 2 || tipoDoc == 3)){
				alert("El documento del mancomunado 1 debe tener 8 dígitos.");
				x.focus();
				return false;	
			
			}else{
			if((x.value.length != 11 || x.value=="") && (tipoDoc == 1 || tipoDoc == 4 || tipoDoc == 5)){
			
				alert("El documento del mancomunado 1 debe tener 11 dígitos.");
				x.focus();
				return false;	
			
			
			}
			if(( x.value=="") && (tipoDoc == 6)){
			
				alert("El documento del mancomunado 1 debe tener como máximo 10 dígitos.");
				x.focus();
				return false;	
			
			
			}
			if(y.value == ""){
				alert("Ingrese el nombre del usuario mancomunado 1.");
				y.focus();
				return false;
			}
			}
		
	}
	//email 1

	
	x = document.getElementById('emailm1');
	x.value = trim(x.value);
	
	if(x.value.length== 0){
				alert("Ingrese el correo electrónico del usuario mancomunado 1.");
				x.focus();
				return false;
	}	
	if (x.length>0){
		if (x.indexOf("@")==-1||x.indexOf(".")==-1){
			alert("El correo electrónico del usuario mancomunado 1 no es válido.");
			document.f.emailm1.focus();
			return false;
		}
		
	}	
	if(validarDominioEmail_F6(document.f.emailm1, '1') == false){
		document.f.emailm1.focus();
		return false;
	}
	
	//Codigo de usuario
	x = document.getElementById('codusuario1');
	x.value = trim(x.value);
	
	if(x.value.length== 0){
				alert("Ingrese el código del usuario mancomunado 1.");
				x.focus();
				return false;
	}	
	
	
	//Mancomunado 2///
	tipoDoc = document.f.combTipoDocumentoM2.value;
	x = document.f.dniMancomunado2;
	x.value = trim(x.value);	
	y = document.getElementById('nombreMancomunado2');
	y.value = trim(y.value);
	
	
	if(tipoDoc<0){
		alert("Ingrese el Tipo de Documento de la mancomunado 2.");
		document.f.combTipoDocumentoM2.focus();
		return false;
	}else{		
		
		   
			if((x.value.length != 8 || x.value=="") && (tipoDoc == 2 || tipoDoc == 3)){
				alert("El documento del mancomunado 2 debe tener 8 dígitos.");
				x.focus();
				return false;	
			/*else if(tipoDoc == 2 && x.value.length != 11){
				alert("El RUC del mancomunado 1 debe tener 11 dígitos.");
				x.focus();
				return false;*/	
			}else{
			if((x.value.length != 11 || x.value=="") && (tipoDoc == 1 || tipoDoc == 4 || tipoDoc == 5)){
			
				alert("El documento del mancomunado 2 debe tener 11 dígitos.");
				x.focus();
				return false;	
			
			
			}
			
			if((x.value=="") && (tipoDoc == 6)){
			
				alert("El documento del mancomunado 2 debe tener como máximo 10 dígitos.");
				x.focus();
				return false;	
			
			
			}

			if(y.value == ""){
				alert("Ingrese el nombre del usuario mancomunado 2.");
				y.focus();
				return false;
			}
			}
		
	}
	//email 2
	x = document.getElementById('emailm2');
	x.value = trim(x.value);
	
	if(x.value.length== 0){
				alert("Ingrese el correo electrónico del usuario mancomunado 2.");
				x.focus();
				return false;
	}	
		
	if (x.length>0){
		if (x.indexOf("@")==-1||x.indexOf(".")==-1){
			alert("El correo electrónico del usuario mancomunado 2 no es válido.");
			document.f.emailm2.focus();
			return false;
		}
	}
	if(validarDominioEmail_F6(document.f.emailm2, '2') == false){
		document.f.emailm2.focus();
		return false;
	}
	//Codigo de usuario
	x = document.getElementById('codusuario2');
	x.value = trim(x.value);
	
	if(x.value.length== 0){
				alert("Ingrese el código del usuario mancomunado 2.");
				x.focus();
				return false;
	}	
	
	//Tipo de Inscripcion -----------------------------------------------------------------
	x = document.f.tipoInscripcion2;
	/*** http://www.transporteselectos.com **/
	var N=37;
	if(document.f.tipoFormulario.value == "F6M"){
		N=38;
		var s = "no";

		for ( var i = 0; i < x.length; i++ ) {
			
			if ( x[i].checked ) {    
			s= "si";
			break;
			}
		  }
		  if ( s == "no"){
			alert( 'Debe seleccionar Tipo de Inscripción' ) ;
			x[0].focus();
			return false;
		  }
	}
	
	


		
		/*kgca*/

		
	if(document.f.tipoFormulario.value == "F6I"){
		
		
	var validaSeleccionOperaciones = false;
	for (i=1; i<=N;i++){
		if($("#check"+i).attr("checked") == true){ 
			if ( ($.trim($("#limiteOperacion"+i).val()) == '') && !($("#operacionesDisponiblesEliminar"+i).attr("checked") == true) ){
					if(i!=8){
						alert('Ingrese Límite de Operación.');
						$("#limiteOperacion"+i).focus();
						return;					
					}
			}
			validaSeleccionOperaciones = true;
			if(i==8 && ($.trim($("#operacionesDisponiblesNumero8").val()) == '')){
				alert('Ingrese Número de Chequeras.');
				$("#operacionesDisponiblesNumero8").focus();
				return;
			}else if(i==8 && $.trim($("#operacionesDisponiblesNumero8").val()) != '' 
				&& !soloDigitos($.trim($("#operacionesDisponiblesNumero8").val()))){
				alert('El Número de Solicitudes de Chequeras no es Válido.');
				$("#operacionesDisponiblesNumero8").val('');
				$("#operacionesDisponiblesNumero8").focus();
				return;				
			}
		}
	}
	
	if (($("#todos").attr("checked") == true) && $.trim($("#limiteOperacionTodo").val()) == ''){
		alert('Ingrese Límite de Operación.');
		$("#limiteOperacionTodo").focus();
		return;
	}
	
	if ($("#todos").attr("checked") == true) validaSeleccionOperaciones = true;	
	
	
		if(document.f.limiteOperacionTodo.disabled == false){
				if($.trim($("#limiteOperacionTodo").val()) != ""){//alert("3");
					texto = $.trim($("#limiteOperacionTodo").val());				
					if (soloLetrasKGCA(texto)){//alert("4");				  
						if(texto != "ILIMITADO"){//alert("5");
							alert("El texto ingresado en Limite Diario debe ser ILIMITADO.");
							$("#limiteOperacionTodo").focus();
							return false;
						}				  
					}else{//alert("5.1");
						if (!soloDigitosComaPunto(texto)){//alert("6");					  
							if(texto != "ILIMITADO"){//alert("7");
								alert("El texto ingresado en Limite Diario debe ser ILIMITADO.");
								$("#limiteOperacionTodo").focus();
								return false;
							}					  	
						}                   
						if(soloDigitosComaPunto(texto)){					
							tempo=texto.substring(texto.indexOf(".")+1,texto.length);
							if(tempo.indexOf(".") != -1){
								alert("Número no válido en el límite Diario de la Sección 5, por favor intente de nuevo.");
								$.trim($("#limiteOperacionTodo").val(''));
								$("#limiteOperacionTodo").focus();
								return false;
							}						 
							if(tempo==''){					 
								alert("Número no válido en el límite Diario de la Sección 5, por favor intente de nuevo.");
								$.trim($("#limiteOperacionTodo").val(''));
								$("#limiteOperacionTodo").focus();
								return false;
							}					
						}
					}
				}
			}	

			
			
			
	}else if(document.f.tipoFormulario.value == "F6M"){
	
		
		var validaSeleccionOperaciones = false;
		for (i=1; i<=N;i++){
			if($("#check"+i).attr("checked") == true){
				if ( ($.trim($("#limiteOperacion"+i).val()) == '') && (TipoSolicitudR == '1')){
					if(document.f.operacionesEliminarTodo.checked!=true){
						if(i!=8){
							alert('Ingrese Límite de Operación.');
							$("#limiteOperacion"+i).focus();
							return;
						}
					}
				}
				if ( (TipoSolicitudR == '2') && !($("#operacionesDisponiblesEliminar"+i).attr("checked") == true) ){
					if(document.f.operacionesEliminarTodo.checked!=true){
						if(i!=8){
							alert('De check a eliminar el servicio seleccionado.');
							$("#operacionesDisponiblesEliminar"+i).focus();
							return;
						}
					}
				}
				validaSeleccionOperaciones = true;
				if(i==8 && ($.trim($("#operacionesDisponiblesNumero8").val()) == '' && (TipoSolicitudR == '1'))){
					alert('Ingrese Número de Chequeras.');
					$("#operacionesDisponiblesNumero8").focus();
					return;
				}else if(i==8 && $.trim($('#operacionesDisponiblesNumero8').val())!='' && (TipoSolicitudR == '1') 
					&& !soloDigitos($.trim($("#operacionesDisponiblesNumero8").val()))){
					alert('El Número de Solicitudes de Chequeras no es Válido.');
					$("#operacionesDisponiblesNumero8").val('');
					$("#operacionesDisponiblesNumero8").focus();
					return;
				}
				if(i==8 && (TipoSolicitudR == '2') && !($("#operacionesDisponiblesEliminar8").attr("checked") == true) ){
					alert('De check a eliminar el servicio seleccionado.');
					$("#operacionesDisponiblesEliminar8").focus();
					return;
				}
			}
		}
		
		if ($("#todos").attr("checked") == true){
			if((document.f.operacionesEliminarTodo.checked!=true) && (TipoSolicitudR == '2')){
				alert('De check a eliminar el servicio seleccionado.');
				$("#operacionesEliminarTodo").focus();
				return;
			}
			if(($.trim($("#limiteOperacionTodo").val()) == '') && (TipoSolicitudR == '1')){
				alert('Ingrese Límite de Operación.');
				$("#limiteOperacionTodo").focus();
				return;
			}			
		}
		
		
		if ($("#todos").attr("checked") == true) validaSeleccionOperaciones = true;
		

		
		
			if(document.f.operacionesEliminarTodo.checked!=true){
				if(document.f.limiteOperacionTodo.disabled == false){
					if($.trim($("#limiteOperacionTodo").val()) != ""){//alert("3");
						texto = $.trim($("#limiteOperacionTodo").val());				
						if (soloLetrasKGCA(texto)){//alert("4");				  
							if(texto != "ILIMITADO"){//alert("5");
								alert("El texto ingresado en Limite Diario debe ser ILIMITADO.");
								$("#limiteOperacionTodo").val('');
								$("#limiteOperacionTodo").focus();
								return false;
							}				  
						}else{//alert("5.1");
							if (!soloDigitosComaPunto(texto)){//alert("6");					  
								if(texto != "ILIMITADO"){//alert("7");
									alert("El texto ingresado en Limite Diario debe ser ILIMITADO.");
									$("#limiteOperacionTodo").val('');
									$("#limiteOperacionTodo").focus();
									return false;
								}					  	
							}                   
							if(soloDigitosComaPunto(texto)){					
								tempo=texto.substring(texto.indexOf(".")+1,texto.length);
								if(tempo.indexOf(".") != -1){
									alert("Número no válido en el límite Diario de la Sección 5, por favor intente de nuevo.");
									$("#limiteOperacionTodo").val('');
									$("#limiteOperacionTodo").focus();
									return false;
								}						 
								if(tempo==''){					 
									alert("Número no válido en el límite Diario de la Sección 5, por favor intente de nuevo.");
									$("#limiteOperacionTodo").val('');
									$("#limiteOperacionTodo").focus();
									return false;
								}					
							}
						}
					}
				}	
			}
			
	}
	
	
			
/**/
					
	if (validaSeleccionOperaciones==false)	{alert( 'Debe seleccionar Operaciones Disponibles.' );$("#tipoInscripcion2").focus();return; }
	else{
		var texto;
		for ( var fila = 1; fila <= N; fila ++ ) {//alert("1 fila: "+fila);
	        if($("#check"+fila).attr("checked") == true){
				if($.trim($("#limiteOperacion"+fila).val()) != ""){//alert("3");
					texto = $.trim($("#limiteOperacion"+fila).val());				
					if (soloLetrasKGCA(texto)){//alert("4");				  
						if(texto != "ILIMITADO"){//alert("5");
							alert("El texto ingresado en Limite Diario debe ser ILIMITADO.");
							$("#limiteOperacion"+fila).val('');
							$("#limiteOperacion"+fila).focus();
							return false;
						}				  
					}else{//alert("5.1");
						if (!soloDigitosComaPunto(texto)){//alert("6");					  
							if(texto != "ILIMITADO"){//alert("7");
								alert("El texto ingresado en Limite Diario debe ser ILIMITADO.");
								$("#limiteOperacion"+fila).val('');
								$("#limiteOperacion"+fila).focus();
								return false;
							}					  	
						}                   
						if(soloDigitosComaPunto(texto)){					
							tempo=texto.substring(texto.indexOf(".")+1,texto.length);
							if(tempo.indexOf(".") != -1){
								alert("Número no válido en el límite Diario de la Sección 5, por favor intente de nuevo.");
								$("#limiteOperacion"+fila).val('');
								$("#limiteOperacion"+fila).focus();
								return false;
							}						 
							if(tempo==''){					 
								alert("Número no válido en el límite Diario de la Sección 5, por favor intente de nuevo.");
								$("#limiteOperacion"+fila).val('');
								$("#limiteOperacion"+fila).focus();
								return false;
							}					
						}
					}
				}
			}			
		}	 
	}

	//y = document.f.dniMancomunado;
	//z=  document.f.nombreMancomunado

	/*
	/// Operaciones Disponobles.
	p = document.f.limiteOperacion1;
	x = document.f.limiteOperacion2;
	w = document.f.operacionesDisponibles
	
		  	var s = "no";

  for ( var i = 0; i < w.length; i++ ) {
  	
    if ( w[i].checked ) {    
    s= "si";
    break;
    }
  }
		op = document.f.condicionesA;
		if ( op[2].checked && s == "no") 
		   {
    alert( 'Debe seleccionar Operaciones Disponibles' ) ;
			w[0].focus();
			return false;
			}
	

		for(i=0; i < x.length; i++ ){			
			if ( w[i].checked && p[i].value=="" && x[i].value=="") {
				alert('Debe Ingresar Límite para Operaciones')
				p[i].focus();
				return false;
			}			
			/////////////////
		if ( w[i].checked && (p[i].value!="" || x[i].value!="")) {			  
			 var c=true
			    if(i==6 || i==15) 
			    {
			 	
			}
			else
			    {
			   
					if(!soloCantidad(p[i].value)|| !soloCantidad(x[i].value) ){
					alert("El Límite Diario debe ser Numérico \n ó la palabra ILIMITADO.");
					p[i].focus();
					return false;
				}		
			}
			
			}
			
						

/////////////////////
			
				x[i].value = trim(x[i].value);
			if (x[i].value != "" && i!=6){	
							r=999999;				
			}			
		}
		
			*/
			/*
			r=999999999999999;		
			var op=false;
			
			for(i=0; i < y.length; i++ ){
				if (y[i].value != "" || z[i].value != ""){
					op=true;
				}
			}
			
			if(op==false){
				for (i=0; i<x.length; i++ ) {
					if(x[i].value!="" && x[i].value!="N/A"){
						alert('Ingresar por lo menos 1 Firma Mancomunada');
						y[0].focus();
						return false;
					}
  				}
			}
		
		   for(i=0; i < y.length; i++ ){ 	
			  	
			  if (y[i].value != ""  || z[i].value != ""){			  
				  if(r>0 && (y[i].value=="" || z[i].value==""))
				  {
					alert('Ingresar DNI y Nombre del usuario Mancomunado ')
				  z[i].focus();
					return false;
					}		
				if( y[i].value.length!=8)
					{
						alert("El N° de DNI no es válido.");
						y[i].focus();
						return false;
						
						}	
				}
			}*/
				
			





 
 
 
	imprimirK();
	
}
function imprimirK(){			
	print();	
}
	
	 
	 
	 
	 
	 /*****************************************************************************************************************
	 *****************************************************************************************************************
	 ** HOJA 3
	 *****************************************************************************************************************
	 *****************************************************************************************************************/
	
	

//imprimir();
	
	

function habilitarCuentasAutorizar(j){
	if(j==0){
	
		x = document.f.condicionesC;	
		
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			document.f.versionSistema2[i].disabled = true;	
			document.f.versionSistema2[i].checked = false;	
			//document.f.condicionesC.disabled = true;		
			
		}
	}
	if(j==1){
		
		}
		
	

	if(j==2){
	
		x = document.f.condicionesC;				
		for (i=0;i<x.length;i++){
			x[0].value="0011-";
			x[i].disabled = false;		
			document.f.versionSistema2[i].disabled = false;	
			document.f.versionSistema2[i].checked = false;	
			//document.f.condicionesC.disabled = false;			
		}
	}
	}
function habilitarPorTipoSolicitud(j){
	/*
	if(j==0){		

		document.f.checkSolicitudOtros.disabled = true;
		document.f.checkSolicitudOtros.value = "";				
		for (i=0;i<6;i++){		
			document.f.checkSolicitud[i].disabled = true;	
			document.f.checkSolicitud[i].checked = false;				
		}
		for (m=0;m<3;m++){
			document.f.condicionesA[m].disabled = false;	
			document.f.condicionesA[m].checked = false;	
		}	
			for (c=0;c<4;c++){
			document.f.versionSistema[c].disabled = false;	
			document.f.versionSistema[c].checked = false;	
		}	
		for (n=0;n<2;n++){
			document.f.condicionesB[n].disabled = false;	
			document.f.condicionesB[n].checked = false;	
			}	
			
			x = document.f.condicionesCradio;	
			for (m=0;m<3;m++){
			x[m].disabled = false;	
			x[m].checked = false;	
	   	}
	   	
	   	y = document.f.operacionesDisponibles;	
	   	var num=y.length;		
		  x = document.f.versionSistema;
			if(x[2].checked) num=14;
		  if(x[3].checked) num=9;			
		  for (i=0;i<num;i++){			
			y[i].disabled = false;	
			y[i].checked = false;						
		   }
		
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
			
	
				
		for (i=0;i<x.length;i++){			
			x[i].disabled = false;	
			x[i].value = "";	
			z[i].disabled = false;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
	}
	
	if(j==1){		
		
		document.f.checkSolicitudOtros.disabled = false;				
		for (i=0;i<6;i++){		
			document.f.checkSolicitud[i].disabled = false;		
		}
		
		for (m=0;m<3;m++){
			document.f.condicionesA[m].disabled = false;	
			document.f.condicionesA[m].checked = false;	
		}
		
		for (n=0;n<2;n++){
			document.f.condicionesB[n].disabled = false;	
			document.f.condicionesB[n].checked = false;	
			}
			
			x = document.f.condicionesCradio;	
			for (m=0;m<3;m++){
			x[m].disabled = false;	
			x[m].checked = false;	
	   	}
	   	y = document.f.operacionesDisponibles;	   		
		  var num=y.length;		
		  x = document.f.versionSistema;
			if(x[2].checked) num=14;
		  if(x[3].checked) num=9;			
		  for (i=0;i<num;i++){			
			y[i].disabled = false;	
			y[i].checked = false;						
	  	}
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
				
		  for (i=0;i<x.length;i++){			
			x[i].disabled = false;	
			x[i].value = "";	
			z[i].disabled = false;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
		
	}
	
	if(j==2){		
		document.f.checkSolicitudOtros.disabled = true;
		document.f.checkSolicitudOtros.value = "";
						
		for (i=0;i<6;i++){		
			document.f.checkSolicitud[i].disabled = true;	
			document.f.checkSolicitud[i].checked = false;		
		}
		for (m=0;m<3;m++){
			document.f.condicionesA[m].disabled = true;	
			document.f.condicionesA[m].checked = false;	
		}
	for (n=0;n<2;n++){
			document.f.condicionesB[n].disabled = true;	
			document.f.condicionesB[n].checked = false;	
		}
			for (n=0;n<3;n++){
			document.f.condicionesCradio[n].disabled = true;	
			document.f.condicionesCradio[n].checked = false;	
		}		
		
		x = document.f.condicionesC;	
		y = document.f.versionSistema2;		
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			y[i].disabled = true;	
			y[i].checked = false;					
		}
		
	  y = document.f.operacionesDisponibles;			
		for (i=0;i<y.length;i++){			
			y[i].disabled = true;	
			y[i].checked = false;						
		}
		
		
		
		
			x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
			
	
				
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			z[i].disabled = true;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
		w =  document.f.limiteOperacionCheck;
		w[0].disabled = true; w[0].checked = false;
		w[1].disabled = true; w[1].checked = false;
		
		y = document.f.limiteOperacion1;
	  p = document.f.limiteOperacion2;
    w = document.f.operacionesDisponiblesEliminar;
	
	for(h=0;h<y.length;h++){
		
		if(h!=6) 
        	{
    y[h].disabled=true;
		y[h].value="";
		p[h].disabled=true;
		p[h].value="";
		w[h].disabled=true;
		
		if(h==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(h==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }
         
         }
	
	}
		
		
		}// Fin If 2	
		
		*/
	
}
function desactivarOperDisponibles(opm)
{
	if(opm==0)
	{
			y = document.f.operacionesDisponibles;			
		  for (i=0;i<y.length;i++)
		  {			
			y[i].disabled = true;	
			y[i].checked = false;						
		 }
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
			
	
				
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			z[i].disabled = true;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
				y = document.f.limiteOperacion1;
	  p = document.f.limiteOperacion2;
    w = document.f.operacionesDisponiblesEliminar;
	
	for(h=0;h<y.length;h++){		
		
		if(h!=6) 
        	{
    y[h].disabled=true;
		y[h].value="";
		p[h].disabled=true;
		p[h].value="";
		w[h].disabled=true;
		
		if(h==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(h==8) {
        		f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value="";
        		}         
         }	
		}
	}
	if(opm==1)
	{
		  y = document.f.operacionesDisponibles;	
		  var num=y.length;		
		  x = document.f.versionSistema;
			if(x[2].checked) num=14;
		  if(x[3].checked) num=9;			
		  for (i=0;i<num;i++){			
			y[i].disabled = false;	
			y[i].checked = false;						
		  }
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
				
		  for (i=0;i<x.length;i++){			
			x[i].disabled = false;	
			x[i].value = "";	
			z[i].disabled = false;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		  }
		  
		  y = document.f.limiteOperacion1;
	    p = document.f.limiteOperacion2;
      w = document.f.operacionesDisponiblesEliminar;
	
	for(h=0;h<y.length;h++){		
		
		if(h!=6) 
        	{
    y[h].disabled=true;
		y[h].value="";
		p[h].disabled=true;
		p[h].value="";
		w[h].disabled=true;
		
		if(h==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(h==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }
         
         }
	
	}
		}
	
	}
	
	function todasLasOperaciones(opm)
{	
	var num=1;
	if(opm==0)
	{
		
			y = document.f.operacionesDisponibles;			
		  for (i=1;i<y.length;i++)
		  {			
			y[i].disabled = true;	
			y[i].checked = false;						
		 }
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
			
	
			/*	
		for (i=1;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			z[i].disabled = true;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}*/
				y = document.f.limiteOperacion1;
	  p = document.f.limiteOperacion2;
    w = document.f.operacionesDisponiblesEliminar;
	
	for(h=1;h<y.length;h++){		
		
		if(h!=6) 
        	{
    y[h].disabled=true;
		y[h].value="";
		p[h].disabled=true;
		p[h].value="";
		w[h].disabled=true;
		
		if(h==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(h==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }
         
         }
	
	}
	  w =  document.f.limiteOperacionCheck;
		w[0].disabled = true; w[0].checked = false;
		w[1].disabled = true; w[1].checked = false;
	}
	if(opm==1)
	{
		y = document.f.operacionesDisponibles;			
		var num=y.length;		
		x = document.f.versionSistema;
			if(x[2].checked) num=14;
		if(x[3].checked) num=9;
		
		  
		  for (i=1;i<num;i++){			
			y[i].disabled = false;	
			y[i].checked = false;						
		  }
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
				
		 /* for (i=1;i<x.length;i++){			
			x[i].disabled = false;	
			x[i].value = "";	
			z[i].disabled = false;	
			z[i].value = "";	
			p[i].disabled = false;	
			p[i].checked = false;					
		  }*/
		}
	
	}
function mostrarOcultarTablas(id){
	
mostrado=0;
elem = document.getElementById(id);
if(elem.style.display=='block')mostrado=1;
elem.style.display='none';
if(mostrado!=1)elem.style.display='block';
}
function mostrarOcultarTablas2(){
	mostrarOcultarTablas('tabla1');
	mostrarOcultarTablas('tabla2');
}

function habilitarPorTipo(j){
	if(j==0){
		x = document.f.versionSistema;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
		}
		document.f.Combruccarnetpas.disabled = false;
		document.f.nombreContacto.disabled=false;
		//document.f.dniContacto.disabled=true;		
    //document.f.dniContacto.value = "";
		x = document.f.numCuentaEmp01;
		x[0].value="0011-";
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
			document.f.monedaCuentaEmp01[i].disabled = false;
			document.f.limiteCuentaEmp01[i].disabled = false;
			document.f.modlimiteCuentaEmp01[i].disabled = true;
			document.f.modlimiteCuentaEmp01[i].checked = false;
			document.f.eliminarCuentaEmp01[i].disabled = true;
			document.f.eliminarCuentaEmp01[i].checked = false;
		}
		x = document.f.numCuentaTercero01;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
			document.f.monedaCuentaTercero01[i].disabled = false;
			document.f.titularCuentaTercero01[i].disabled = false;
			document.f.eliminarCuentaTercero01[i].disabled = true;
			document.f.eliminarCuentaTercero01[i].checked = false;
		}
	}
	if(j==1){
		x = document.f.versionSistema;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
		}
		document.f.combRucCarnetPas.disabled = false;
		document.f.nombreContacto.disabled=false;
		document.f.dniContacto.disabled=true;
		document.f.dniContacto.value = "";
		
		x = document.f.numCuentaEmp01;
		x[0].value="0011-";
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
			document.f.monedaCuentaEmp01[i].disabled = false;
			document.f.limiteCuentaEmp01[i].disabled = false;
			document.f.modlimiteCuentaEmp01[i].disabled = false;
			document.f.eliminarCuentaEmp01[i].disabled = false;
		}
		x = document.f.numCuentaTercero01;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
			document.f.monedaCuentaTercero01[i].disabled = false;
			document.f.titularCuentaTercero01[i].disabled = false;
			document.f.eliminarCuentaTercero01[i].disabled = false;
		}
	}
	if(j==2){
		x = document.f.versionSistema;
		for (i=0;i<x.length;i++){
			x[i].checked = false;
			x[i].disabled = true;
		}
		document.f.nombreContacto.disabled=true;
		document.f.nombreContacto.value="";
		document.f.dniContacto.disabled=true;
		document.f.dniContacto.value="";
		document.f.combRucCarnetPas.disabled=true;
		document.f.combRucCarnetPas.value="";
		x = document.f.numCuentaEmp01;

		for (i=0;i<x.length;i++){
			x[i].disabled = true;
			x[i].value = "";
			document.f.monedaCuentaEmp01[i].disabled = true;
			document.f.monedaCuentaEmp01[i].selectedIndex = 0;
			document.f.limiteCuentaEmp01[i].disabled = true;
			document.f.limiteCuentaEmp01[i].value = "";
			document.f.modlimiteCuentaEmp01[i].disabled = true;
			document.f.modlimiteCuentaEmp01[i].checked = false;
			document.f.eliminarCuentaEmp01[i].disabled = true;
			document.f.eliminarCuentaEmp01[i].checked = false;
		}
		x = document.f.numCuentaTercero01;
		for (i=0;i<x.length;i++){
			x[i].disabled = true;
			x[i].value = "";
			document.f.monedaCuentaTercero01[i].disabled = true;
			document.f.monedaCuentaTercero01[i].selectedIndex = 0;
			document.f.titularCuentaTercero01[i].disabled = true;
			document.f.titularCuentaTercero01[i].value = "";
			document.f.eliminarCuentaTercero01[i].disabled = true;
			document.f.eliminarCuentaTercero01[i].checked = false;
		}
		
		/**Modificacion 06 Junnio 2008*/
		ultimaModificacion();
		/**Fin Modif**/
	}
	
}


function ultimaModificacion()
{
	/**Modificacion 06 Junnio 2008*/
		
		
		document.f.checkSolicitudOtros.disabled = true;
		document.f.checkSolicitudOtros.value = "";
						
		for (i=0;i<6;i++){		
			document.f.checkSolicitud[i].disabled = true;	
			document.f.checkSolicitud[i].checked = false;		
		}
		for (m=0;m<3;m++){
			document.f.condicionesA[m].disabled = true;	
			document.f.condicionesA[m].checked = false;	
		}
	for (n=0;n<2;n++){
			document.f.condicionesB[n].disabled = true;	
			document.f.condicionesB[n].checked = false;	
		}
			for (n=0;n<3;n++){
			document.f.condicionesCradio[n].disabled = true;	
			document.f.condicionesCradio[n].checked = false;	
		}		
		
		x = document.f.condicionesC;	
		y = document.f.versionSistema2;		
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			y[i].disabled = true;	
			y[i].checked = false;					
		}
		
	  y = document.f.operacionesDisponibles;			
		for (i=0;i<y.length;i++){			
			y[i].disabled = false;	
			y[i].checked = false;						
		}
		/***		
			x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;				
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			z[i].disabled = true;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
		**/
		w =  document.f.limiteOperacionCheck;
		w[0].disabled = true; w[0].checked = false;
		w[1].disabled = true; w[1].checked = false;
		
		y = document.f.limiteOperacion1;
	  p = document.f.limiteOperacion2;
    w = document.f.operacionesDisponiblesEliminar;
	
	for(h=0;h<y.length;h++){		
		if(h!=6) 
        	{
    y[h].disabled=true;
		y[h].value="";
		p[h].disabled=true;
		p[h].value="";
		w[h].disabled=true;
		
		if(h==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(h==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }         
         }
				}
		
		/**Fin Modif**/
	}


function habilitarOperaciones(j){
var spcc = document.f.condicionesA;
 if(!(spcc[0].checked ||spcc[1].checked) )
 {
		if(j==0 || j==1){
			//ultimaModificacion();
			habilitarOperacion2(true);
			habilitarOperacion3(true);
		}
		if(j==2){
			//ultimaModificacion();
			habilitarOperacion2(true);
			habilitarOperacion3(false);
		}
		if(j==3){
			//ultimaModificacion();
			habilitarOperacion2(false);
			habilitarOperacion3(false);
		}
		if(j==4){
			//ultimaModificacion();
			habilitarOperacion2(false);
			habilitarOperacion3(false);
		}
 }
 	
}

function habilitarOperacion2(j){
	  x = document.f.operacionesDisponibles;
	  y = document.f.limiteOperacion1;
	  p = document.f.limiteOperacion2;
    w = document.f.operacionesDisponiblesEliminar;
	
	for(h=0;h<y.length;h++){
		y[h].disabled=true;
		p[h].disabled=true;
		w[h].disabled=true;
	}
	
	for(i=9;i<14;i++){
		x[i].disabled = !j;
	/*	if(!j) x[i].checked = false;
		document.f.limiteOperacion1[i].disabled = !j;
		if(!j) document.f.limiteOperacion1[i].value = "";
		document.f.limiteOperacion2[i].disabled = !j;*/
		if(!j) document.f.limiteOperacion2[i].value = "";
		//document.f.operacionesDisponiblesEliminar[i].disabled = !j;
		if(!j) document.f.operacionesDisponiblesEliminar[i].checked = false;
	}
}


function habilitarOperacion3(j){
	
	x = document.f.operacionesDisponibles;
	y = document.f.limiteOperacion1;
	p = document.f.limiteOperacion2;
  w = document.f.operacionesDisponiblesEliminar;
  
 	for(h=0;h<y.length;h++){
		y[h].disabled=true;
		p[h].disabled=true;
		w[h].disabled=true;
	}
	
	for(i=14;i<17;i++){
		x[i].disabled = !j;
		if(!j) x[i].checked = false;
		//document.f.limiteOperacion1[i].disabled = !j;
		if(!j) document.f.limiteOperacion1[i].value = "";
		//document.f.limiteOperacion2[i].disabled = !j;
		//if(!j) document.f.limiteOperacion2[i].value = "";
		//document.f.operacionesDisponiblesEliminar[i].disabled = !j;
		if(!j) document.f.operacionesDisponiblesEliminar[i].checked = false;
	}
	
	document.f.limiteOperacionCheck[0].disabled = true;
	document.f.limiteOperacionCheck[1].disabled = true;
	
	document.f.operacionesDisponiblesNumero[0].disabled = true;
	document.f.operacionesDisponiblesNumero[1].disabled = true;
	/*if(!j) document.f.limiteOperacionCheck[0].checked = false;
	document.f.limiteOperacionCheck[1].disabled = !j;
	if(!j) document.f.limiteOperacionCheck[1].checked = false;*/
}
function onloadDesactivarLimiteOperaciones(){
	habilitarPorTipoSolicitud(0)
	x = document.f.operacionesDisponibles;
	y = document.f.limiteOperacion1;
	p = document.f.limiteOperacion2;
  w = document.f.operacionesDisponiblesEliminar;
  
 	for(h=0;h<y.length;h++){
		y[h].disabled=true;
		p[h].disabled=true;
		w[h].disabled=true;
	}
		x = document.f.condicionesC;	
		y = document.f.versionSistema2;		
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			y[i].disabled = true;	
			y[i].checked = false;					
		}
		y = document.f.operacionesDisponiblesNumero;		
	  y[0].disabled = true;
	  y[1].disabled = true;
	  
	  x = document.f.limiteOperacionCheck;	
	  x[0].disabled=true; x[0].checked=false;
	  x[1].disabled=true; x[1].checked=false;
	
	//document.f.dniContacto.disabled = true;
  //document.f.dniContacto.value = "";
}
	
function desactivarModificar(i){
	if (document.f.eliminarCuentaEmp01[i].checked == true){
		document.f.modlimiteCuentaEmp01[i].checked = false;
	}
}

function desactivarEliminar(i){
	if (document.f.modlimiteCuentaEmp01[i].checked == true){
		document.f.eliminarCuentaEmp01[i].checked = false;
	}
}

function soloDigitos(sText){
	var res=true;
	var char;
	for (i = 0; i < sText.length && res == true; i++){
		char = sText.charAt(i); 
		if (numeros.indexOf(char) == -1){
			res = false;
			break;
		}
	}
	return res;
}

function soloCantidad(sText){
	//alert(sText)
	var res=false;

	if(sText=='ILIMITADO'||sText>=0)
	{
		res = true;		
		}
	
	return res;
}

function soloLetras(sText){
	var res=true;
	var char;
	for (i = 0; i < sText.length && res == true; i++){
		char = sText.charAt(i); 
		if (letras.indexOf(char) == -1){
			res = false;
			break;
		}
	}
	return res;
}

function soloEmail(str){
	/**
	 * DHTML email validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
	 */
	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (str.indexOf(at)==-1){
	   return false;
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
	   return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
	    return false;
	}
	
	if (str.indexOf(at,(lat+1))!=-1){
		return false;
	}

	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		return false;
	}

	if (str.indexOf(dot,(lat+2))==-1){
		return false;
	}
	
	if (str.indexOf(" ")!=-1){
		return false;
	}

	return true;
}

function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function ltrim(stringToTrim) {
	return stringToTrim.replace(/^\s+/,"");
}
function rtrim(stringToTrim) {
	return stringToTrim.replace(/\s+$/,"");
}

function habilitar(v){
	
}

function imprimir(){	
	//f.botonImprimir.style.visibility = "hidden";
	document.getElementById("botonImprimir").style.visibility = "hidden";	
	print();	
	setTimeout('restaurarBoton()',5000);
	
}

function restaurarBoton(){
	document.getElementById("botonImprimir").style.visibility = "visible";
}

function habilitarLimiteOperaciones(fila)
	{	
		
		
	 var f=document.forms[0];
	 var checkis=f.operacionesDisponibles;
	 	if(fila==0)
	{
	  if(checkis[0].checked)
        {
         todasLasOperaciones(0)	
        }
        else
        	{
        		todasLasOperaciones(1)	
        		}
      }
	 var checked=false;    	
 //***si hay varios seleccionados @OPM™    
 //alert(checkis.length)
    if(checkis.length){      	
    	   
    	    //alert(':: '+checkis.checked) 	    
    	for(var q=0;q<checkis.length;q++){	
        //alert(':: '+checkis[q].value)
        
        if(checkis[q].checked)
        {
        	 if(fila==15)
					 {
					 x = document.f.limiteOperacionCheck;	
					 x[0].disabled=false; x[0].checked=false;
					 x[1].disabled=false; x[1].checked=false;
					}
        	
        		if(q!=6) 
        	{
          f.limiteOperacion1[q].disabled=false;
        	f.limiteOperacion2[q].disabled=false;
        	if(q==fila)   {        			
        			f.limiteOperacion1[fila].focus()	
        			};
        	
        	//f.limiteOperacion1[q].focus();
         }
        	
        
        
        	f.operacionesDisponiblesEliminar[q].disabled=false;
    
        	if(q==7) {
        		f.operacionesDisponiblesNumero[0].disabled=false;
        		
        		if(q==fila)   	f.operacionesDisponiblesNumero[0].focus();
        		
        		 }
        	if(q==8) {
        		f.operacionesDisponiblesNumero[1].disabled=false; 
        		
        				if(q==fila)   {	
        					f.operacionesDisponiblesNumero[1].focus();

        					}
        		}
        	
        
        	
        	}
        else
        	{
        	f.limiteOperacion1[q].disabled=true;
        	f.limiteOperacion2[q].disabled=true;
        	f.operacionesDisponiblesEliminar[q].checked = false;
        	f.operacionesDisponiblesEliminar[q].disabled=true;
        	if(q!=6)
        	{
        	f.limiteOperacion1[q].value="";
        	f.limiteOperacion2[q].value="";
         }
        			
        	if(q==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(q==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }
        			
        	 if(fila==15)
					 {
					 x = document.f.limiteOperacionCheck;	
					 x[0].disabled=true; x[0].checked=false;
					 x[1].disabled=true; x[1].checked=false;
					}
        	}
        			
    
    	}    
    }
     else{
    checked= checkis.checked;
 } 
 

  }
  
  function blokearSecccionesDE(){	
	
		
	  y = document.f.operacionesDisponibles;			
		for (i=0;i<y.length;i++){			
			y[i].disabled = true;	
			y[i].checked = false;						
		}
		
		
		
		
			x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
			
	
				
		for (i=0;i<x.length;i++){			
			x[i].disabled = true;	
			x[i].value = "";	
			z[i].disabled = true;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
		w =  document.f.limiteOperacionCheck;
		w[0].disabled = true; w[0].checked = false;
		w[1].disabled = true; w[1].checked = false;
		
		y = document.f.limiteOperacion1;
	  p = document.f.limiteOperacion2;
    w = document.f.operacionesDisponiblesEliminar;
	
	for(h=0;h<y.length;h++){
		
		if(h!=6) 
        	{
    y[h].disabled=true;
		y[h].value="";
		p[h].disabled=true;
		p[h].value="";
		w[h].disabled=true;
		
		if(h==7) {f.operacionesDisponiblesNumero[0].disabled=true; f.operacionesDisponiblesNumero[0].value=""; }
        	if(h==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }
         
         }
	
	}
		
		
		}// Fin If 2	
		
				
	function desBlokearSecccionesDE(){		
		
	   	y = document.f.operacionesDisponibles;			
		  for (i=0;i<y.length;i++){			
			y[i].disabled = false;	
			y[i].checked = false;						
		}
		  x = document.f.dniMancomunado;		
			z=  document.f.nombreMancomunado;
			p=  document.f.eliminarMancomunado;
				
		  for (i=0;i<x.length;i++){			
			x[i].disabled = false;	
			x[i].value = "";	
			z[i].disabled = false;	
			z[i].value = "";	
			p[i].disabled = true;	
			p[i].checked = false;					
		}
		
	}
	
	/*kgca 14-10-2013*/
	function recetAll(){
		$("#todos").attr("checked",true);
		todasOperaciones();
		$("#todos").attr("checked",false);
		$("#todos").attr("disabled",false);
		$("#limiteOperacionTodo").attr("value",'');
		$("#limiteOperacionTodo").attr("disabled",true);
		$("#operacionesEliminarTodo").attr("checked",false);
		$("#operacionesEliminarTodo").attr("disabled",true);		
	}
	
	function todasOperaciones(id){		
		if(document.f.tipoFormulario.value == "F6I")
			todasOperaciones_Ins(id);
		else
			todasOperaciones_Mod(id);
	}
	
	function todasOperaciones_Mod(){
	$("#limiteOperacionTodo").attr("value",'');
		if ($("#todos").attr("checked") == true){
			if (TipoSolicitudR == '1') {
				$("#limiteOperacionTodo").attr("disabled", false);
				$("#limiteOperacionTodo").focus();
				$("#operacionesEliminarTodo").attr("disabled", true);
			}else{
				$("#limiteOperacionTodo").attr("disabled", true);
				$("#operacionesEliminarTodo").attr("disabled", false);
			}
			for (i=1; i<=38;i++){
				$("#check"+i).attr("checked",false);
				$("#check"+i).attr("disabled",true);
				habilitarLimiteOperacionesR(i);
			}
		}else{
			$("#limiteOperacionTodo").attr("disabled", true);
			$("#operacionesEliminarTodo").attr("disabled", true);
			$("#operacionesEliminarTodo").attr("checked", false);
			
			for (i=1; i<=38;i++){$("#check"+i).attr("disabled",false);}
		}
		if(document.f.tipoFormulario.value == "F6M"){
			if(document.f.check8.checked==true){	
			   document.f.operacionesDisponiblesNumero8.disabled=false;	   
			   document.f.operacionesDisponiblesEliminar8.disabled=false;
			}else{	
			   document.f.operacionesDisponiblesNumero8.disabled=true;	   
			   document.f.operacionesDisponiblesEliminar8.disabled=true;
			}
			document.f.limiteOperacion8.disabled=true;
			document.f.operacionesDisponiblesNumero8.value='';
		}

	}
	
	function todasOperaciones_Ins(){
		if ($("#todos").attr("checked") == true){
			$("#limiteOperacionTodo").attr("disabled", false);
			$("#limiteOperacionTodo").focus();
			//if (TipoSolicitudR != '0') 
			$("#operacionesEliminarTodo").attr("disabled", false);
			
			for (i=1; i<=37;i++){
				$("#check"+i).attr("checked",false);
				$("#check"+i).attr("disabled",true);
				habilitarLimiteOperacionesR(i);
			}
		}else{
			$("#limiteOperacionTodo").attr("disabled", true);
			$("#operacionesEliminarTodo").attr("disabled", true);
			$("#operacionesEliminarTodo").attr("checked", false);
			$("#limiteOperacionTodo").attr("value",'');
			
			for (i=1; i<=37;i++){$("#check"+i).attr("disabled",false);}
		}
		if(document.f.tipoFormulario.value == "F6M"){
			if(document.f.check8.checked==true){	
			   document.f.operacionesDisponiblesNumero8.disabled=false;	   
			   document.f.operacionesDisponiblesEliminar8.disabled=false;
			}else{	
			   document.f.operacionesDisponiblesNumero8.disabled=true;	   
			   document.f.operacionesDisponiblesEliminar8.disabled=true;
			}
			document.f.limiteOperacion8.disabled=true;
			document.f.operacionesDisponiblesNumero8.value='';
		}

	}
			  
	function habilitarLimiteOperacionesR(id){		
		if(document.f.tipoFormulario.value == "F6I")
			habilitarLimiteOperacionesR_Ins(id);
		else
			habilitarLimiteOperacionesR_Mod(id);
	}
	
	function habilitarLimiteOperacionesR_Ins(id){
		if ($("#check"+id).attr("checked") == true){
			$("#limiteOperacion"+id).attr("disabled", false);
			$("#limiteOperacion"+id).focus();
			//if (TipoSolicitudR != '0')	
			$("#operacionesDisponiblesEliminar"+id).attr("disabled", false);
			//try{
			if(document.f.tipoFormulario.value == "F6I")
				$("#operacionesDisponiblesNumero"+id).attr("disabled", false);			
				//}catch(err){}
		}else{
			$("#limiteOperacion"+id).attr("disabled", true);
			$("#operacionesDisponiblesEliminar"+id).attr("disabled", true);
			$("#operacionesDisponiblesEliminar"+id).attr("checked", false);
			$("#limiteOperacion"+id).attr("value",'');
			//try{
			if(document.f.tipoFormulario.value == "F6I"){
				$("#operacionesDisponiblesNumero"+id).attr("disabled", true);
				$("#operacionesDisponiblesNumero"+id).attr("value", '');
			}	//}catch(err){}

		}
	}
			  
	function habilitarLimiteOperacionesR_Mod(id){
		if ($("#check"+id).attr("checked") == true){
			if (TipoSolicitudR != '2'){
				$("#limiteOperacion"+id).attr("disabled", false);
				$("#limiteOperacion"+id).focus();				
				$("#operacionesDisponiblesEliminar"+id).attr("disabled", true);
			}else{
				$("#limiteOperacion"+id).attr("disabled", true);			
				$("#operacionesDisponiblesEliminar"+id).attr("disabled", false);
			}
		}else{
			$("#limiteOperacion"+id).attr("disabled", true);
			$("#operacionesDisponiblesEliminar"+id).attr("disabled", true);
			$("#operacionesDisponiblesEliminar"+id).attr("checked", false);
			$("#limiteOperacion"+id).attr("value",'');
		}
	}
	

/*kgca*/
function formatNumberDecimals(obj){
	var num=obj.value;
	//if (num.indexOf('I') == -1) {
	if (soloDigitosComaPunto(num)) {
		if(num.indexOf('.') == -1)
		{
		
			var rsul = num;
			obj.value = rsul + '.00'
	
			var num=obj.value;
			var num1 = parseFloat(num);
			
			if(num1 < 1){
				obj.value = num1.toFixed(2);
			}
			
			if(num== '.00'){
				//obj.value = '0.00';
				obj.value = '';
			}
			
		}
		else
		{
		  var tmp;
		  var rsul;
          tmp=num.substring(num.indexOf('.')+1,num.length);
          		  
		  if(tmp.length==1){  
			
			rsul=num.substring(0,num.indexOf('.')+2);
			
			obj.value=rsul + '0'
		   }
			var num=obj.value;
			var num1 = parseFloat(num);
			
			if(num1 < 1){
				obj.value = num1.toFixed(2);
			}
			
			if(num1 < 0){
				//obj.value = '0.00';
				obj.value = '';
			}
		}
	} else {
	 obj.value = obj.value.toUpperCase();
	}
}
/*de codigo de usuario*/
function ingresoCaracteresCodUsuario(e){
	var key;
	var valid = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		
	if(e.which){
		key = String.fromCharCode(e.which);
		if (e.which!= 8 && valid.indexOf("" + key) == -1)

			e.preventDefault();
	}
	else if(e.keyCode){
		key = String.fromCharCode(e.keyCode);
		if (valid.indexOf("" + key) == -1)
			e.keyCode = 0;
	}
}



function trimDecimal(sText){
	////alert("ants sText: "+ sText );
	var cc ='0,';
	var chark;
	var tam=sText.length;
	for (i = 0; i < tam ; i++){
		chark = sText.charAt(0); 
		if (cc.indexOf(chark) != -1){
			sText = sText.substring(1,sText.length);			
		}else{break;}
	}
	//alert("despe sText: "+ sText );
	sText = sText.substring(0,1)=="."?"0"+sText:sText;
	sText = sText.substring(sText.length-1,sText.length)=="."?sText+'00':sText;
	return sText;
}

function formatNumberDecimalsAntiguo(obj){
	var num=obj.value;
	if (num.indexOf('I') == -1) {
		if(num.indexOf('.') == -1){
			var rsul = num;
			obj.value = rsul + '.00'
			var num=obj.value;
			var num1 = parseFloat(num);
			if(num1 < 1){
				obj.value = num1.toFixed(2);
			}
			if(num1 <= 0){
				obj.value = '0.00';
			}
		}else{
			var num=obj.value;
			var num1 = parseFloat(num);
			if(num1 < 1){
				obj.value = num1.toFixed(2);
			}
			if(num1 <= 0){
			obj.value = '0.00';
			}
		}
	}else {
		obj.value = obj.value.toUpperCase();
	}
} 


function soloDigitosComaPunto(sText){

	var numerosApostrofe ='1234567890';
	numerosApostrofe = numerosApostrofe + ',.';
	var res=true;
	var chark;
	for (i = 0; i < sText.length && res == true; i++){
		chark = sText.charAt(i); //alert("chark: "+chark);
		if (numerosApostrofe.indexOf(chark) == -1){//alert("if");
			res = false;
			break;
		}
	}
	return res;
}

function formatNumber(obj){
	var num=obj.value;
	if(obj.value.length==4 && obj.value.indexOf(',')!=-1){
		obj.value = obj.value.replace(',', '');
	}else{	
		num=num.replace(/,/g,'');
		num += '';
		if (soloDigitosComaPunto(num)) {
			if (num.length > 12) {
				if (num.indexOf('.') > -1) {
					num = num.substring(0,15);
				} else {
					num = num.substring(0,12) + '.00';
				}
			}
		}
	
		var splitStr = num.split('.');
		var splitLeft = splitStr[0];
		var splitRight = splitStr.length > 1 ? '.' + splitStr[1] : '';
		var regx = /(\d+)(\d{3})/;
	
		while (regx.test(splitLeft)) {
			splitLeft = splitLeft.replace(regx, '$1' + ',' + '$2');
			
			obj.value = splitLeft + splitRight;
			
			var pos = obj.value.indexOf('.'); 
			if (pos > -1) {
				var patron = obj.value.substring(pos,obj.value.length);
				var rsul = obj.value.replace(patron,patron.substring(0,3));
				obj.value = rsul;
			}
		}
	}
}

function formatNumberAntiguo(obj){
	var num=obj.value;
	num=num.replace(/`/g,'');
	num += '';
	if(num.length>12){
		if(num.indexOf('.') > -1){
			num=num.substring(0,15);
		}else{
			num=num.substring(0,12) + '.00';
		}
	}
	var splitStr = num.split('.');
	var splitLeft = splitStr[0];
	var splitRight = splitStr.length > 1 ? '.' + splitStr[1] : '';
	var regx = /(\d+)(\d{3})/;
	while (regx.test(splitLeft)) {
		splitLeft = splitLeft.replace(regx, '$1' + '`' + '$2');
		obj.value=splitLeft + splitRight;
		var pos = obj.value.indexOf('.');
		if(pos>-1){
			var patron = obj.value.substring(pos,obj.value.length);
			var rsul= obj.value.replace(patron,patron.substring(0,3));
			obj.value=rsul;
		}
	}
} 

/*function eliminaOperacion(obj){
	if ($(obj).attr("checked") == true){
		$("#limiteOperacion"+nuItem(obj,'30')).attr("value",'');
		$("#limiteOperacion"+nuItem(obj,'30')).attr("readonly", true);
	}else{
		$("#limiteOperacion"+nuItem(obj,'30')).attr("readonly", false);
	}
}*/
function eliminaOperacion(obj, num){
	if ($(obj).attr("checked") == true){
		if(num!=8){
			$("#limiteOperacion"+num).attr("value",'');
			//$("#limiteOperacion"+num).attr("disabled", true);
		}else{
			$("#operacionesDisponiblesNumero"+num).attr("value",'');
			//$("#operacionesDisponiblesNumero"+num).attr("disabled", true);
		}			
	}else{
		if(num!=8){
			//$("#limiteOperacion"+num).attr("disabled", false);
		}else{
			//$("#operacionesDisponiblesNumero"+num).attr("disabled", false);
		}		
	}
}

function nuItem(obj,pos){
	var idobj= $(obj).attr("id");
	nitem = idobj.substring(pos);
	return nitem;
}
function habilitarPorTipoSolicitudR(tipo){
	recetAll();
	TipoSolicitudR = tipo;
	for(var k =1 ;k<=38;k++){//alert("k:"+k);
		$("#check"+k).attr("disabled",false);
	}
}


function checkEliminaTodos(obj){
	
	if ($(obj).attr("checked") == true){
		//$("#limiteOperacionTodo").attr("value",'');
		//$("#limiteOperacionTodo").attr("disabled", true);
	}else{
		//$("#limiteOperacionTodo").attr("disabled", false);
	}
}
/*
function checkEliminaTodos(obj){
	
	if ($(obj).attr("checked") == true){
		$("#limiteOperacionTodo").attr("value",'');
		$("#limiteOperacionTodo").attr("readonly", true);
	}else{
		$("#limiteOperacionTodo").attr("readonly", false);
	}
}*/