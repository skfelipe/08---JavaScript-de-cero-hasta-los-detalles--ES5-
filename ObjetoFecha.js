


var hoy = new Date();
var fechaMilisegundos = new Date(0);
var fechaFija = new Date(2016,0,21,23,10,15,2);


console.log(hoy);
console.log(fechaMilisegundos);
console.log(fechaFija);

console.log(hoy.getFullYear());
console.log(hoy.getDate());
console.log(hoy.getMonth());
console.log(hoy.getHours());
console.log(hoy.getSeconds());
console.log(hoy.getMilliseconds());

console.log(hoy.getTime());



var inicio = new Date();

for (var i = 0; i < 15000; i++) {
	console.log("Algo...")
}
var Fin = new Date();

console.log(inicio);
console.log(Fin);

var duracion =  Fin.getTime() - inicio.getTime();

console.log(duracion, " MiliSegundos");
console.log(duracion/1000, " Segundos");



/// LA LIBRERIA MOMENTS.JS SE UTILIZA PARA MANEJO DE FECHAS  --> momentjs.com


var fecha1 = new Date(2021,0,7);

Date.prototype.sumarDias = function(dias){
	this.setDate(    this.getDate() + dias );
	return this;
}

Date.prototype.sumarMes = function(mes){
	this.setMonth(    this.getMonth() + mes );
	return this;
}
Date.prototype.sumarAnios = function(anio){
	this.setFullYear(    this.getFullYear() + anio );
	return this;
}


console.log(fecha1);
console.log(fecha1.sumarDias(2));


console.log(fecha1);
console.log(fecha1.sumarMes(2));


console.log(fecha1);
console.log(fecha1.sumarAnios(2));
