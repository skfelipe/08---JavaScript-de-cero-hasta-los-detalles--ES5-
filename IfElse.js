

var nota = 50;


if(nota >= 60){
	console.log("A");
}else if(nota >= 80){
	console.log("B");
}else if(nota >= 70){
	console.log("C");
}else if(nota >= 60){
	console.log("D");
}else{
	console.log("F");
}


console.log("Termino el Codigo")



var a = 10;
var b = 20;

var c = (a > b) ? function(){
	console.log("A es mayor a B");
	return a;
}() : function(){
	console.log("B es mayor a A");
	return b;
}();


console.log(c);