var lLetras=' ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚ';
var lLetrasSinEspacio='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚ';
var lLetrasSinEspacioSinTilde='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
var lLetrasSinEspacioSinTildeMasGuiones='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz-_';
var lAdicional1='.';
var lAdicional2='-';
var lAdicional3='+';
var lAdicional4='_';
var lAdicional5='/';
var lAdicional6='@';
var lNumeros='1234567890';
var lExtraDecimales=',.\'';
var lMantParametros='-/=+.\?:&';
var lTodoMenosEspacio='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚ1234567890,.-´ç`+º¡ª!"·$%&/()=?¿^*Ç¨_:;/*-+\|#~€¬][}{><×£®ëËÇ¦üëèïîìÄÅÉæÆôöòûùâÿÖÜø£Ø×ƒ'

function ingresoMantParametros(e){
	var key;
	var valid = '' + lLetras + lNumeros + lMantParametros;
		
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
	
	
function ingresoLetrasNumeros(e){
	var key;
	var valid = '' + lLetras + lNumeros;
		
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

function ingresoLetrasNumerosGuion(e){
	var key;
	var valid = '' + lLetras + lNumeros + lAdicional2;
		
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

function ingresoLetrasNumerosGuionUnderline(e){
	var key;
	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional4;
		
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

function ingresoLetrasNumerosGuionMas(e){
	var key;
	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional3;
		
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

function ingresoLetrasNumerosGuionMasPunto(e){
	var key;
	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional3 + lAdicional1;
		
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
function ingresoLetrasNumerosGuionPunto(e){
	var key;
	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional1;
		
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
function ingresoLetrasSinTildeConNumerosGuionPuntoArroba(e){
	var sText = document.f.email;
	var key;
	var temp;
	var valid = '' + lLetrasSinEspacioSinTilde + lNumeros + lAdicional2 + lAdicional4 + lAdicional1 + lAdicional6;	
	if(e.which){
		key = String.fromCharCode(e.which);	
		if (e.which!= 8 /*&& valid.indexOf("" + key) == -1*/){
			e.preventDefault();}
	}
	else if(e.keyCode){		
		key = String.fromCharCode(e.keyCode);
		/*if (valid.indexOf("" + key) == -1){
			e.keyCode = 0;
			}else{*/
				if(sText.value.indexOf("@") != -1 && key.indexOf("@") != -1){
					e.keyCode = 0;
				}/*
				if(sText.value.indexOf("@") != -1){
					temp = sText.value.substring(sText.value.indexOf("@"), sText.value.length);
					if(temp.indexOf(".") != -1){
						if(key.indexOf(".") != -1){
							e.keyCode = 0;
						}
						if(lLetrasSinEspacioSinTilde.indexOf(key) == -1){							
							e.keyCode = 0;
						}
					}
				}*/
			//}
	}
}

function ingresoLetrasSinTildeConNumerosGuionPuntoArrobaContacto(e){
	var sText = document.f.emailContacto;
	var key;
	var temp;
	var valid = '' + lLetrasSinEspacioSinTilde + lNumeros + lAdicional2 + lAdicional4 + lAdicional1 + lAdicional6;		
	if(e.which){
		key = String.fromCharCode(e.which);	
		if (e.which!= 8){
			e.preventDefault();}
	}
	else if(e.keyCode){		
		key = String.fromCharCode(e.keyCode);
		if(sText.value.indexOf("@") != -1 && key.indexOf("@") != -1){
			e.keyCode = 0;
		}
	}
}

function ingresoNumeros(e){
	var key;
	var valid = '' + lNumeros + lExtraDecimales;
		
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

function ingresoNumerosYPunto(e){
	var key;
	var valid = '' + lNumeros + '.';
		
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

function ingresoSoloNumeros(e){
	var key;
	var valid = '' + lNumeros;
		
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
function ingresoNumerosSinEspacio(e){

	var key;
	var valid = '' + lNumeros;
	
	
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

function ingresoNumerosGuion(e){

	var key;
	var valid = '' + lAdicional2+ lNumeros;
	
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

function ingresoNumerosSlash(e){

	var key;
	var valid = '' + lAdicional5+ lNumeros;
	
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


function ingresoLetras(e){
	var key;
	var valid = '' + lLetras;
		
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



function ingresoLetrasNumerosSinEspacio(e){
	var key;
	var valid = '' + lLetrasSinEspacio + lNumeros;
		
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


function esLetrasNumerosSinEspacio(o){
	var valid = '' + lLetrasSinEspacio + lNumeros + lExtraDecimales;
		
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}

function esLetras(o){
	var valid = '' + lLetras;
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}
function esNumeros(o){
	var valid = '' + lNumeros + lExtraDecimales;
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}

function esLetrasNumeros(o){
	
	var valid = '' + lLetras + lNumeros;
	
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}
function esLetrasNumerosGuion(o){

	var valid = '' + lLetras + lNumeros + lAdicional2;
	
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}

function esLetrasNumerosGuionMas(o){

	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional3;
	
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}

function esLetrasNumerosGuionMasPunto(o){

	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional3 + lAdicional1;
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}
function esLetrasNumerosGuionPunto(o){

	var valid = '' + lLetras + lNumeros + lAdicional2 + lAdicional1;
	
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}
function esNumerosSinEspacio(o){

	var valid = '' + lNumeros;
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}

function esMantParametros(o){

	var valid = '' + lLetras + lNumeros + lMantParametros;
	for(i=0; i<o.length; i++){
		if(valid.indexOf(o.substring(i,i+1))<0)
			return false;
	}
	return true;
}

//trim a una cadena
function trim(cadena)
{
	for(i=0; i<cadena.length; )
	{
		if(cadena.charAt(i)==" "){
				cadena=cadena.substring(i+1, cadena.length);
		}else{
				break;
		}        
	}
	for(i=cadena.length-1; i>=0; i=cadena.length-1)
	{
		if(cadena.charAt(i)==" "){
				cadena=cadena.substring(0,i);
		}else{
				break;
		}        
	}
	return cadena;
}

// FECHAS

function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}
function FormataDataHora(Obj){
	if(Obj.value.length == 2 || Obj.value.length == 5){
		Obj.value = Obj.value + "/"
	}if(Obj.value.length == 10){
		Obj.value = Obj.value + ""
	}if(Obj.value.length == 13 || Obj.value.length == 16){
		Obj.value = Obj.value + ":"
	}
}

function ingresaFecha(e){
	var key;
	var bar = '/';
	var lNumeros='1234567890';
	var valid = lNumeros;
	
	if(e.which){
		key = String.fromCharCode(e.which);
		if (valid.indexOf("" + key) == "-1")
			e.preventDefault();
		}else if(e.keyCode){
			key = String.fromCharCode(e.keyCode);
			if (valid.indexOf("" + key) == "-1")
				e.keyCode = 0;
	}
} 
function onblurValidaFechaGeneral(o){
		if(o.value != '' && !formatoFecha(o)){
			alert('Ingrese Formato Correcto: dd/mm/yyyy');
			o.focus();
			return false;
		}
		return true;
}
 function formatoFecha(o){
	if(o.value.length!=10 ){
			return false;
		}else{
		 	var b1 = o.value.substring(2,3);
		 	var b2 = o.value.substring(5,6);
		 	var dia = o.value.substring(0,2);
		 	var mes = o.value.substring(3,5);
			var anho = o.value.substring(6,10);
			
			if(esNumerosSinEspacio(dia)&& esNumerosSinEspacio(mes)&& esNumerosSinEspacio(anho)){
				if(b1== '/' && b2 == '/' && dia < 32 && mes<13){return true;}else{return false;}
			}else{return false;}
			
		}
}

// WAM - 20110824 - A - I
 function eligeValidacion(str, e){
	if(str == "2"){
		return ingresoSoloNumeros(e);
	}
}
//kgca
function hayDosDecimales(num){
	var splitStr = num.split('.');
	var splitRight = splitStr[1];
	if(splitRight != null){
		if(splitRight.length==2){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function validarDominioEmail(obj, sec){	
	var retorno = true;
	var sText = obj;	
	var temp1, temp2, temp3, tempInter, tempInter2;
	var valid = '' + lLetrasSinEspacioSinTilde + lNumeros + lAdicional2 + lAdicional4 + lAdicional1 + lAdicional6;
	var msj;
	if(sec == '1')						msj="En la sección "+sec+", el correo electrónico de la Empresa no es válido.";
	if(sec == '3' || sec == '4')		msj="En la sección "+sec+", el correo electrónico de la Persona de Contacto no es válido.";
	
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
function dobleArrobaOut(o){
var sText = o;
	if(sText.value.indexOf("@") != -1){
		var temp1 = sText.value.substring(sText.value.indexOf("@")+1, sText.value.length);
		if(temp1.indexOf("@") != -1){
			sText.value = sText.value.substring(0,sText.value.indexOf("@")+1);
		}
	}	
}
function soloLetrasKGCA(sText){
	var letras='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
	var res=true;
	var chark;
	for (var i = 0; i < sText.length && res == true; i++){
		chark = sText.charAt(i); 
		if (letras.indexOf(chark) == -1){
			res = false;
			break;
		}
	}
	return res;
}
function soloLetrasKGCAMasGuiones(sText){
	var letras='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz-_';
	var res=true;
	var chark;
	for (var i = 0; i < sText.length && res == true; i++){
		chark = sText.charAt(i); 
		if (letras.indexOf(chark) == -1){
			res = false;
			break;
		}
	}
	return res;
}
function soloLetrasKGCAMasGuionesyNumeros(sText){
	var letras='ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz-_0123456789';
	var res=true;
	var chark;
	for (var i = 0; i < sText.length && res == true; i++){
		chark = sText.charAt(i); 
		if (letras.indexOf(chark) == -1){
			res = false;
			break;
		}
	}
	return res;
}







