

// Comentaroi linea simple

/*

	Comentario multi linea

*/

// http://25.io/smaller/

// https://htmlcompressor.com/compressor/





var arr = [
		"Felipe",
		{
			nombre: "Felipe",
			apellido: "Cancino",
			getNombre: function(){
				return this.nombre + " "+ this.apellido;
			}
		}, true, function(){
			console.log(this);
		}
	];

console.log( arr );
