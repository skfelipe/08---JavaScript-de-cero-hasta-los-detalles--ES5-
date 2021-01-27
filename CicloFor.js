




for (var i = 0; i < 10; i++) {


	if(i === 5){
		// break // finaliza el ciclo
		// continue; // salta y continua;
	}

	console.log(i);
}



var Persona = function(){
	this.nombre = "Juan";
	this.apellido = "Pineda";
	this.edad = 10;
};

var juan = new Persona();


Persona.prototype.direccion = "San José";




for(prop in juan){
	console.log(prop, ":",juan[prop]);
}


for(prop in juan){

	if(!juan.hasOwnProperty(prop)){
		continue;
	}

	console.log(prop, ":",juan[prop]);

	//console.log(juan.hasOwnProperty(prop));
	
}

for(num in [1,2,3,4,5,6,7,8,9,10]){
	console.log(num);
}


 [1,2,3,4,5,6,7,8,9,10,false, "nombre"].forEach(function(val){
 	console.log(val);
 })