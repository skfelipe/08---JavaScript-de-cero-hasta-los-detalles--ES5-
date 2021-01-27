


// QUE SON LAS COOKIES ... SELECCION DE PRODUCTOS , CLIENTE EMAIL ETC.




function crearCookie(nombre, valor){

	valor = escape(valor); // 
	var valor2 = unescape(valor); // 


	//fecha expiracion

	var hoy = new Date();

	hoy.setMonth(hoy.getMonth()+ 1);

	
	document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+ ";";

}

function borrarCookie(nombre){

	var hoy = new Date();

	hoy.setMonth(hoy.getMonth()- 1);

	
	document.cookie = nombre+"=x;expires="+hoy.toUTCString()+ ";";
}

function getCookie(nombre){
	var cookies = document.cookie;

	var cookieArr = cookies.split("; ");

	for(var i = 0; i < cookieArr.length ; i++){

		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;

		if(parArr[0] === nombre){
			return unescape(parArr[1]);

		}
	}


	console.log(cookieArr);


	return undefined;
}


crearCookie("nombre", "Emma");
crearCookie("correo", "ftcbenavente@gmail.com");
crearCookie("direccion", "mi casa");
crearCookie("fono", "456456456456465");

console.log(getCookie("direccion"));
// borrarCookie("nombre");


//document.cookie = "nombre=Felipe;";
//document.cookie = "apellido=Cancino;";
var cookies = document.cookie;


console.log(cookies);