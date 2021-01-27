



var carro = {
	color: "Blanco",
	marca: "Mazda",
	imprimir: function(){
		var salida = this.marca + " - " + this.color;
		return salida;
	}
}

var carro2 = {
	color: "Rojo",
	marca: "Toyota"
}

console.log(carro.imprimir());

var logCarro = function (arg1, arg2){
	console.log("Carro: ", this.imprimir());
	console.log("Argumentos:", arg1, arg2);
	console.log("=======================");
}


// bind

var logModeloCarro = logCarro.bind(carro); // setea el metodo en el this
logModeloCarro("abc", "def");






// call


logModeloCarro.call(carro, "123", "456");  // setea el metodo en el this



// apply



logModeloCarro.apply(carro, ["789", "ERG"]);


// funciones prestadas.

console.log( carro.imprimir.call(carro2) ) ;