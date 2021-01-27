
for_principal:
for (var i = 1 ; i <= 5 ;  i++){

	console.log("i",i);

	for_secundario:
	for(var j = 1; j<= 5; j++){
		console.log("j",j);

		// continue for_principal;

		for(var x = 1; x<= 5; x++){
			console.log("x",x);

			break for_principal;
		}
	}
}


// TOOD: LA ROTULACION DE CICLOS CORRESPONDE A RENOMBRAR CADA CICLO ANTES DE SU EJECUCION PARA PODER SALTAR EL CICLO CON CONTINUO O FINALIZARLO CON BREAK DEPENDIENDO QUE CICLO SE QUIERA FINALIZAR.