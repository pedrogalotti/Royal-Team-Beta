





var textoVisor = null;
var contadorDePontos = 0;
var limiteDePontos = 1;

var botoes = document.querySelectorAll('button');


var x = 0;

while(x < botoes.length){
    console.log('valor de x é =' + x);
    botoes[x].addEventListener('click', clicouNoBotao);
    x = x + 1;
}

function clicouNoBotao(event) {
  
var textoDoBotao = event.target.innerText;

 if(verifiqueSeEhNumero(textoDoBotao)){
    
 if(textoVisor === null){
    textoVisor = textoDoBotao;
   } else {
    if(textoDoBotao === '.'){
       contadorDePontos = contadorDePontos + 1;
    if(contadorDePontos > limiteDePontos){
        return; 
     }  
    }   
    textoVisor = textoVisor + textoDoBotao;
   }
 }

   ehOutrasAcoes(textoDoBotao);
   fazendoOperacao(textoDoBotao);
   escreverNoVisor(textoVisor);
}

function fazendoOperacao(texto){
   var digitosPermitidos = ["/", "*", "-", "+", "="];
   var existeDigitosPermitido = digitosPermitidos.includes(texto);

 if(existeDigitosPermitido){
    console.log("pode fazer a operacao");
 if(textoVisor !== null && textoVisor !== ''){
 if(texto === "="){
       console.log("Resolva a operacao");
       try {
         var resultado = eval(textoVisor);
         textoVisor = resultado;
         textoVisor = textoVisor.toFixed(0);
         textoVisor = textoVisor.toString(); 
         if(textoVisor.indexOf('.') === - 1){
            contadorDePontos = 0;
         }
       } catch (erro) {
         console.log(erro);
         //textoVisor = "operação mal formatada";
          textoVisor = "erro! Aperte AC para excluir e digite novamente";
         //textoVisor = "";        
       } 
     } else {
       textoVisor = textoVisor + texto;
       contadorDePontos = 0;
    }
   }
 } else {
    console.log("nao da pra fazer a operecao");
 }
}

function ehOutrasAcoes(texto){
 if(texto === 'AC'){
    console.log('Acao zerada');
    textoVisor = '';
    contadorDePontos = 0;
 } else if (texto === '+/-') {
    if(textoVisor !== null && textoVisor.length > 0) {
    textoVisor = parseFloat(textoVisor) * (-1);
    textoVisor = textoVisor.toString();
  }
 } else if(texto === 'DEL') {
    var ultimoCaractere = textoVisor[textoVisor.length - 1];
    if(ultimoCaractere === '.'){
       contadorDePontos = 0;
   }
    textoVisor = textoVisor.substring(0, textoVisor.length - 1);
 }
}

function verifiqueSeEhNumero(texto){
 if(isNaN(texto) && texto !== '.') {
    return false;
 } else {
    return true; 
 }
}

function defeniTextoDoVisor(texto){
   textoVisor = texto;
}

function escreverNoVisor () {
   document.querySelector('.corpo .visor').innerText = textoVisor;
}