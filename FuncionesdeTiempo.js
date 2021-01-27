



setTimeout(function(){
	console.log("Paso un segundo");
},1000);


var segundos = 0;

var intervalo = setInterval(function(){
	segundos ++;
	console.log("Seg", segundos);

	if(segundos=== 3){
		clearInterval(intervalo);
	}
},1000);

var juan = {
	nombre: "juan",
	edad: 30,
	imprimir: function(){

		var self = this;
		setInterval(function(){
			console.log(self.nombre, self.edad);
		},1000);
		

	}
};

juan.imprimir();