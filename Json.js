


var objtoJs = {
	nombre: "Fernando",
	edad: 30,
	imprimir: function(){
		console.log(this.nombre, this.edad);
	}

};

console.log("Objeto literal", objtoJs);

var jsonString = JSON.stringify(objtoJs);

console.log(jsonString);

var objtoDesdeJson = JSON.parse(jsonString);

console.log(objtoDesdeJson);