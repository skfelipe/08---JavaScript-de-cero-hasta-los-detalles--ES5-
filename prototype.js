




function Persona(){
	this.nombre 	= "Emma";
	this.apellido 	= "Cancino";
	this.edad 		= 1;
	this.pais 		= "Chile";

	// this.imprimir = function(){
	// 	console.info(this.nombre + " " + this.apellido + " ("+ this.edad + ")");
	// }

}

Persona.prototype.pais = "Chile";

Persona.prototype.imprimir = function(){
	console.info(this.nombre + " " + this.apellido + " ("+ this.edad + ")");
}

var emm = new Persona();

//emm.imprimir();



Number.prototype.esPositivo = function(){
	if(this > 0){
		return true;
	}else{
		return false;
	}
}