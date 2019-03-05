
var resultado = 0;
var SOMANDO = false;
var SUBTRAINDO = false;
var MULTIPLICANDO = false;
var DIVIDINDO = false;


function digita(num){
	var valorTela =document.getElementById('screen').value; 
	if(valorTela == '0')
       document.getElementById('screen').value = num;
    else{
       valorTela+=num;
       document.getElementById('screen').value = valorTela;
   }

  } 

  function guardarUltimaOperacao(){
  	
   var valorTela = parseInt(document.getElementById('screen').value);

  	if(SOMANDO){
 	   	resultado += valorTela;
 	   	SOMANDO = false;
 	}
 	else if(SUBTRAINDO){
 		resultado -= dvalorTela;
 		SUBTRAINDO = false;
 	}
 	else if(MULTIPLICANDO){
 		resultado *= valorTela;
 		MULTIPLICANDO = false;
 	}
 	else if(DIVIDINDO){
 		resultado /= valorTela;
 		DIVIDINDO = false;
 	}
 	else{
 		resultado = valorTela;
 	}
  		
  }

 function soma(){
 	
    guardarUltimaOperacao();
    SOMANDO = true;
 	document.getElementById('screen').value = 0;
 }
 
 function subtrai(){
 	
    guardarUltimaOperacao();
    SUBTRAINDO = true;
 	document.getElementById('screen').value = 0;
 }  
 
 function multiplica(){
 	
    guardarUltimaOperacao();
    MULTIPLICANDO = true;
 	document.getElementById('screen').value = 0;
 }  
 
 
 function divide(){
 	
    guardarUltimaOperacao();
    DIVIDINDO = true;
 	document.getElementById('screen').value = 0;
 }    

 function exibeResultado(){

 	 guardarUltimaOperacao();
     document.getElementById('screen').value = resultado;
 }

 function limparTudo(){
 	
 	 SOMANDO = false;
	 SUBTRAINDO = false;
	 MULTIPLICANDO = false;
	 DIVIDINDO = false;
	 resultado = 0;
     document.getElementById('screen').value = 0;
 }


 function limpar(){

     document.getElementById('screen').value = 0;
 }
