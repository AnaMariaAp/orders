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

	var smfro;

	var clock;

	var newflag;

	var newflag1;





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

	if (x.value.length==0){

		alert("Ingrese el RUC de la Empresa.");

		x.focus();

		return false;

	}

if (!soloDigitos(x.value) || x.value.length!=11){

		alert("El RUC de la Empresa no es válido.");

		x.focus();

		return false;

	}

	//Usuario Autorizado

	x = document.f.nombreUsuarioAutorizado;

	x.value = trim(x.value);

	if (x.value.length==0){

		alert("Ingrese el Nombre del Usuario Autorizado.");

		x.focus();

		return false;

	}

		y = document.f.combRucCarnetPas;		

	

		  if (y.value < 0){

		alert("Seleccione el Tipo de Documento de Identidad.");

		y.focus();

		return false;

	}

	

	

	x = document.f.dniUsuarioAutorizado;	

	x.value = trim(x.value);

	if (x.value.length==0){

		alert("Ingrese el N° de Documento de Identidad.");

		x.focus();

		return false;

	}

	

	if(y.value==1 && x.value.length!=8)

	{

		alert("El N° de DNI No es válido.");

		x.focus();

		return false;

		

		}

		

		if(y.value==7 && x.value.length!=11)

	{

		alert("El N° de RUC No es válido.");

		x.focus();

		return false;

		

		}

	

	//email

	/*

	x = document.f.emailUsuarioAutorizado;

	x.value = trim(x.value);

	

	if (x.value.length==0){

		alert("Ingrese el E-Mail de la Empresa.");

		x.focus();

		return false;

	}

	if (!soloEmail(x.value)){

		alert("El E-Mail de la Empresa no es válido.");

		x.focus();

		return false;

	}

	*/

	//Tipo de Inscripcion -----------------------------------------------------------------

	x = document.f.tipoInscripcion2;

	/*** http://www.transporteselectos.com **/

	

	var s = "no";



  for ( var i = 0; i < x.length; i++ ) {

  	

    if ( x[i].checked ) {    

    s= "si";

    break;

    }

  }

  if ( s == "no"){

    alert( 'Debe seleccionar Tipo de Inscripción' ) ;

    x[1].focus();

    return false;

  }

 



	// Fin Tipo de Inscripcion--------------------------------------------------------------------

	if(!x[2].checked)

	{



				

		//PERFIL DEL USUARIO-----------------------------------------------------------------

		

	x = document.f.checkSolicitud;

	/*** http://www.transporteselectos.com **/

	//document.f.checkSolicitudOtros.disabled

	

	var s = "no";



  for ( var i = 0; i < x.length; i++ ) {

  	

    if ( x[i].checked ) {    

    s= "si";

    break;

    }

  }

    if ( s == "no"){

    alert( "Debe seleccionar opciones de modificación de usuario existente" ) ;

    x[1].focus();

    return false;

  }	  

//PERFIL DEL USUARIO-----------------------------------------------------------------

		

	x = document.f.condicionesA;

	/*** http://www.transporteselectos.com **/

	//document.f.checkSolicitudOtros.disabled

	

	var s = "no";



  for ( var i = 0; i < x.length; i++ ) {

  	

    if ( x[i].checked ) {    

    s= "si";

    break;

    }

  }

 

 if(this.clock==1 || this.clock_1==1)

 {

 	

 y = document.f.tipoInscripcion2;



  if ( s == "no" && document.f.checkSolicitud[4].checked){

 // 	if ( s == "no" && (y[0].checked==true	|| y[1].checked== true)){

  	//if ( this.clock_1==1){

  	//this.clock_1

    alert( "Debe seleccionar perfil de Usuario" ) ;

    x[1].focus();

    return false;

  }



// Fin PERFIL DEL USUARIO--------------------------------------------------------------------

	

	//Token-----------------------------------------------------------------

	x = document.f.condicionesB;

	/*** http://www.transporteselectos.com **/

	//document.f.checkSolicitudOtros.disabled

	

	var s = "no";



  for ( var i = 0; i < x.length; i++ ) {

  	

    if ( x[i].checked ) {    

    s= "si";

    break;

    }

  }

 

 y = document.f.tipoInscripcion2;

 

/*

  if ( s == "no" && (y[0].checked==true	|| y[1].checked== true)){

    alert( 'Debe seleccionar si requiere la asignación del dispositivo de seguridad TOKEN' ) ;

    x[0].focus();

    return false;

  }*/



	// Fin Token--------------------------------------------------------------------

	

		//CUENTAS AUTORIZADAS -----------------------------------------------------------------

	x = document.f.condicionesCradio;

	/*** http://www.transporteselectos.com **/



	

	var s = "no";



  for ( var i = 0; i < x.length; i++ ) {

  	

    if ( x[i].checked ) {    

    s= "si";

    break;

    }

  }



  

 // if ( s == "no"){

  if ( this.clock==1 && s == "no" ){

  

  

    alert( 'Debe seleccionar Cuenta Autorizada' ) ;

    x[0].focus();

    return false;

  }



	// Fin CUENTAS AUTORIZADAS--------------------------------------------------------------------

	x = document.f.condicionesC;	

	var j=0;

		if (x[0].disabled == false){

		for(i=0; i < x.length; i++ ){

			x[i].value = trim(x[i].value);

			

			if (x[i].value != ""){

				j++;

			

				if(x[i].value.length != 20 || x[i].value.substring(0,4) != "0011"){

					

					alert("El número de cuenta no es válido");

					x[i].focus();

				

					return false;

				}	

			}

			if (i == x.length - 1){

				if (j==0){

					alert("Ingrese como mínimo 1 cuenta.");

					x[0].focus();

					return false;

				}

			}

		}

	}

}



	 

	 x = document.f.condicionesA;

	/*** http://www.transporteselectos.com **/

	//document.f.checkSolicitudOtros.disabled

	

	var s = "no";



  for ( var i = 0; i < x.length; i++ ) {

  	

    if ( x[2].checked ) {    

    s= "si";

    break;

    }

  }

	if(document.f.checkSolicitud[1].checked || s == "si")

	{



	p = document.f.limiteOperacion1;

	x = document.f.limiteOperacion2;

	y = document.f.dniMancomunado;

	z=  document.f.nombreMancomunado

	w = document.f.operacionesDisponibles

	  

	  	var s = "no";



  for ( var i = 0; i < w.length; i++ ) {

  	

    if ( w[i].checked ) {    

    s= "si";

    break;

    }

  }

  

   if ( s == "no"){

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

					alert("El Límite Diario debe ser Numérico \n ó la palabra ILIMITADO");

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

		

		    /*if(r>0 && y[0].value=="" && z[0].value=="")

		    {

			  alert('Ingresar por lo menos 1 Firma Mancomunada')

			  y[0].focus();

				return false;

			  }*/

			var op=false;

			

			for(i=0; i < y.length; i++ ){

				if (z[i].value != ""){

					op=true;

				}

			}

			

			if(op==false){

				//Alfredo Lehar 2009.02.20 - Validar solo para mancomunados...

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

					if(r>0 && (y[i].value=="" || z[i].value=="")){

						alert('Ingresar DNI y Nombre del usuario mancomunado ')

					  	z[i].focus();

						return false;

					}		

					if( y[i].value.length!=8){

						alert("El N° de DNI No es válido.");

						y[i].focus();

						return false;

					}	

					if((y[i].value!="" || z[i].value!="") && r==0){

						alert('Debe Ingresar Límite para Operaciones: Mancomunado por Operación')

						w[i].focus();

						return false;					

					}

				}

			}

			

			/// Fin Operaciones Disponobles.

		}

 	}

	

	imprimir();

	 

	 /*****************************************************************************************************************

	 *****************************************************************************************************************

	 ** HOJA 3

	 *****************************************************************************************************************

	 *****************************************************************************************************************/



