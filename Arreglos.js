

var ar = new Array();
var arr = [5,4,3,2,1];


console.log(arr[0], arr[4]);


arr.reverse();

console.log(arr);

arr = arr.map(function(elemento){
	elemento *=2;
	return elemento;
});

console.log(arr);

arr = arr.map(function(elemento){
	elemento *=elemento;
	return elemento;
});

console.log(arr);

arr = arr.map(Math.sqrt);

console.log(arr);

var parametro = "|";
arr = arr.join(parametro); // deja todo en una linea separado por parametro
console.log(arr);


arr = arr.split(parametro); // seprador de un string a un array
console.log(arr);

arr.push("6");
console.log(arr);


console.log(arr.length);


arr.unshift("0");
console.log(arr);

console.log(arr.toString());

var elimine = arr.pop();

console.log(arr);
console.log(elimine);

arr.splice(1, 1);

console.log(arr);

arr.splice(1, 1,"10",20);
console.log(arr);

arr.splice(1, 1);
console.log(arr);

arr = arr.slice(0,2);
console.log(":",arr);


var arr2 = [
	true,
	{
		nombre: "Emma", 
		apellido: "Cancino"
	}, 
	function(){ 
		console.log("Estoy viviendo en un arreglo")
	},
	function(persona){
		console.log(persona.nombre+ " " + persona.apellido);
	},
	[
		"Emma",
		"Natalia",
		"Maxi", 
		"Felipe",
		[
			"Suegra",
			"Mami", 
			"Pota",
			function(){
				console.log(this);
			}
		]
	]
];

console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1].nombre +" "+arr2[1].apellido);

arr2[2]();
arr2[3](arr2[1]);

console.log(arr2[4][1]);
console.log(arr2[4][4][1]);


var referencia = arr2[4][4];
referencia[1] = "Rosa";
console.log(referencia);
console.log(arr2);

referencia[3]();





