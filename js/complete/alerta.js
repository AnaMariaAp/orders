function alertaTitulo(mensaje){
var opt="left=100,top=100,width=325,height=50,resizable=0";
mi_ventana = window.open("","",opt);
mi_ventana.document.write("<HEAD><TITLE>Aviso</TITLE></HEAD>")
mi_ventana.document.write(mensaje);
mi_ventana.moveTo(400,400); 	
}