var letras=' ABCÇDEFGHIJKLMNÑOPQRSTUVWXYZabcçdefghijklmnñopqrstuvwxyzàáÀÁéèÈÉíìÍÌïÏóòÓÒúùÚÙüÜ';
var numeros='1234567890';
var cantidades='-1234567890.,';
var slash='/';
   
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

//********************************************************************************************//

function validar(opm) {
	var x;
	var y;
	var p = 0;
	var r = 0;
	var w;
	var z;
	var flags = 0;
	/***************************************************************************
	 * HOJA 1
	 **************************************************************************/

	// razon social empresa
	x = document.f.razSocEmp;
	x.value = trim(x.value);
	if (x.value.length == 0) {
		alert("Ingrese la Razón Social de la Empresa.");
		x.focus();
		return false;
	}

	// ruc
	x = document.f.rucEmp;
	x.value = trim(x.value);
	if (x.value.length == 0) {
		alert("Ingrese el RUC de la Empresa.");
		x.focus();
		return false;
	}
	if (!soloDigitos(x.value)) {
		alert("El RUC de la Empresa no es válido.");
		x.focus();
		return false;
	}

	// cta.principal cargo
	x = document.f.cuentaPrincipalCargo;
	x.value = trim(x.value);
	if (x.value.length == 0) {
		alert("Ingrese el número de Cuenta Principal de Cargo.");
		x.focus();
		return false;
	}

	if (x.value.length != 20 || x.value.substring(0, 4) != "0011") {
		alert("El número de cuenta no es válido.");
		x.focus();
		return false;
	}

	// telefono
	/*x = document.f.telefonoEmp;
	x.value = trim(x.value);

	if (x.value.length == 0) {
		alert("Ingrese el número de Teléfono.");
		x.focus();
		return false;
	}
	if (x.value.length > 0) {
		if (!soloDigitos(x.value) || x.value.length < 6) {
			alert("El número de Teléfono no es válido.");
			x.focus();
			return false;
		}
	}*/
	// fax
	/*x = document.f.faxEmp;
	x.value = trim(x.value);
	if (x.value.length == 0) {
		alert("Ingrese el número de Fax.");
		x.focus();
		return false;
	}*/
	if (x.value.length > 0) {
		if (!soloDigitos(x.value) || x.value.length < 6) {
			alert("El número de Fax no es válido.");
			x.focus();
			return false;
		}
	}

	// email
	/*x = document.f.email;
	x.value = trim(x.value);

	if (x.value.length == 0) {
		alert("Ingrese el E-Mail de la Empresa.");
		x.focus();
		return false;
	}
	if (x.value.length > 0) {
		if (!soloEmail(x.value)) {
			alert("El E-Mail de la Empresa no es válido.");
			x.focus();
			return false;
		}
	}*/

	// Validar Código de Empresa
	y = document.f.tipoInscripcion[3];
	z = document.f.tipoInscripcion[1];
	w = document.f.tipoInscripcion[2];
	if ((y.checked == true) || (z.checked == true) || (w.checked == true)) {
		x = document.f.codigoEmpresa;
		x.value = trim(x.value);
		if (x.value.length == 0) {
			alert("Ingrese el Código de la Empresa.");
			x.focus();
			return false;
		} else {
			if (x.value.length < 8) {
				alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
				x.focus();
				return false;
			}
		}
	}

	// Tipo de inscripcion
	var flag = 0;
	x = document.f.tipoInscripcion;

	for (k = 0; k < x.length; k++) {
		if (x[k].checked == true)
			break;
	}

	if (k == x.length) {
		alert("Seleccione un Tipo de Inscripción.");
		x[1].focus();
		return true;
	}

	if (k == 0) {
		// valida seccion 3
		x = document.f.versionSistema;

		for (k = 0; k < x.length; k++) {
			if (x[k].checked == true)
				break;
		}

		if (k == x.length) {
			alert("Seleccione una Versión del Sistema.");
			x[0].focus();
			return true;
		}
			
	    //Valida Seccion 4
	    x = document.f.checkSolicitudCab;
	    var tipo = 0;

	    for (k = 0; k < x.length; k++) {
		    if (x[k].checked == true)
            {
		        tipo = k;
			    break;
		    }
	    }
		
	    if (k == x.length) {
		    alert("Indique el Tipo de Administración de Usuarios con el que desea contar.");
		    x[0].focus();
		    return true;
	    }
					
	    if (tipo == 1)
	    {
	        var objTipoAdmDet = document.f.checkSolicitudDet;
		    
            for (k = 0; k < objTipoAdmDet.length; k++)
            {
		        if (objTipoAdmDet[k].checked == true)
			        break;
            }
            			
	        if (k == objTipoAdmDet.length)
	        {
		        alert("Indique el Tipo de Administración Conjunta con el que desea contar.");
		        objTipoAdmDet[0].focus();
		        return true;
	        }
        }

		// valida seccion 5
		// persona de contacto
		z = document.f.nombreContacto;
		z.value = trim(z.value);

		x = document.f.dniContacto;
		y = document.f.combRucCarnetPas;
		w = document.f.emailContacto;

		z.value = trim(z.value);
		if (z.value.length == 0) {
			alert("Ingrese el Nombre de la Persona de Contacto.");
			z.focus();
			return false;
		}

		if (!soloLetras(z.value)) {
			alert("El Nombre de la Persona de Contacto no es válido.");
			z.focus();
			return false;
		}

		x.value = trim(x.value);

		if (x.value.length == 0 && y.value < 0) {
			alert("Seleccione el Tipo de Documento de Identidad.");
			y.focus();
			return false;
		}

		if (x.value.length == 0) {
			alert("Ingrese el N° de Documento de Identidad.");
			x.focus();
			return false;
		}

		if (y.value == 2 && x.value.length != 8) {
			alert("El N° de DNI No es válido.");
			x.focus();
			return false;
		}
		// emailContacto
		if (w.value.length == 0) {
			alert("Ingrese el E-Mail de Contacto.");
			w.focus();
			return false;
		}

		if (w.value.length > 0) {
			if (!soloEmail(w.value)) {
				alert("El E-Mail de Contacto no es válido.");
				w.focus();
				return false;
			}
		}

		// valida seccion 6
		// cuentas de la empresa
		x = document.f.numCuentaEmp;
		y = document.f.monedaCuentaEmp;
		j = 0;
		for (i = 0; i < x.length; i++) {
			if (x[i].value.length > 0 || !((y[i].selectedIndex == 0) || 
			   (y[i].selectedIndex == -1)) ||  document.getElementById('limitediariomonto' + (i + 1)).value.length > 0) {
				j++;
				if (x[i].value.length != 20
						|| x[i].value.substring(0, 4) != "0011") {
					alert("El número de cuenta no es válido.");
					x[i].focus();
					return false;
				}

				if ((y[i].selectedIndex == 0) || (y[i].selectedIndex == -1)) {
					alert("Elija una Moneda.");
					y[i].focus();
					return false;
				}
				
				if (document.getElementById('limitediariomonto' + (i + 1)).value.length == 0) {
					alert("Elija un Límite Diario.");
					document.getElementById('limitediariomonto' + (i + 1)).focus();
					return false;
				}
				
			}
			if (i == x.length - 1) {
				if (j == 0) {
					alert("Ingrese como mínimo 1 cuenta.");
					x[0].focus();
					return false;
				}
			}
		}
	} else if (k == 1) {
		cS = document.f.checkSolicitud;

		if (cS[0].checked == true) {
			// valida seccion 1
			x = document.f.codigoEmpresa;
			x.value = trim(x.value);
			if (x.value.length == 0) {
				alert("Ingrese el Código de la Empresa.");
				x.focus();
				return false;
			} else {
				if (x.value.length < 8) {
					alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
					x.focus();
					return false;
				}
			}

			// valida seccion 5
			// persona de contacto
			z = document.f.nombreContacto;
			z.value = trim(z.value);

			x = document.f.dniContacto;
			y = document.f.combRucCarnetPas;
			w = document.f.emailContacto;

			z.value = trim(z.value);

			if (z.value.length == 0) {
				alert("Ingrese el Nombre de la Persona de Contacto.");
				z.focus();
				return false;
			}

			if (!soloLetras(z.value)) {
				alert("El Nombre de la Persona de Contacto no es válido.");
				z.focus();
				return false;
			}

			x.value = trim(x.value);

			if (x.value.length == 0 && y.value < 0) {
				alert("Seleccione el Tipo de Documento de Identidad.");
				y.focus();
				return false;
			}

			if (x.value.length == 0) {
				alert("Ingrese el N° de Documento de Identidad.");
				f.focus();
				return false;
			}

			if (y.value == 2 && x.value.length != 8) {
				alert("El N° de DNI No es válido.");
				x.focus();
				return false;
			}

			if (w.value.length > 0) {
				if (!soloEmail(w.value)) {
					alert("El E-Mail de Contacto no es válido.");
					w.focus();
					return false;
				}
			}
			// alert("end secc 5");
		}
		// alert("star secc 3");
		if (cS[1].checked == true) {
			// valida seccion 3
			x = document.f.codigoEmpresa;
			x.value = trim(x.value);
			if (x.value.length == 0) {
				alert("Ingrese el Código de la Empresa.");
				x.focus();
				return false;
			} else {
				if (x.value.length < 8) {
					alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
					x.focus();
					return false;
				}
			}

			x = document.f.versionSistema;

			for (k = 0; k < x.length; k++) {
				if (x[k].checked == true)
					break;
			}

			if (k == x.length) {
				alert("Seleccione una Versión del Sistema.");
				x[0].focus();
				return true;
			}
		}
		if (cS[2].checked == true) {
		    //Valida Seccion 4
		    x = document.f.checkSolicitudCab;
		    var tipo = 0;

		    for (k = 0; k < x.length; k++) {
			    if (x[k].checked == true)
                {
			        tipo = k;
				    break;
			    }
		    }
    		
		    if (k == x.length) {
			    alert("Indique el Tipo de Administración de Usuarios con el que desea contar.");
			    x[0].focus();
			    return true;
		    }
    					
		    if (tipo == 1)
		    {
		        var objTipoAdmDet = document.f.checkSolicitudDet;
    		    
                for (k = 0; k < objTipoAdmDet.length; k++)
                {
			        if (objTipoAdmDet[k].checked == true)
				        break;
                }
                			
		        if (k == objTipoAdmDet.length)
		        {
			        alert("Indique el Tipo de Administración Conjunta con el que desea contar.");
			        objTipoAdmDet[0].focus();
			        return true;
		        }
            }
		}
		
		if (cS[3].checked == true) {
			// valida seccion 6
			x = document.f.codigoEmpresa;
			x.value = trim(x.value);
			if (x.value.length == 0) {
				alert("Ingrese el Código de la Empresa.");
				x.focus();
				return false;
			} else {
				if (x.value.length < 8) {
					alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
					x.focus();
					return false;
				}
			}
			// cuentas de la empresa
			x = document.f.numCuentaEmp;
			y = document.f.monedaCuentaEmp;

			j = 0;
			for (i = 0; i < x.length; i++) {
				
					if (x[i].value.length > 0 || !((y[i].selectedIndex == 0) || 
					   (y[i].selectedIndex == -1))) {
						j++;
						if (x[i].value.length != 20
								|| x[i].value.substring(0, 4) != "0011") {
							alert("El número de cuenta no es válido.");
							x[i].focus();
							return false;
						}
	
						if ((y[i].selectedIndex == 0) || (y[i].selectedIndex == -1)) {
							alert("Elija una Moneda.");
							y[i].focus();
							return false;
						}
					}
					/**
					 * Modificacion para elementos radio buttons
					 */
					if (document.getElementById('mlimitediario' + (i + 1)).checked) {
						if (x[i].value.length == 0) {
							alert("Debe ingresar un número de cuenta.");
							x[i].focus();
							return false;
						}
						if ((y[i].selectedIndex == 0) || (y[i].selectedIndex == -1)) {
							alert("Elija una Moneda.");
							y[i].focus();
							return false;
						}
						if (document.getElementById('limitediariomonto' + (i + 1)).value.length == 0) {
							alert("Elija un Límite Diario.");
							document.getElementById('limitediariomonto' + (i + 1)).focus();
							return false;
						}
					}
					
					if (document.getElementById('elimitediario' + (i + 1)).checked) {
						if (x[i].value.length == 0) {
							alert("Debe ingresar un número de cuenta.");
							x[i].focus();
							return false;
						}
						if ((y[i].selectedIndex == 0) || (y[i].selectedIndex == -1)) {
							alert("Elija una Moneda.");
							y[i].focus();
							return false;
						}
					}
				/**/

				if (i == x.length - 1) {
					if (j == 0) {
						alert("Ingrese como mínimo 1 cuenta.");
						x[0].focus();
						return false;
					}
				}
			}
		}

		if (cS[4].checked == true) {
			// valida seccion 7
			x = document.f.codigoEmpresa;
			x.value = trim(x.value);
			if (x.value.length == 0) {
				alert("Ingrese el Código de la Empresa.");
				x.focus();
				return false;
			} else {
				if (x.value.length < 8) {
					alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
					x.focus();
					return false;
				}
			}
			// cuentas pre-inscritas
			x = document.f.numCuentaPreIns;
			y = document.f.monedaPreIns;
			w = document.f.nombreTitularPreIns;
			p = document.f.eliminarPreIns;
			j = 0;
			for (i = 0; i < x.length; i++) {
				if (x[i].value.length > 0) {
					j++;
					if (x[i].value.length != 20
							|| x[i].value.substring(0, 4) != "0011") {
						alert("El número de cuenta no es válido.");
						x[i].focus();
						return false;
					}

					if (y[i].selectedIndex == 0) {
						alert("Elija una Moneda.");
						y[i].focus();
						return false;
					}

					if (w[i].value.length == 0) {
						alert("Ingrese el Nombre del Titular.");
						w[i].focus();
						return false;
					}
				}
				if (i == x.length - 1) {
					if (j == 0) {
						alert("Ingrese como mínimo 1 cuenta.");
						x[0].focus();
						return false;
					}
				}
			}
		}

		if (cS[5].checked == true) {
			// valida seccion 8
			x = document.f.codigoEmpresa;
			x.value = trim(x.value);
			if (x.value.length == 0) {
				alert("Ingrese el Código de la Empresa.");
				x.focus();
				return false;
			} else {
				if (x.value.length < 8) {
					alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
					x.focus();
					return false;
				}
			}
		}
	} else if (k == 2) {
		t = document.f.token;
		if (t.value == '' || t.value == null) {
			t.focus();
			alert("Ingresar número de tokens solicitados.");
			return false;
		}
	}
	imprimir();
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
	}
	if(opm==1)
	{
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
			p[i].disabled = false;	
			p[i].checked = false;					
		  }
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
		document.f.combRucCarnetPas.disabled = false;
		document.f.nombreContacto.disabled=false;
		document.f.dniContacto.disabled=true;		
    document.f.dniContacto.value = "";
		x = document.f.numCuentaEmp01;
		//x[0].value="0011-";
	
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
		document.f.combRucCarnetPas.selectedIndex = 0;
		document.f.nombreContacto.disabled=false;
		document.f.dniContacto.disabled=true;
		document.f.dniContacto.value = "";
		
		x = document.f.numCuentaEmp01;
		//x[0].value="0011-";
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
	}
	
}

