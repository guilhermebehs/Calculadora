
var resultado = 0;
var SOMANDO = false;
var SUBTRAINDO = false;
var MULTIPLICANDO = false;
var DIVIDINDO = false;


function digita(num){
	var valorTela =document.getElementById('screen').value; 
  if(num == '.' && valorTela.includes('.'))
     return;

	if(valorTela == '0')
       valorTela = (num == '.' ? '0.' : num);
    else{
       valorTela+=  num;
   }

    document.getElementById('screen').value = valorTela;

  } 

  function guardarUltimaOperacao(){

   var valorAux = document.getElementById('screen').value;
   valorAux = valorAux.replace(/([.]|\.0)$/g, '');
   var valorTela = valorAux.includes('.') ? parseFloat(valorAux) : parseInt(valorAux);

  	if(SOMANDO){
 	   	resultado += valorTela;
 	   	SOMANDO = false;
 	}
 	else if(SUBTRAINDO){
 		resultado -= valorTela;
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
