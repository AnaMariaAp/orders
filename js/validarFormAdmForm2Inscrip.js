var letras=' ABC�DEFGHIJKLMN�OPQRSTUVWXYZabc�defghijklmn�opqrstuvwxyz������������������������';
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
	 ** HOJA 1
	 *****************************************************************************************************************
	 *****************************************************************************************************************/
	 
	//razon social empresa
	x = document.f.razSocEmp;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese la Raz�n Social de la Empresa.");
		x.focus();
		return false;
	}
	
	//ruc	
	x = document.f.rucEmp;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese el RUC de la Empresa.");
		x.focus();
		return false;
	}
	if (!soloDigitos(x.value)){
		alert("El RUC de la Empresa no es v�lido.");
		x.focus();
		return false;
	}
	
	if (x.value.length!=11){// el numero de ruc tiene que ser 11 digitos
		alert("El RUC de la Empresa no es v�lido.");
		x.focus();
		return false;
	}
	
	z = document.f.nombreContacto;
	z.value = trim(z.value);
	x = document.f.dniContacto;
	y = document.f.combRucCarnetPas;
	z.value = trim(z.value);
	
	if (z.value.length==0){
		alert("Ingrese el Nombre del Usuario Administrador.");
		z.focus();
		return false;
	}
	
	if (!soloLetras(z.value)){
		alert("El Nombre del Usuario Administrador no es v�lido.");
		z.focus();
		return false;
	}
	
	x.value = trim(x.value);
	
	if (x.value.length==0 && y.value < 0){
		alert("Seleccione el Tipo de Documento de Identidad.");
		y.focus();
		return false;
	}
	
	if (x.value.length==0){
		alert("Ingrese el N� de Documento de Identidad.");
		x.focus();
		return false;
	}
	if(y.value==2 && x.value.length!=8)
	{
		alert("El N� de DNI No es v�lido.");
		x.focus();
		return false;
	}
	//email
	x = document.f.email;
	x.value = trim(x.value);
	
	if (x.value.length==0){
		alert("Ingrese el E-Mail del Usuario Administrador.");
		x.focus();
		return false;
	}
	if (x.value.length>0){
		if (!soloEmail(x.value)){
			alert("El E-Mail de la Empresa no es v�lido.");
			x.focus();
			return false;
		}
	}
	
	//telefono
	x = document.f.telefonoEmp;
	x.value = trim(x.value);
	
	if (x.value.length==0){
		alert("Ingrese el n�mero de Tel�fono de Contacto.");
		x.focus();
		return false;
	}
	
	if(x.value.length>0){
		if (!soloDigitos(x.value) || x.value.length<6){
			alert("El n�mero de Tel�fono no es v�lido.");
			x.focus();
			return false;
		}
	}
	
	//tipo de inscripcion	
	var flag = 0;
	x = document.f.tipoInscripcion;

	for(k=0; k<x.length; k++){
		if(x[k].checked == true)
			break;
	}
	if (k == x.length){
		alert("Seleccione un Tipo de Inscripci�n.");
		x[1].focus();
		return true;
	}
	
	if (k == 0){
		x = document.f.checkSolicitud2;
		for(k = 0; k < x.length; k++){
			if(x[k].checked == true)
				break;
		}
		
		if (k == x.length){
			alert("Seleccione un perfil de usuario.");
			return true;
		}
		
		x = document.f.codigoEmpresa;
		x.value = trim(x.value);
		
		if (x.value.length==0){
			alert("Ingrese el C�digo de Empresa.");
			x.focus();
			return false;
		}
		else {
	        	if (x.value.length < 8) {
		        	alert("El C�digo de Empresa debe de tener 8 d�gitos,\ncompletar con ceros a la izquierda de ser necesario.");
		        	x.focus();
		        	return false;
            		}
		}
	}
	
	
	
	if (k == 1){
		//codigo empresa
		x = document.f.codigoEmpresa;
		x.value = trim(x.value);
		
		if (x.value.length==0){
			alert("Ingrese el C�digo de Empresa.");
			x.focus();
			return false;
		}
		else {
	        	if (x.value.length < 8) {
		        	alert("El C�digo de Empresa debe de tener 8 d�gitos,\ncompletar con ceros a la izquierda de ser necesario.");
		        	x.focus();
		        	return false;
            		}
		}
	
		
		// solo si se esta modificando el formulario y esta marcado el check de modificar
		if(document.f.tipoInscripcion[1].checked == true) {
			
			y = document.f.checkSolicitud;
			for(w = 0; w < y.length; w++){
				if(y[w].checked == true)
					break;
			}
			
			if (w == y.length){
				alert("Si requiere modificar un usuario existente, precise la gesti�n que se est� solicitando.");
				return false;
			}
		}
	}
	
	if (k == 2){
		//codigo empresa
		x = document.f.codigoEmpresa;
		x.value = trim(x.value);
		
		if (x.value.length==0){
			alert("Ingrese el C�digo de Empresa.");
			x.focus();
			return false;
		}
		else
	    {
	        if (x.value.length < 8)
	        {
		        alert("El C�digo de Empresa debe de tener 8 d�gitos,\ncompletar con ceros a la izquierda de ser necesario.");
		        x.focus();
		        return false;
            }
	    }
	}
	
	
	if(!(document.f.checkSolicitud21.checked ||  document.f.checkSolicitud22.checked || document.f.checkSolicitud23.checked || document.f.checkSolicitud24.checked)){
	  alert(" Ingresar el Perfil del Usuario");
	  return false;
	}
	//imprimir();
		imprimirK();
	
}
function imprimirK(){			
	print();	
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
 //***si hay varios seleccionados @OPM�    
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
					
					alert("El n�mero de cuenta no es v�lido.");
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
		document.f.desactivarTipoIns[1].checked = false;
		document.f.desactivarTipoIns[2].checked = false;
		//document.f.desactivarTipoIns[3].checked = false;
}
function desactivarTipoIns1(){	
		//document.f.desactivarTipoIns[0].checked = false;
		document.f.tipoInscripcion[2].checked = false;
		//document.f.desactivarTipoIns[3].checked = false;

}
function desactivarTipoIns2(){	
		//document.f.desactivarTipoIns[0].checked = false;
		document.f.tipoInscripcion[1].checked = false;
		//document.f.desactivarTipoIns[3].checked = false;	
			
}
function desactivarTipoIns3(){	
		document.f.desactivarTipoIns[0].checked = false;
		document.f.desactivarTipoIns[1].checked = false;
		document.f.desactivarTipoIns[2].checked = false;	
}