function onloadDesactivarLimiteOperaciones(){	
	document.f.dniContacto.disabled = true;
  document.f.dniContacto.value = "";
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

function soloDigitosSlash(sText){
	var res=true;
	var char;
	var valido = numeros + slash;
	for (i = 0; i < sText.length && res == true; i++){
		char = sText.charAt(i); 
		if (valido.indexOf(char) == -1){
			res = false;
			break;
		}
	}
	return res;
}

/*agregado 15-04-2013 kgca - modif 22-05-13*/
function cuentaCorrecta(cuenta){
	var m='';	
	var error = false;	
	if(cuenta.length == 0){		
		error=false;
	}else{	
		for(var k=0; k < cuenta.length && error==false; k++){
			m=cuenta.substring(k,k+1);
			if(k==4 || k==9){
				if(m.indexOf("-") == -1) error=true;
			}else{
				if(!soloDigitos(m)) error=true;
			}
		}
	}
	return !error;
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
  function desactivarVersionSistema0(){	
		document.f.versionSistema[1].checked = false;
		document.f.versionSistema[2].checked = false;
		document.f.versionSistema[3].checked = false;
		document.f.versionSistema[4].checked = false;
}
function desactivarVersionSistema1(){	
		document.f.versionSistema[0].checked = false;
		document.f.versionSistema[2].checked = false;
		document.f.versionSistema[3].checked = false;	
		document.f.versionSistema[4].checked = false;
}
function desactivarVersionSistema2(){	
		document.f.versionSistema[0].checked = false;
		document.f.versionSistema[1].checked = false;
		document.f.versionSistema[3].checked = false;	
		document.f.versionSistema[4].checked = false;	
}
function desactivarVersionSistema3(){	
		document.f.versionSistema[0].checked = false;
		document.f.versionSistema[1].checked = false;
		document.f.versionSistema[2].checked = false;	
		document.f.versionSistema[4].checked = false;
}
function desactivarVersionSistema4(){	
		document.f.versionSistema[0].checked = false;
		document.f.versionSistema[1].checked = false;
		document.f.versionSistema[2].checked = false;	
		document.f.versionSistema[3].checked = false;
}
function blokearCuentasPreInscritas()
  {
  	
  	var checkis=f.eliminarCuentaTercero01;
  	
  	//y=f.titularCuentaTercero01;
  	 x=document.f.titularCuentaTercero01;
  	 y=document.f.monedaCuentaTercero01;
  	for(var q=0;q<checkis.length;q++){
  if(checkis[q].checked)
        {  
          x[q].disabled=true;
          x[q].value="";
          y[q].selectedIndex = 0;
          y[q].selected = true;
          y[q].disabled = true;      
          
          if (x[q].value != ""){			
				
				if(x[q].value.length != 20 || x[q].value.substring(0,4) != "0011"){
					
					alert("El número de cuenta no es válido.");
					x[q].focus();
					return false;
				}
			
				
			}    
          
        }
      if(!checkis[q].checked)
      {x[q].disabled=false;
      	 y[q].selected = false;
          y[q].disabled = false;  
         
      	
      	}
        
      }
    }

function Seleccionar(combo){
    var indice = combo.selectedIndex;
    var valor = combo.options[combo.selectedIndex].text;
    //alert(indice);
    //alert(valor);

	combo.selectedIndex=0;
	combo.options[combo.selectedIndex].text=valor.substring(0,3);
//document.getElementById("combRucCarnetPas").firstChild.nodeValue=valor.substring(0,3);
/*if(valor=1)
document.getElementById("dniContacto").maxlength=8;
else
document.getElementById("dniContacto").maxlength=30;
*/
}

function desactivarTipoIns0(){	
		document.f.tipoInscripcion[1].checked = false;
		document.f.tipoInscripcion[2].checked = false;
		//document.f.tipoInscripcion[3].checked = false;
}
function desactivarTipoIns1(){	
		//document.f.tipoInscripcion[1].checked = false;
		document.f.tipoInscripcion[2].checked = false;
		//document.f.tipoInscripcion[3].checked = false;
}
function desactivarTipoIns2(){	
		//document.f.tipoInscripcion[0].checked = false;
		document.f.tipoInscripcion[2].checked = false;
		//document.f.tipoInscripcion[3].checked = false;
}
function desactivarTipoIns3(){	
		document.f.tipoInscripcion[0].checked = false;
		document.f.tipoInscripcion[1].checked = false;
		//document.f.tipoInscripcion[2].checked = false;	
}

function habilitarTipoModificacionDatosEmpresa0(check){

}

function inhabsec3(){

		document.getElementById('checkSolicitud1').disabled=true;
		document.getElementById('checkSolicitud2').disabled=true;
		document.getElementById('checkSolicitud3').disabled=true;
	    document.getElementById('checkSolicitud4').disabled=true;
		document.getElementById('checkSolicitud5').disabled=true;
		
		document.getElementById('checkSolicitud1').checked=false;
		document.getElementById('checkSolicitud2').checked=false;
		document.getElementById('checkSolicitud3').checked=false;
	    document.getElementById('checkSolicitud4').checked=false;
		document.getElementById('checkSolicitud5').checked=false;
}

function inhabsec4(){

		document.getElementById('nombreContacto').disabled=true;
		document.getElementById('nombreContacto').value="";
		document.getElementById('combRucCarnetPas').disabled=true;
		document.getElementById('combRucCarnetPas').value="";
		document.getElementById('dniContacto').disabled=true;
		document.getElementById('dniContacto').value="";
		document.getElementById('emailContacto').disabled=true;
		document.getElementById('emailContacto').value="";


}

function inhabsec5(){

 document.getElementById('idseccion8fila0columna3').disabled=true;
 document.getElementById('idseccion8fila0columna3').checked=false;
 document.getElementById('seccion8fila0columna4').disabled=true;
 document.getElementById('seccion8fila0columna4').value='';
 document.getElementById('seccion8fila0columna5').disabled=true;
 document.getElementById('seccion8fila0columna5').value='';
 document.getElementById('seccion8fila0columna6').disabled=true;
 document.getElementById('seccion8fila0columna6').value='';

	for ( var fila = 1; fila < 18; fila ++ ) {	    
	  document.getElementById('idseccion8fila'+fila+'columna3').disabled=true;
	  document.getElementById('seccion8fila'+fila+'columna5').disabled=true;
	  document.getElementById('seccion8fila'+fila+'columna8').disabled=true;
	  document.getElementById('idseccion8fila'+fila+'columna3').checked=false;
	  document.getElementById('seccion8fila'+fila+'columna8').checked=false;
	  document.getElementById('idseccion8fila'+fila+'columna3').value="";
	  document.getElementById('seccion8fila'+fila+'columna5').value="";
	}
	
	document.getElementById('idseccion8fila25columna3').disabled=true;
	document.getElementById('idseccion8fila25columna3').checked=false;
	document.getElementById('seccion8fila25columna8').disabled=true;
	document.getElementById('seccion8fila25columna8').checked=false;
	document.getElementById('seccion8fila25columna5').disabled=true;
	document.getElementById('seccion8fila25columna5').value="";
	
	for ( var fila = 18; fila < 25; fila ++ ) {
		document.getElementById('idseccion8fila'+fila+'columna3').disabled=true;
		document.getElementById('seccion8fila'+fila+'columna4').disabled=true;
		document.getElementById('seccion8fila'+fila+'columna5').disabled=true;
		document.getElementById('seccion8fila'+fila+'columna6').disabled=true;
		document.getElementById('seccion8fila'+fila+'columna8').disabled=true;
		document.getElementById('idseccion8fila'+fila+'columna3').checked=false;
		document.getElementById('seccion8fila'+fila+'columna8').checked=false;
		document.getElementById('idseccion8fila'+fila+'columna3').value="";
		document.getElementById('seccion8fila'+fila+'columna4').value="";
		document.getElementById('seccion8fila'+fila+'columna5').value="";
		document.getElementById('seccion8fila'+fila+'columna6').value="";
	}
	
}

function inhabsec6() {
	columna = 1;
		for ( var fila = 1; fila < 15; fila ++ ) {
			 document.getElementById('seccion5fila'+fila+'columna'+columna).disabled=true;	 
			 document.getElementById('eli'+fila).checked=false;
			 document.getElementById('eli'+fila).disabled=true;
		}
		for ( var fila = 1; fila < 11; fila ++ ) {
			
			document.getElementById('seccion5fila'+fila+'columna'+columna).value="0011-";			
			
		}
		for ( var fila = 11; fila < 15; fila ++ ) {
			
			document.getElementById('seccion5fila'+fila+'columna'+columna).value="0011-";			
			
		}
	for (i = 1; i <= 250; i++) {
		document.getElementById(i).disabled = true;		
		document.getElementById(i).checked = false;	
	}
	
	for( var i=11; i<15;i++){
		   
		    document.getElementById('eli'+i).disabled=true;
			document.getElementById('eli'+i).checked=false;
		 }
	
	for( var k = 1; k < 12; k ++ ) {
			/*document.getElementById('extra'+k).disabled=true;
			document.getElementById('extra'+k).checked = false;*/
		 }
}

function inhabsec7() {
	for ( var fila = 11; fila < 16; fila ++  ) {
		document.getElementById('seccion6fila'+fila+'columna1').disabled=true;
		document.getElementById('seccion6fila'+fila+'columna3').disabled=true;
		document.getElementById('seccion6fila'+fila+'columna5').disabled=true;
		document.getElementById('seccion6fila'+fila+'columna1').value="0011-";
		document.getElementById('seccion6fila'+fila+'columna3').value="";
		document.getElementById('seccion6fila'+fila+'columna5').checked=false;
	}
}



function habilitarTipoModificacionDatosEmpresa1(check){
	var value = check.checked;
	if (value==true) {
		x = document.f.checkSolicitud;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
		}
		
		//Para TOKEN
	/*	document.f.checkSolicitudToken.value = "";
		document.f.checkSolicitudToken.disabled = true;
		*/
		try {
			document.f.token.disabled = true;//Esta linea esta errada
			document.f.token.value = '';//Esta linea esta errada
		} catch(err) {
			
		}
	} else {
		x = document.f.checkSolicitud;
		for (i=0;i<x.length;i++){
			x[i].checked = false;
			x[i].disabled = true;			
		}
		inhabsec3();
		inhabsec4();
		inhabsec5();
		inhabsec6();
		inhabsec7();
		//Para TOKEN
		/*document.f.checkSolicitudToken.value = "";
		document.f.checkSolicitudToken.disabled = true;
		*/
		/*inHabilitarSeccion8();
		inHabilitarSeccion7();
		inHabilitarSeccion6();
		inHabilitarSeccion3();
		inHabilitarSeccion15();	*/
	}
}
function habilitarTipoModificacionDatosEmpresa2(check){
	var value = check.checked;
	if ( value == true ) {
		try {
			document.f.token.disabled = false;//Esta linea esta errada
		} catch(err) {
		}
		
		x = document.f.checkSolicitud;
		/*for (i=0;i<x.length;i++) {
			x[i].checked = false;
			x[i].disabled = true;
		}*/
		
		/*inhabsec3();
	    inhabsec4();
		inhabsec5();
		inhabsec6();
		inhabsec7();
		*/
		/*inHabilitarSeccion8();
		inHabilitarSeccion7();
		inHabilitarSeccion6();
		inHabilitarSeccion3();
		inHabilitarSeccion15();*/
	} else {
		//Estas lineas estan erradas
		try {
			document.f.token.disabled = true;
			document.f.token.value = '';
		} catch(err) {
		}
	}
}	
function habilitarTipoModificacionDatosEmpresa3(check){
	var value = check.checked;

	if (value==true) {
		x = document.f.checkSolicitud;
		for (i=0;i<x.length;i++) {
			x[i].checked = false;
			x[i].disabled = true;
		}
		
		inhabsec3();
		inhabsec4();
		inhabsec5();
		inhabsec6();
		inhabsec7();
		//Para TOKEN
		document.f.checkSolicitudToken.value = "";
		document.f.checkSolicitudToken.disabled = true;
		
		try { 
			document.f.token.disabled = true;//Esta linea esta errada
			document.f.token.value = '';//Esta linea esta errada
		} catch(err) {
		
		}
		/*inHabilitarSeccion8();
		inHabilitarSeccion7();
		inHabilitarSeccion6();
		inHabilitarSeccion3();
		inHabilitarSeccion15();*/
	} else {
	
	}
}


function habilitarSeccion15(check){
	/*cS = document.f.checkSolicitud;
	cS[1].checked=false;
	cS[2].checked=false;
	cS[3].checked=false;
	cS[4].checked=false;*/
	var value = check.checked;
	value=value.toString();
	
		if(value=='true'){				
			//secc1
			//document.f.codigoEmpresa.disabled = false;
			//secc5 
			document.f.combRucCarnetPas.disabled = false;
			document.f.nombreContacto.disabled=false;
			document.f.dniContacto.disabled=false;		
			document.f.emailContacto.disabled=false
		}else{

			//secc1
			//document.f.codigoEmpresa.disabled = true;
			//secc5 
			document.f.combRucCarnetPas.disabled = true;
			document.f.nombreContacto.disabled=true;
			document.f.dniContacto.disabled=true;		
			document.f.emailContacto.disabled=true;
			
			limpiar15();
		}
}	
function inHabilitarSeccion15(){
			//secc1
			//document.f.codigoEmpresa.disabled = true;
			//secc5 
			document.f.combRucCarnetPas.disabled = true;
			document.f.nombreContacto.disabled=true;
			document.f.dniContacto.disabled=true;		
			document.f.emailContacto.disabled=true;
			limpiar15();
}	
function limpiar15(){
			//secc1
			//document.f.codigoEmpresa.value = '';
			//secc5 
			document.f.combRucCarnetPas.value = -1;
			document.f.nombreContacto.value='';
			document.f.dniContacto.value='';		
			document.f.emailContacto.value='';					
			

}		
function habilitarSeccion3(check){
	//alert("seccion 3");
	/*cS = document.f.checkSolicitud;
	cS[0].checked=false;
	cS[2].checked=false;
	cS[3].checked=false;
	cS[4].checked=false;*/
	var value = check.checked;

		if(value==true){					
			//secc3
			x = document.f.versionSistema;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
		}else{
			//secc3
			x = document.f.versionSistema;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar3();
			
		}
	}
function inHabilitarSeccion3(){

			//secc3
			x = document.f.versionSistema;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar3();
}		
function limpiar3(){

			//secc3
			x = document.f.versionSistema;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
			}
}

