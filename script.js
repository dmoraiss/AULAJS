/*

Linguagem Interpretada
Node.js
Tipagem Fraca


let minhaVariavel = 10;
minhaVariavel = "Hello World"
minhaVariavel = true;





let numero = 10;
let texto = "20";
let resultado = numero + texto;

console.log (resultado);





console.log(Number("123"));
console.log(parseInt("10.9"))
console.log(parseFloat("10.9"))
console.log(String("123"))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("oi"))

Condicionais (if , else , operadores logicos)

const idade = 15;

if (idade >= 18) {
    console.log("Voce e maior de idade");
}else {
    console.log ("Voce e menor de Idade");
}





    if (idade >= 20) {
    console.log("Maior de Idade");

const idade = Number(prompt("Digite sua idade:"));

if(idade >= 18){
    //console.log("Maior De Idade");
}else {
    console.log("Menor De Idade");
}






const idade = 20;
const temDocumento = true;
const estaLista = true;

if (idade >= 18 && temDocumento && estaLista) {
    //console.log("Pode entrar!!");
} else {
    //console.log("Acesso Negado!!");
}





const temDinheiro = false;
const temCartao = true;
const temPix = false; 

if ( temDinheiro || temCartao || temPix ) {
    //console.log("Pode Pagar")
} else {
    //console.log("Nao Pode Pagar")
}





const usuario = "admin";
const senha = "1234";

const senhaCorreta = ( senha === "1234" )
const ehAdmin = (usuario === "admin")
const ehGerente = (usuario === "gerente")

if ( (ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta) ) {
    //console.log("Acesso Liberado")
} else {
    console.log("Acesso Negado")
}





const usuario = prompt("Usuario");
const senha = prompt("Senha");

const acessoAdmin = (usuario === "admin" && senha === "1234");
const acessoUser = (usuario === "user" && senha === "senha1234");

if (acessoAdmin || acessoUser) {
    console.log("Acesso Liberado!")
} else {
    console.log("Acesso Negado!")
}






const nota = 75;

if (nota >= 80) {
    console.log("Aprovado!")
} else if (nota >= 60) {
    console.log("Recuperacao!")
} else {
    console.log("Reprovado !")
}
 
*/






// ATIVIDADE EM SALA 

/*
Exercício — Classificação da Temperatura

Crie um programa em JavaScript que solicite ao usuário uma temperatura em graus Celsius (°C) e classifique a temperatura de acordo com as faixas abaixo:

Temperatura	Classificação
Abaixo de 0°C	🥶 Muito frio
De 0°C a 15°C	❄️ Frio
De 16°C a 25°C	😊 Agradável
De 26°C a 35°C	🌡️ Quente
Acima de 35°C	🔥 Muito quente



const temperatura = Number ( prompt ( "Digite a temperatura atual !" ) )


if (Number.isNaN(temperatura)) {

    console.log("Temperatura Invalida")

} else if (temperatura >= 35) {

    console.log("Muito Quente !!!")

} else if (temperatura >= 26) {

    console.log("Quente")

} else if (temperatura >= 16) {

    console.log("Agradavel")

} else if (temperatura >= 0) {

    console.log("Frio")

} else if (temperatura < 0) {

    console.log("Muito Frio")

}





let peso = Number(prompt("Peso (Kg) "));
let altura = Number(prompt("Altura (M) "));

let imc = peso / (altura **2);

console.log(imc.toFixed(2));
alert(imc.toFixed(2));



if (imc <=18 ) {
    console.log("Baixo")
} 
else if ( imc > 18 && imc <= 24 ) {
    console.log("normal")
}
else {
    console.log("sobre preso")
}

*/












//1.Verificar maioridade
//Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

    /*
 let idade = Number(prompt ("Digite sua idade "))

 if (Number.isNaN (idade)) {
    console.log ("Digite apenas numeros ")
 } else if ( idade >= 18) {
    console.log ("Maior de Idade")
 } else {
    console.log ("Menor de Idade")
 }
    */

//2.Positivo ou Negativo
//Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo


    /*
let numero = Number(prompt ("Digite um numero "))

 if (Number.isNaN (numero)) {
    console.log ("Digite apenas numeros ")
 } else if ( numero >= 1 ) {
    console.log("Numero Possitivo");
    alert("Numero Possitivo");
 } else {
    console.log("Numero Negativo");
    alert("Numero Negativo");
 }
    */


//3.Aprovação em uma prova
//Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi Aprovado. Caso contrário, informe que foi Reprovado.

