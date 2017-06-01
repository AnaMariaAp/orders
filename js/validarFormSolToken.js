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

function validar(opm){
	var x;
	var y;
	var p=0;
	var r=0;
	var w;
	var z;
	var flags=0;

	/********************************/
	/* Datos de la Empresa          */
	/********************************/
		
	//razon social empresa
	x = document.f.razSocEmp;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese la Razón Social de la Empresa.");
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
		alert("El RUC de la Empresa no es válido.");
		x.focus();
		return false;
	}
	
	//codigo empresa
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
	/* Datos Usuario Administrador  */
	/********************************/
	
	//Nombre
	x = document.f.nombUserAdm;
	x.value = trim(x.value);
	if (x.value.length==0){
		alert("Ingrese nombre de usuario administrador.");
		x.focus();
		return false;
	}
	
	//Dirección de e-mail
	x = document.f.emailUserAdm;
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
	
	//Nro. Doc. de Identidad
	x = document.f.dniUserAdm;
	//Tipo de Doc. de Identidad
	y = document.f.combTipoDNIUserAdm;
	
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
	x = document.f.telfUserAdm;
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
	/* Nro Token                    */
	/********************************/

	x = document.f.nroTokens;
	x.value = trim(x.value);
	if (x.value.length==0)
	{
		alert("Ingrese el Nro. de Tokens.");
		x.focus();
		return false;
	}
    
	/********************************/
	/* Termina de validar e imprime */
	/********************************/
	
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
/*
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
*/
function onloadDesactivarLimiteOperaciones(){	
    /*document.f.dniContacto.disabled = true;
    document.f.dniContacto.value = "";*/
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
 /* function desactivarVersionSistema0(){	
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
}*/
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
					
					alert("El número de cuenta no es válido");
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
}/*
  function desactivarTipoIns0(){	
		document.f.desactivarTipoIns[1].checked = false;
		document.f.desactivarTipoIns[2].checked = false;
		document.f.desactivarTipoIns[3].checked = false;
}
function desactivarTipoIns1(){	
		document.f.desactivarTipoIns[0].checked = false;
		document.f.desactivarTipoIns[2].checked = false;
		document.f.desactivarTipoIns[3].checked = false;	

}
function desactivarTipoIns2(){	
		document.f.desactivarTipoIns[0].checked = false;
		document.f.desactivarTipoIns[1].checked = false;
		document.f.desactivarTipoIns[3].checked = false;		
}
function desactivarTipoIns3(){	
		document.f.desactivarTipoIns[0].checked = false;
		document.f.desactivarTipoIns[1].checked = false;
		document.f.desactivarTipoIns[2].checked = false;	
}
*/
/*
function habilitarTipoModificacionDatosEmpresa1(check){
var value = check.checked;

		if(value==true){
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].disabled = false;
			}
			
			document.f.token.disabled = true;
			document.f.token.value = '';
		}
		else{
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
				x[i].disabled = true;			
			}
				inHabilitarSeccion8();
				inHabilitarSeccion7();
				inHabilitarSeccion6();
				inHabilitarSeccion3();
				inHabilitarSeccion15();		
				
		}
}*/
/*function habilitarTipoModificacionDatosEmpresa2(check){
var value = check.checked;

		if(value==true){
		document.f.token.disabled = false;
		
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
				x[i].disabled = true;				
			}
				inHabilitarSeccion8();
				inHabilitarSeccion7();
				inHabilitarSeccion6();
				inHabilitarSeccion3();
				inHabilitarSeccion15();
		
		}
		else{
		document.f.token.disabled = true;
		document.f.token.value = '';

		}
}	*/
function habilitarTipoModificacionDatosEmpresa3(check){
var value = check.checked;

		if(value==true){
			x = document.f.checkSolicitud;
			for (i=0;i<x.length;i++){
				x[i].checked = false;
				x[i].disabled = true;	
						
			}
			document.f.token.disabled = true;
			document.f.token.value = '';	
				inHabilitarSeccion8();
				inHabilitarSeccion7();
				inHabilitarSeccion6();
				inHabilitarSeccion3();
				inHabilitarSeccion15();
		}
		else{}
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

