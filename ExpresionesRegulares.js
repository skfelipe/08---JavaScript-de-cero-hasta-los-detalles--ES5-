

// i = insensible a case
// g = todas apariciones
// m = multiples



var reg1 = RegExp("a");
var reg2 = /a/;
var reg3 = /^a/; // BUSCA EN LA PRIMERA POSICION
var reg4 = /a$/; // BUSCA EN LA SEGUNDA POSICION
var reg5 = /.../; // BUSCA EN LOS TRES PRIMEROS REGISTROS Y TRAE TODO
var reg6 = /^.o/; // BUSCA EN LA PRIMERA POSICION A CONTAR DEL SEGUNDO CARACTER
var reg7 = /[0-9]/; // BUSCA DEL 0 AL 9
var reg8 = /[02345]/; // BUSCA EL 0 2 3 4 5 
var reg9 = /[a-zA-Z]/; // BUSCA DEL A  a la Z minuscula y a LA A LA Z MAYUSCULA
var reg10 = /\s/; // PATRON DE CUALQUIER SEPARADOR O SALTO DE LINEA
var reg11 = /\w/; // ES LO MISMO QUE /[a-zA-Z0-9]/
var reg12 = /\d/; // ES LO MISMO QUE /[0-9]/
var reg13 = /[aeiou]/ig; // combinaciones
var reg14 = /[aeiou]/m; // combinaciones
var reg15 = /[aeiou]|[áéíóúñü]/g; // caractere logio cualquier letra dentro dela arreglo ó representado por | pipe siempre deben ir juntos
var reg16 = /o+/g; //PATRON DE BUSQUEDA EN BASE A CARACTERES REPEDITOS 
var reg17 = /o?/g; //PATRON DE BUSQUEDA EN BASE A CUALQUIER CARACTER SIEMPRE MOSTRANDO EL CARACTER INSTANCIADO
var reg18 = /o*/g; //PATRON DE BUSQUEDA EN BASE A CARACTERES REPEDITOS 
var reg19 = /o{2}/g; // PATRON QUE DEFINE LA CANTIDAD DE VECES QUE SE DEBA REPETIR EL CARACTER 
var reg20 = /o{2,}/g; // PATRON QUE DEFINE LA CANTIDAD DE VECES QUE SE DEBA REPETIR EL CARACTER EN CANTIDAD DE RANGOS
var reg21 = /o{2,3}/g; // PATRON QUE DEFINE LA CANTIDAD DE VECES QUE SE DEBA REPETIR EL CARACTER EN CANTIDAD DE RANGOS
var reg22 = /\d{1,}|respuesta/ig;


var texto = "Hola Mundo";
var texto2 = "Hola Mundoo 1678. \n Qué tal?";
var texto3 = "La respuesta ta de la sumea es: 45 + 60 = 105";

var arr = texto.match(reg1); // null o arreglo

console.log(arr);


console.log(  texto.match(reg2) );
console.log(  texto.match(reg3) );
console.log(  texto.match(reg4) );
console.log(  texto.match(reg5) );
console.log(  texto.match(reg6) );
console.log(  texto2.match(reg7) );
console.log(  texto2.match(reg8) );
console.log(  texto.match(reg9) );
console.log(  texto.match(reg10) );
console.log(  texto.match(reg11) );
console.log(  texto.match(reg12) );
console.log(  texto.match(reg13) );
console.log(  texto2.match(reg14) );
console.log(  texto2.match(reg15) );
console.log(  texto2.match(reg16) );
console.log(  texto2.match(reg17) );
console.log(  texto2.match(reg18) );
console.log(  texto2.match(reg19) );
console.log(  texto2.match(reg20) );
console.log(  texto2.match(reg21) );
console.log(  texto3.match(reg22) );
