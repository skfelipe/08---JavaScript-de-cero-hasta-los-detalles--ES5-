function identificar(params){
	console.log(typeof params);

	console.log(params instanceof Persona ); // compara dos objetos

	if(typeof params =="function"){
		params();
	}else{
		console.log(params);
	}
}

function Persona(){
	this.nombre = "Emma";
	this.edad = 1;

}
var Emma = new Persona();

identificar(1);
identificar("1");
identificar({});
identificar(Emma);
identificar(function(){});


identificar(function(){ console.log("soy anonima"); });


identificar(Emma);
