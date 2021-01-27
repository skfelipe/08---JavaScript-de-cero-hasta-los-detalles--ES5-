

function validar(){

	// var nombre = $("#txtNombre").val();
	// var apellido = $("#txtApellido").val();

	var nombre  = document.getElementById("txtNombre").value;
	var apellido  = document.getElementById("txtApellido").value;

	alert(nombre,apellido );

	if(nombre.length < 1){
		return false;
	}
	if(apellido.length < 1){
		return false;
	}


	return true;
}


// TODO: NO ES POSIBLE USAR $().val(); YA QUE DICHA SISTAXIS CORRESPONDE A JQUERY


function getParamURL(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}




console.log(window.location.search)

console.log(getParamURL("txtNombre"));