//Sección 04 - Inicio - WAM
function habilitarSeccion4(check){
    var f = document.forms[0];
    var objTipoAdmCab = f.checkSolicitudCab;
    var objTipoAdmDet = f.checkSolicitudDet;

	var value = check.checked;
	var boolDisabled = false;
	
	if(value == true)
	{
	    boolDisabled = false;
	}
	else
	{
	    boolDisabled = true;
	}
	
    for (i = 0; i < objTipoAdmCab.length; i++)
    {
        objTipoAdmCab[i].disabled = boolDisabled;
        objTipoAdmCab[i].checked = false;
    }
    
    for (i = 0; i < objTipoAdmDet.length; i++)
    {
        objTipoAdmDet[i].disabled = true;
        objTipoAdmDet[i].checked = false;
    }
}
//Sección 04 - Fin - WAM


function habilitarSeccion6(check){
	var value = check.checked;
	
	if(value==true){					
		//secc6
		
		x = document.f.numCuentaEmp;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
		}

		x = document.f.monedaCuentaEmp;
		for (i=0;i<x.length;i++){
			x[i].disabled = false;
			document.getElementById('limitediariomonto' + (i+1)).disabled = false;
			document.getElementById('mlimitediario' + (i+1)).disabled = false;
			document.getElementById('elimitediario' + (i+1)).disabled = false;
		}
		
		
	}else{
		
		//secc6
		x = document.f.numCuentaEmp;
		for (i=0;i<x.length;i++){
			x[i].disabled =true;
		}
		
		x = document.f.monedaCuentaEmp;
		for (i=0;i<x.length;i++){
			x[i].disabled = true;
			document.getElementById('limitediariomonto' + (i+1)).disabled = true;
			document.getElementById('mlimitediario' + (i+1)).disabled = true;
			document.getElementById('elimitediario' + (i+1)).disabled = true;
		}
		limpiar6();
	}
}
function inHabilitarSeccion6(){	
			//secc6
			x = document.f.numCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled =true;
			}

			x = document.f.monedaCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar6();
}
function limpiar6(){	
			//secc6
			x = document.f.numCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].value ='';
			}
			
			x = document.f.monedaCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].selectedIndex = -1;
				document.getElementById('limitediariomonto' + (i+1)).value = "";
				document.getElementById('mlimitediario' + (i+1)).checked = false;
				document.getElementById('elimitediario' + (i+1)).checked = false;
			}
			
}
function habilitarSeccion7(check){
	var value = check.checked;

		if(value==true){					
			//secc7
			x = document.f.eliminarPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}	
			
			x = document.f.nombreTitularPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}	
			
			x = document.f.monedaPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}	
			
			x = document.f.numCuentaPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}	
		}else{
			//secc7
			x = document.f.eliminarPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			
			x = document.f.nombreTitularPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			
			x = document.f.monedaPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			
			x = document.f.numCuentaPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar7();
		}
	}
	
