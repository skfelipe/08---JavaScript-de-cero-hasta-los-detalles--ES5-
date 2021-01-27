






function evento (arg){
	console.log("Me disparé");
	console.log(arg);
	console.log(arg.keyCode);
}



var objeto = document.getElementById("objdemo");


objeto.addEventListener("keypress", evento);


objeto.click();
