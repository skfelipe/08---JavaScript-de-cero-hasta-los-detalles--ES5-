

try{
	var a = 100;

	if(a === 100){
		throw 'Error Forzado';
	}else{
		throw 'Error Forzado 01';
	}
	

	console.log("El valor de a: ", a);
}catch( e){
	//console.log("Error de catch: ", e);

	if(e ===  "Error Forzado"){
		console.log("Error Tipo 1");
	}
	if(e ===  "Error Forzado 01"){
		console.log("Error Tipo 2");
	}


}finally{
	console.log("Finalmente");
}

try{
	throw {
		nombreError: "Error Tipo 1",
		accion: "Salir corriendo a echarle agua al servidor",
		coderror: 1
	}

	console.log("Parte nunca se ejecuta");

}catch(e){

	console.log(e);
	console.log(e.nombreError);
	console.log(e.accion);
	console.log(e.coderror);

	console.log("Parte catch");

}finally{
	console.log("Finalmente");
}

try{
	throw function(){
		console.log("Funcion del throw....");
	}

	console.log("Parte nunca se ejecuta");

}catch(e){

	e();

	console.log("Parte catch");

}finally{
	console.log("Finalmente");
}


try{
	throw 1;

	console.log("Parte nunca se ejecuta");

}catch(e){

	registroError(e);
	

}finally{
	console.log("Finalmente");
}

function registroError(e){

	var ahora = new Date();
	console.log("Se registro un error: ", e, " a las ", ahora.getTime());

}