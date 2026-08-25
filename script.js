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
*/


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

















































































































































































































