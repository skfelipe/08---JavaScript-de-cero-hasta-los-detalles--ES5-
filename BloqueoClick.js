





document.onmousedown= function(arg){
	



	if(arg.button ===2 ){
		alert("click bloqueado");
		return
	}


	console.log(arg);
}


// document.onmousedown= function(arg){
// 	alert("click bloqueado");
	
// 	console.log(arg);
// }








document.onmouseup = function(){
	var texto = window.getSelection().toString();
	console.log(texto);
}




