function inHabilitarSeccion7(){

			//secc7
			x = document.f.eliminarPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			
			x = document.f.nombreTitularPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			
			x = document.f.monedaPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			
			x = document.f.numCuentaPreIns;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar7();
}
function limpiar7(){

			//secc7
			x = document.f.eliminarPreIns;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
			}	
			
			x = document.f.nombreTitularPreIns;
			for (i=0;i<x.length;i++){
				x[i].value = '';
			}	
			
			x = document.f.monedaPreIns;
			for (i=0;i<x.length;i++){
				x[i].value = -1;
			}	
			
			x = document.f.numCuentaPreIns;
			for (i=0;i<x.length;i++){
				x[i].value = '';
			}
			
}		
function habilitarSeccion8(check){
	/*cS = document.f.checkSolicitud;
	cS[0].checked=false;
	cS[1].checked=false;
	cS[2].checked=false;
	cS[3].checked=false;*/
	var value = check.checked;

		if(value==true){					
			//secc8
			x = document.f.limiteServicios;
			for (i=0;i<x.length;i++){
				if(x[i].id == 'limiteServiciosCH')
				{
					x[i].disabled = true;
				}
				else
				{
					x[i].disabled = false;
				}
			}	
			x = document.f.limiteServiciosEliminar;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
		}else{
			//secc8
			x = document.f.limiteServicios;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			x = document.f.limiteServiciosEliminar;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar8();
		}
		
}

function inHabilitarSeccion8(){
	
			//secc8
			x = document.f.limiteServicios;
			
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}	
			x = document.f.limiteServiciosEliminar;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
			limpiar8();
}
function limpiar8(){
	
			//secc8
			x = document.f.limiteServicios;
			for (i=0;i<x.length;i++){
				x[i].value = '';
			}	
			x = document.f.limiteServiciosEliminar;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
			}
		
}

function eliminarDatosfilaR(seccion,fila,estado){
	if (estado == 'elimina'){
		$("#seccion" + seccion + "fila" + fila + "columna3").attr("readonly",true);
		$("#seccion" + seccion + "fila" + fila + "columna3").attr("value", '');
		//alert(seccion + ' : ' + fila + ' : ' +estado);
	}else{
		$("#seccion" + seccion + "fila" + fila + "columna3").attr("readonly",false);
		//alert(seccion + ' : ' + fila + ' : ' +estado);
	}
}