function habilitarTipoModificacionDatos1(check){

var value = check.checked;
		if(value==true){
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
			/*
			document.f.codigoEmpresa.disabled = false;
			document.f.codigoEmpresa.value = '';
			*/
		}
		else{
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
				x[i].disabled = true;
			}
			/*
			document.f.codigoEmpresa.disabled = true;
			document.f.codigoEmpresa.value = '';
			*/	
		}
}
function habilitarTipoModificacionDatos2(check){

var value = check.checked;
		if(value==true){
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
				x[i].disabled = true;
			}
			/*
			document.f.codigoEmpresa.disabled = false;
			document.f.codigoEmpresa.value = '';
*/

		}
		else{
		/*
			document.f.codigoEmpresa.disabled = true;
			document.f.codigoEmpresa.value = '';
			*/
		}
}


function habilitarTipoModificacionDatos2Formu2(check){
alert("valor: " + check.checked);


var value = check.checked;
		if(value==true){
			
		  alert("Mostrar:  "+document.f.checkSolicitud21.disabled);	
	          document.f.checkSolicitud21.disabled =false;
	          document.f.checkSolicitud22.disabled =false;
	          document.f.checkSolicitud23.disabled =false;
	          document.f.checkSolicitud24.disabled =false;
	          	          
		}else{
		  document.f.checkSolicitud21.disabled =true;
	          document.f.checkSolicitud22.disabled =true;
	          document.f.checkSolicitud23.disabled =true;
	          document.f.checkSolicitud24.disabled =true;
	        
		}
}


function inHabilitarTipoModificacionDatos(check){

}


function habilitarTipoModificacionDatosEmpresa1(check){
var value = check.checked;

		if(value==true){
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
			document.f.codigoEmpresa.disabled = false;
		}
		else{
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
		}
}
function habilitarTipoModificacionDatosEmpresa2(check){
var value = check.checked;

		if(value==true){
		document.f.token.disabled = false;
		document.f.codigoEmpresa.disabled = false;
		}
		else{
		document.f.token.disabled = true;
		}
}	
function habilitarTipoModificacionDatosEmpresa3(check){
var value = check.checked;

		if(value==true){}
		else{}
}


function habilitarSeccion15(check){
	var value = check.checked;
	value=value.toString();
	if(value=="true"){				
		//secc1
		document.f.codigoEmpresa.disabled = false;
		/*secc5 
		document.f.combRucCarnetPas.disabled = false;
		document.f.nombreContacto.disabled=false;
		document.f.dniContacto.disabled=false;		
		document.f.emailContacto.disabled=false
		*/
	}else{

		//secc1
		document.f.codigoEmpresa.disabled = true;
		document.f.codigoEmpresa.value = '';
		/*secc5 
		document.f.combRucCarnetPas.disabled = true;
		document.f.nombreContacto.disabled=true;
		document.f.dniContacto.disabled=true;		
		document.f.emailContacto.disabled=true;
		*/
	}
}

function habilitarSeccion15Form2(check){
	var value = check.checked;
	value=value.toString();
	if(value=="true"){				
		//secc1
		document.f.codigoEmpresa.disabled = false;
		/*secc5 
		document.f.combRucCarnetPas.disabled = false;
		document.f.nombreContacto.disabled=false;
		document.f.dniContacto.disabled=false;		
		document.f.emailContacto.disabled=false
		*/
	}else{

		//secc1
		/*document.f.codigoEmpresa.disabled = true;
		document.f.codigoEmpresa.value = '';*/
		/*secc5 
		document.f.combRucCarnetPas.disabled = true;
		document.f.nombreContacto.disabled=true;
		document.f.dniContacto.disabled=true;		
		document.f.emailContacto.disabled=true;
		*/
	}
}


		
function habilitarSeccion3(check){
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
		}
	}	
function habilitarSeccion6(check){
	var value = check.checked;

		if(value==true){					
			//secc6
			x = document.f.numCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
			
			x = document.f.eliminarCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}		
			
			x = document.f.monedaCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
		}else{
			//secc6
			x = document.f.numCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled =true;
			}
			
			x = document.f.eliminarCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}		
			
			x = document.f.monedaCuentaEmp;
			for (i=0;i<x.length;i++){
				x[i].disabled = true;
			}
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
		}
	}
function habilitarSeccion8(check){
	var value = check.checked;

		if(value==true){					
			//secc8
			x = document.f.limiteServicios;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
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
		}
		
}