//imprimir();	

}





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

	

	

	if(j==2){		

		document.f.tipoInscripcion2[2].checked = true;

		

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

		

		if(j==100){	

		document.f.tipoInscripcion2[1].checked = true;

		document.f.checkSolicitudOtros.disabled = false;				

		for (i=0;i<6;i++){		

			document.f.checkSolicitud[i].disabled = false;		

		}		

document.f.condicionesB[0].disabled = 	false;	

document.f.condicionesB[1].disabled = false;	

	}

		

		

	

}

/**MODIF**/

function ActOperDisponibles(){		



	this.smfro=1;

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

	

	

function DesOperDisponibles(){	

	

		this.smfro=0;

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

	

/***/





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

        	if(h==8) {f.operacionesDisponiblesNumero[1].disabled=true; f.operacionesDisponiblesNumero[1].value=""; }

         

         }

	

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

	

	function desaCuentasAutorizadas()

	{

	

		for (m=0;m<3;m++){

			document.f.condicionesA[m].disabled = true;	

			document.f.condicionesA[m].checked = false;	

		}		

		

		}// Fin If 2	

	

	function activarCuentasAutorizadas()

	{	

		

		if(this.newflag!=1)	document.f.checkSolicitud[4].disabled = true;

		

		if(document.f.checkSolicitud[3].checked)

		{this.newflag1=1;

			 document.f.checkSolicitud[4].disabled = true;	

			    document.f.checkSolicitud[4].checked = false;	

		 this.clock=1;	

		  //this.clock_1=1;	

		  

		  for (n=0;n<3;n++){

			document.f.condicionesCradio[n].disabled = false;	

			document.f.condicionesCradio[n].checked = false;	

	

	}

		  if(this.clock_1==1)

		  {			

			document.f.condicionesA[0].disabled = true;	

			document.f.condicionesA[0].checked = false;	

			

	}

	else{

		

			document.f.condicionesCradio[0].disabled = false;	

			document.f.condicionesCradio[0].checked = false;	

		}

	

	}

	else

		{	if(this.newflag!=1)	document.f.checkSolicitud[4].disabled = false;

			this.newflag1=0;		

			

			for (n=0;n<3;n++){

			document.f.condicionesCradio[n].disabled = true;	

			document.f.condicionesCradio[n].checked = false;			

		       }	

					

			this.clock=0;		

				 //this.clock_1=0;				

				 if(this.clock_1==1)

		  {

		  

			for (n=0;n<3;n++){

			document.f.condicionesCradio[n].disabled = true;	

			document.f.condicionesCradio[n].checked = false;	

			

				document.f.condicionesA[n].disabled = false;	

			document.f.condicionesA[n].checked = false;				

		       }		

		      }		

		       if(this.clock_1==0)

		      

		      {

		      

		      		for (n=0;n<3;n++){

			document.f.condicionesCradio[n].disabled = true;	

			document.f.condicionesCradio[n].checked = false;	

			

				document.f.condicionesA[n].disabled = true;	

			document.f.condicionesA[n].checked = false;				

		       }	

		      	

		      	}	

		      	

		      	if(document.f.checkSolicitud[1].checked || document.f.checkSolicitud[2].checked)

						{

							document.f.condicionesA[0].disabled = true;	

			        document.f.condicionesA[0].checked = false;			

			  }			

			}		

		

		}// Fin If 2	

		

		

function activarPerfilUsuario()

	{	

	

		if(document.f.checkSolicitud[4].checked)

		{

			this.clock=1;

			for (n=0;n<3;n++){

			document.f.condicionesCradio[n].disabled = false;	

			document.f.condicionesCradio[n].checked = false;			

		       }	

			

			document.f.checkSolicitud[1].disabled=true;

			document.f.checkSolicitud[2].disabled=true;

			document.f.checkSolicitud[3].disabled=true;

		 //this.clock=1;

		this.clock_1=1;

		  if(this.clock_1==1 && this.clock==1)

		  {

			for (n=0;n<3;n++){

			document.f.condicionesA[n].disabled = false;	

			document.f.condicionesA[n].checked = false;	

		}			

	}

	else if(this.clock_1==1 &&  this.clock==0)

		{

				for (n=0;n<3;n++){

			document.f.condicionesA[n].disabled = false;	

			document.f.condicionesA[n].checked = false;	

		}			

			

			}

		

		

	else

		{

			

				for (n=0;n<3;n++){

			document.f.condicionesA[n].disabled = false;	

			document.f.condicionesA[n].checked = false;	

		}		

			}

	}

	else

		{			

				for (n=0;n<3;n++){

			document.f.condicionesCradio[n].disabled = true;	

			document.f.condicionesCradio[n].checked = false;			

		       }

			this.clock=0;

				document.f.checkSolicitud[1].disabled=false;

			document.f.checkSolicitud[2].disabled=false;

			document.f.checkSolicitud[3].disabled=false;

			//this.clock=0;			

			this.clock_1=0;	

			for (n=0;n<3;n++){

			document.f.condicionesA[n].disabled = true;	

			document.f.condicionesA[n].checked = false;	

		       }					

			}		

		

		}// Fin If 2	

		

		

		function todasLasOperaciones(opm)

{	

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

			

	

				

		/*for (i=1;i<x.length;i++){			

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

	

	  w =  document.f.limiteOperacionCheck;

		w[0].disabled = true; w[0].checked = false;

		w[1].disabled = true; w[1].checked = false;

	}

	if(opm==1)

	{

		  y = document.f.operacionesDisponibles;			

		  for (i=1;i<y.length;i++){			

			y[i].disabled = false;	

			y[i].checked = false;						

		  }

		  x = document.f.dniMancomunado;		

			z=  document.f.nombreMancomunado;

			p=  document.f.eliminarMancomunado;

				

		  /*for (i=1;i<x.length;i++){			

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



function habilitarOperaciones(j){

	if(j==0 || j==1){

		habilitarOperacion2(true);

		habilitarOperacion3(true);

	}

	if(j==2){

		habilitarOperacion2(true);

		habilitarOperacion3(false);

	}

	if(j==3){

		habilitarOperacion2(false);

		habilitarOperacion3(false);

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

	

	for(i=14;i<16;i++){

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

    	    

    	    if(checkis[15].checked)

        {

           x = document.f.limiteOperacionCheck;	

					 x[0].disabled=false; x[0].checked=false;

					 x[1].disabled=false; x[1].checked=false;

        	

        }

        else

        	{ x = document.f.limiteOperacionCheck;	

					 x[0].disabled=true; x[0].checked=false;

					 x[1].disabled=true; x[1].checked=false;

        		

        		}

    	for(var q=0;q<checkis.length;q++){	

        //alert(':: '+checkis[q].value)

        

        if(checkis[q].checked)

        {        	 

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

        		

        	

        	}

        			

    

    	}    

    }

     else{

    checked= checkis.checked;

 } 

 



  }

  function desactivarToken0(){	

	if (document.f.condicionesB[0].checked == true){	

		document.f.condicionesB[1].checked = false;	

		//desBlokearSecccionesDE();

	}

	else

	{		document.f.condicionesB[0].checked = false;

		

		}

}



  function desactivarToken1(){	

	if (document.f.condicionesB[1].checked == true){	

		document.f.condicionesB[0].checked = false;	

		//blokearSecccionesDE();

	}

	else

	{		document.f.condicionesB[1].checked = false;

		//desBlokearSecccionesDE();

		

		}

}



function perfilUsuario0(){	

	if (document.f.condicionesA[0].checked == true){	

		document.f.condicionesA[1].checked = false;

		document.f.condicionesA[2].checked = false;

		

	}

	else

	{

		

		document.f.condicionesA[1].checked = false;

		document.f.condicionesA[2].checked = false;

		

		

		}

}

function perfilUsuario1(){	



		if (document.f.condicionesA[1].checked == true){			

		document.f.condicionesA[0].checked = false;

		document.f.condicionesA[2].checked = false;

		

	}

		else

	{		

		document.f.condicionesA[0].checked = false;

		document.f.condicionesA[2].checked = false;

		

	}

}

function perfilUsuario2(){	



		if (document.f.condicionesA[2].checked == true){			

		document.f.condicionesA[0].checked = false;

		document.f.condicionesA[1].checked = false;

		

	}

		else

	{		

		document.f.condicionesA[0].checked = false;

		document.f.condicionesA[1].checked = false;

		

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

			p[i].disabled = false;	

			p[i].checked = false;					

		}

		

	}

	

		function desactivarVersionSistema1()	{

			

		

			

			if(document.f.checkSolicitud[1].checked)

			{	

				

				if(this.newflag1!=1)	document.f.checkSolicitud[4].disabled = true;		

				this.newflag=1;

				document.f.checkSolicitud[1].checked = true;

				document.f.checkSolicitud[2].checked = true;

				

					document.f.condicionesA[0].disabled = true;	

			    document.f.condicionesA[0].checked = false;		

			    

			    document.f.checkSolicitud[4].disabled = true;	

			    document.f.checkSolicitud[4].checked = false;		

				ActOperDisponibles();

				}	

				else

					{

						if(this.newflag1!=1)	document.f.checkSolicitud[4].disabled = false;							

						this.newflag=0;

								    

						

						if(document.f.checkSolicitud[4].checked)

						{

							document.f.condicionesA[0].disabled = false;	

			    document.f.condicionesA[0].checked = false;			

			  }		

					DesOperDisponibles();

						document.f.checkSolicitud[1].checked = false;

						document.f.checkSolicitud[2].checked = false;

						}

	}

			function desactivarVersionSistema2()	{

			if(document.f.checkSolicitud[2].checked)

			{

						if(this.newflag1!=1)	document.f.checkSolicitud[4].disabled = true;		

				this.newflag=1;

					document.f.condicionesA[0].disabled = true;	

			    document.f.condicionesA[0].checked = false;		

					ActOperDisponibles();

				document.f.checkSolicitud[1].checked = true;

				

				document.f.checkSolicitud[4].disabled = true;	

			    document.f.checkSolicitud[4].checked = false;

				}	

				else

					{

						this.newflag=0;

							if(this.newflag1!=1)	document.f.checkSolicitud[4].disabled = false;							

						

						if(document.f.checkSolicitud[4].checked )

						{

							document.f.condicionesA[0].disabled = false;	

			    document.f.condicionesA[0].checked = false;			

			  }		

			  if(document.f.checkSolicitud[3].checked )

						{

							document.f.condicionesA[0].disabled = true;	

			        document.f.condicionesA[0].checked = false;			

			  }		

			 

						DesOperDisponibles();

						

						document.f.checkSolicitud[1].checked = false;

						}

	}

	

	function desactivarVersionSistemaxxx(){	

		var p=document.f.checkSolicitud;

		var num=0;

	

		for(var i = 0; i < p.length; i++ ){

			

			if(p[i].checked == true )

			{

			

				num=i;

				break;

			}

			

		

		}

		

		if(num==1)

		{

			alert(num)

			document.f.checkSolicitud[2].checked = true;

			}

			if(num== -1)

			{

				alert(num)

				document.f.checkSolicitud[2].checked = false;

				}



	

	

}