/*
let nota = Number(prompt ("Digite sua Nota "))

 if (Number.isNaN (nota)) {
    console.log ("Digite apenas numeros ")
 } else if ( nota >= 60) {
    console.log("Aluno Aprovado");
    alert("Aluno Aprovado");
 } else {
    console.log("Aluno Reprovado");
    alert("Aluno Reprovado");
 }
 */

//4.Positivo, Negativo ou Zero
//Leia um número informado pelo usuário e indique se ele é:
//Positivo; 
//Negativo; 
//Zero. 

    /*
let numero = Number(prompt ("Digite um numero "))

if (Number.isNaN (numero)) {
    console.log ("Digite apenas numeros ")
 } 
 else if ( numero >= 1 ) {
    console.log("Numero Possitivo");
    alert("Numero Possitivo");
 } 
 else if (numero  <= -1 ) {
    console.log("Numero Negativo");
    alert("Numero Negativo");
 } 
 else if ( numero = 1 ) {
    console.log("Numero 0");
    alert("Numero 0");
 }
    */

//5. Classificação por idade
//Solicite a idade de uma pessoa e classifique-a conforme as regras abaixo:
//Criança: de 0 a 12 anos; 
//Adolescente: de 13 a 17 anos; 
//Adulto: 18 anos ou mais. 
//Caso seja informada uma idade negativa, exiba uma mensagem de idade inválida.

    /*
let idade = Number(prompt ("Digite sua idade "))

 if (Number.isNaN (idade)) {

    console.log ("Digite apenas numeros ")
    alert("Digite apenas numeros");

 } 
    else if ( idade <= 12) {

    console.log ("Criança")
    alert("Criança");

 } 
    else if (idade <= 17) {

    console.log ("Adolescente")
    alert("Adolescente");

 } 
    else if (idade >= 18) {

    console.log ("Adulto")
    alert("Adulto");

 } 
    else if (idade <= -1) {

     console.log ("idade inválida")
    alert("idade inválida");
    
 }
    */

//6. Par ou Ímpar
//Solicite um número inteiro ao usuário e informe se ele é par ou ímpar.

/*
let numero = Number(prompt ("Digite um numero "))

if (Number.isNaN (numero)) {
    console.log ("Digite apenas numeros ")
 } 
 else if ( numero % 2 === 0 ) {
    console.log("Numero Par");
    alert("Numero Par");
 } 
 else {
    console.log("Numero Impar");
    alert("Numero Impar");
 } 
*/

/* ------------------------------------  */


// Nível Intermediário


/* ------------------------------------  */

//1. Calculadora simples
//Crie uma calculadora que:
//Solicite o primeiro número; 
//Solicite a operação desejada (+, -, * ou /); 
//Solicite o segundo número. 
//Ao final, exiba o resultado da operação escolhida. Caso seja informada uma operação inválida, exiba uma mensagem de erro.

/*

let numero1 = Number(prompt ("Digite o primerio numero "))
let operador = (prompt ("Digite operador "))
let numero2 = Number(prompt ("Digite o segundo numero "))


let resultado;

if (operador === "+") {

    resultado = numero1 + numero2 ;
    console.log(resultado);
    alert(resultado);
    
} else if (operador === "-") {

    resultado = numero1 - numero2 ;
    console.log(resultado);
    alert(resultado);

} else if (operador === "*") {

    resultado = numero1 * numero2 ;
    console.log(resultado);
    alert(resultado);

} else if (operador === "/") {

    if (numero2 == 0 ) {

    console.log("Não é possivel realizar o resultado");
    alert("Não  possivel realizar o resultado");

    } else {

    resultado = numero1 / numero2 ;
    console.log(resultado);
    alert(resultado);

    }

} else {
    
    console.log(Erro);
}

*/

//2. Maior entre três números
//Solicite três números diferentes ao usuário e informe qual deles é o maior.

let numero1 = Number(prompt("Digite o primeiro numero"))
let numero2 = Number(prompt("Digite o segundo numero"))
let numero3 = Number(prompt("Digite o terceiro numero"))

if (numero1 >= numero2 && numero1 >= numero3 ) {
    console.log(" O numero " + numero1 + " e o maior ")

} else if (numero2 >= numero1 && numero2 >= numero3 ) {
    console.log(" O numero " + numero2 + " e o maior ")
} else {
    " O numero " + numero3 + " e o maior "
}










































































































































































































































































































































































































































































































































































































































