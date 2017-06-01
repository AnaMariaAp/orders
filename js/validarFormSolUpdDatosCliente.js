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

//********************************************************************************************//
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
function validar(opm){
	var x;
	var y;
	var p=0;
	var r=0;
	var w;
	var z;
	var flags=0;
	
	/********************************/
	/* Tipo de Solicitud            */
	/********************************/
	
	x = document.f.chkTipoSol01;
	y = document.f.chkTipoSol02;
	if(x.checked == false && y.checked == false)
	{
	    alert("Debe seleccionar el Tipo de Solicitud.");
	    return false;
	}

	/********************************/
	/* Datos de la Empresa          */
	/********************************/
		
	//Razon Social Empresa
	x = document.f.razSocEmp;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese la Razón Social de la Empresa.");
		x.focus();
		return false;
	}
	
	//RUC
	x = document.f.rucEmp;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese el RUC de la Empresa.");
		x.focus();
		return false;
	}
	if (!soloDigitos(x.value)){
		alert("El RUC de la Empresa no es válido.");
		x.focus();
		return false;
	}
	
	//Codigo Empresa
	x = document.f.codigoEmpresa;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese el Código de la Empresa.");
		x.focus();
		return false;				
	}
	else
    {
        if (x.value.length < 8)
        {
	        alert("El Código de Empresa debe de tener 8 dígitos,\ncompletar con ceros a la izquierda de ser necesario.");
	        x.focus();
	        return false;
        }
    }
	/********************************/
	/* Datos Cliente                */
	/********************************/
	
	//Nombre
	x = document.f.nombCliente;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese nombre de cliente.");
		x.focus();
		return false;
	}
	
	//Dirección de e-mail
	x = document.f.emailCliente;
	x.value = trim(x.value);
	
	if (x.value.length==0){
		alert("Ingrese el E-Mail.");
		x.focus();
		return false;
	}
	if (x.value.length>0){
	    if (!soloEmail(x.value)){
		    alert("El E-Mail no es válido.");
		    x.focus();
		    return false;
	    }
	}
	
	//Codigo de Usuario.
	x = document.f.codUserUpdCli
	x.value = trim(x.value);
	if (x.value.length == 0){
		alert("Ingrese el Código de Usuario.");
		x.focus();
		return false;
	}
	
	//Nro. Doc. de Identidad
	x = document.f.dniUpdCli;
	
	//Tipo de Doc. de Identidad
	y = document.f.combTipoDNIUpdCli;
	
	x.value = trim(x.value);
	
    if (x.value.length==0 && y.value < 0){
		alert("Seleccione el Tipo de Documento de Identidad.");	
		y.focus();
		return false;
	}
	
	if (x.value.length==0){
		alert("Ingrese el N° de Documento de Identidad.");
		x.focus();
		return false;
	}
	
	if(y.value==2 && x.value.length!=8)
	{
		alert("El N° de DNI no es válido.");
		x.focus();
		return false;
	}
	
	//Teléfono de Contacto
	x = document.f.telfUpdCli;
	x.value = trim(x.value);
	if (x.value.length==0)
	{
		alert("Ingrese el número de Teléfono de Contacto.");
		x.focus();
		return false;
	}
	if(x.value.length>0)
	{
	    if (!soloDigitos(x.value) || x.value.length<6)
	    {
		    alert("El número de Teléfono de Contacto no es válido.");
		    x.focus();
		    return false;
		}
	}	
    
	/********************************/
	/* Termina de validar e imprime */
	/********************************/
	
	imprimir();
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

function Seleccionar(combo){
      var indice = combo.selectedIndex;
      var valor = combo.options[combo.selectedIndex].text;
      combo.selectedIndex=0;
      combo.options[combo.selectedIndex].text=valor.substring(0,3);
}