

//funcion anonima
(function(){
	var a = 10;

	console.log(a);

	function cambiarA(){
		a = 20;
	}
	cambiarA();

	console.info(a);
})();



// otro tipo de funciones anonimas

function ejecutarFuncion(fn){
	if(fn()===1){
		return true;
	}else{
		return false;
	}
};


console.log(
	ejecutarFuncion(function(){
		console.log("Funcion anonima ejecutada!...");
		return 1;
	})
);