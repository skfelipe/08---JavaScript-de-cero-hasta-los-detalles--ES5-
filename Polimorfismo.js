




function determinaDato(a){

	if(a === undefined){
		console.log("A es undefined..... no se que hacer");
	}
	if(typeof a === "number"){
		console.log("A es un numero, y puedo hacer operacion con numeros");
	}
	if(typeof a === "string"){
		console.log("A es un texto, puedo hacer opraciones con textos");
	}
	if(typeof a === "object"){
		console.log("A es un objeto, pero puede ser cualquier cosa");
		if(a instanceof Number){
			console.log("A es un Objeto numerico.");
		}
	}

}

var b = new Number(3);
console.log(b);



determinaDato();
determinaDato(1);
determinaDato("Text");
determinaDato({nombre: "Emma"});


determinaDato(b);




















