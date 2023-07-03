
function calcular(){

let numero = document.getElementById("numero").value;
var numero1 = numero;
let resultado =1;

if(numero1> 0){
	for (i=1; i<=numero1; i++) {
		resultado = resultado * i; 
	}
}else if(numero== 0){
    resultado="1";
}else if(numero<0){
    resultado="No existe";
}

document.getElementById("input1").innerHTML = resultado ;
}