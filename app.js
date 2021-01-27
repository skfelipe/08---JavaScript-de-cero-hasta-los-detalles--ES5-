
var a = 1;
var b = "Felipe";


console.log(a);
console.warn(a);
console.error(a);
console.info(a);

//Undefined
console.log(c);
var c = "Fernando";


function imprimir(){
	for (var i = 0; i < 800; i++) {
		console.log("Imprimio");
	}
}

function presionoClick(){
	console.log("Click en Boton");
}

imprimir();


// TIPOS DE DATOS

var num = 10; 			// numericos
var str = "Textos"; 	// string
var bol = true;			// booleanos tru or false
var und = undefined 	// indefinidos
var nul = null 			// nulos


var obj = {
	numero: 10,
	texto: "Nuevo Texto",
	objHijo:{
		numero: 20,
		texto: "Nuevo Texto 2"
	}
};

c.texto = "Emma";

// notacion de punto y corchetes

//punto

var persona = {
	nombre: "Emma",
	apellido:  "Cancino",
	Edad: 25,
	direccion: {
		pais: "Chile",
		ciudad: "Santiago",
		edificio: {
			nombre: "Edificio Principal",
			telefono: "33333333"
		}
	}
}

console.log(persona.nombre);
console.log(persona.direccion.pais);

persona.direccion.zipcode = 2000000;

console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio.nombre);



//valores por referencia
var edificio =persona.direccion.edificio;


edificio.nopiso = "8vo piso";


console.log(persona);

console.log(Datos_Contratos);

//corchete

var campo = "Edad";
console.log(persona["nombre"]);
console.log(persona["direccion"]["pais"]);
console.log(persona[campo]);


function primeraFuncion(){
	
}


function print_primitivos(nombre, apellido){
	apellido = apellido || "xxx";

	if(apellido===undefined){
		appeliido = "xxx";
	}
	console.log(nombre+ " "+ apellido);
}

print_primitivos("Emma", "Cancino" );

function print_obj(personas){

	console.log(personas.nombre + " " + personas.Apellido);

}

var personas = {
	nombre: "Emma",
	Apellido: "Cancino"
}

print_obj(personas);

function print_funct(fn){
	fn();
}

var mifuncion = function(){
	console.log("mifuncion");
}

print_funct(function (){
	console.log("Funcion anonima");
});

print_funct(mifuncion);

function obtenerAleatorio(){
	return Math.random();
}

console.log(obtenerAleatorio() +10);

function obtenerNombre(){
	return "Emma";
}

console.log(obtenerNombre() + " Cancino");

function retornarBooleano(){
	if(obtenerAleatorio() > 0.5){
		return true;
	}else{
		return false;
	}
}
console.log(retornarBooleano() );

if(retornarBooleano()){
	console.log("Es mayor a 0.5");
}else{
	console.log("Es menor a 0.5");
}

function crearPersona(nombre01, appelido01){
	// excplisita
	//var obj = {};
	//anonima
	return {
		nombre: nombre01,
		appellido: appelido01
	}
}

var pers01 = crearPersona("Emma", "Cancino");
console.log(pers01.nombre);
console.log(pers01.appellido);

function crear01Funcion(){
	return function(nombre){
		console.log("Me crearon!!!!!" + nombre);
		return function () {
			console.log("Segunda funcion");
		}
	}
}


var nuevafuncion = crear01Funcion();

var segundaFuncion = nuevafuncion(pers01.nombre);
segundaFuncion();

function ab(){
	console.log("Function ab");
}
ab();

ab.nombre = "Maria";
ab.direccion = {
	pais: "Chile",
	ciudad: "Santiago",
	Edificio: {
		piso: "8va",
		nombre: "Edificio principal"
	}
}

var persona_01 = {
	nombre: "Emma",
	apellido: "Cancino",
	imprimirNombre: function(){
		console.log(this.nombre + " " + this.apellido);
	},
	direccion: {
		pais: "Chile",
		obtenerPais: function(){
			var self = this;
			var nuevaDireccion = function(){
				console.log(self);
				console.log("La direccion es en "+ self.pais);
			}
			nuevaDireccion();
		}
	}
}

persona_01.imprimirNombre();
persona_01.direccion.obtenerPais();


function Persona_02(){
	this.nombre = "Emma";
	this.apellido = "Cancino";
	this.edad = 1;
	this.nombreCompleto = function(){
		return this.nombre + " "+ this.apellido;
	}
}


var juan = new Persona_02();

console.log(juan);