//while(true){
//    console.log("ao infinito e... Alem")
//} 


/*

// contador inicia com o numero 1
let contador = 1 

//enqunto o meu contador for menor ou igual a 5, continue.
while (contador <= 5 ) {

    console.log("Contagem: " + contador)

        // 1 + 1 = 2 
    contador = (contador + 1)

        // contador = 2

}

*/




/*
// CONTAGEM REGRESSIVA
let tempo = 10

while (tempo > 0) {

    console.log(tempo)

    tempo = (tempo - 1)

}

console.log("Codigo acabou")
*/




/*
//VALIDACAO SENHA 
const senhaCorreta = "148supersenha"
let tentativa = ""

while (tentativa != senhaCorreta) {

    tentativa = prompt("Digite a Senha : ")

    if (tentativa === senhaCorreta) {
        console.log(" Senha Correta !!! ")
        alert("Senha Correta !!!")
    } else {
        console.log(" Senha Incorreta !!!")
    }
    
}
*/




/*
let soma = 0;
let numero; 

while (soma <= 100) {
    
    numero = Number(prompt("Informe um numero"))

    soma = soma + numero 

}
console.log("A soma dos numeros chegou em: " + soma)

*/





/*

// DO - WHILE  -> PERMITECRIAR LOOP QUE SAO EXCEUTADOS UMA OU MAIS VEZES
 let repetir = false 

// faca
 do {
    console.log("So uma vez.")
    
 } while (repetir); //ENQUANTO a codicao for TRUE
*/



 /*
 // WHILE vs DO ... WHILE 

 let num = 10;

 while (num < 5 ) {

    console.log("Isso nao vai aparecer")
 }

 //executa o bloco de depois analisar se vai aparecer.
 do {

    console.log("Isso VAI aparecer pelo menos 1x ")

 } 
 while (num < 5 );

*/

// ADIVINHE O NUMERO 

// 1 a 100
const numeroSecreto = Math.floor( Math.random()*10)+1;

let papite;
let tentativas = 0;

alert(" Advinhe o numero entre 1 e 10.")

do {
    papite = Number(prompt("Seu palpite"))
    tentativas++

    if (Number.isNaN(palpite)) {

        alert("digite um numero valido");
        
    } else if (palpite == numeroSecreto)

    {
        alert(" ACERTOU!!! " + " em " + tentativas + " tentativas. ")
        
    } else if (palpite < numeroSecreto) 

    {
        alert("o numero secreto e menor");
        
    } else {
        alert("o numero secreto e maior");

    }
        
} while (condition);