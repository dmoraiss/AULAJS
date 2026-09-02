// OBJETOS - Sao como "Fichas" com informacoes
// - Cada informacao tem um nome (CHAVE) e um valor 

//PESSOA - ( Nome , Idade , Email, Genero , CPF )

/*
const pessoa = {

    nome: "Luiz",
    idade: 19,
    email: "email@teste.com",
    genero: "M",
    cpf: "479.755.999-99",

}
*/

//console.log(pessoa); // acessar todos o objetos 
//console.log(pessoa.nome);

/*
// FOR IN

for (const chave in pessoa) {
    
    // chave e o NOME da propriedade
    // objeto [chave] e o valor

    console.log(pessoa[chave]);
    //para cada vez que for percorrer, ele vai pegar a
    //CHAVE atual e retornar o VALOR que a chave representa.

}
*/

/*
// Objeto Aluno que guarde os dados de nome , matricular , curso e nota.
const Aluno = {
    nome:"Felipe",
    matricula: "21568785",
    curso:"JavaScript",
    nota:9.5,
}
console.log("Dados do aluno : \n");
*/


/*
for( const chave in aluno ){

    const valor = aluno[aluno]

    console.log("chave: " + chave + " valor: " + valor );

}
*/    


/*
//LISTA DE PRODUTOS 

//informacao de produto, preco, quantidade

//arrayb de objetos
//cada item do array e um objeto

let carrinho = [
    //Objeto.
    {produto: "camiseta" , preco: 49.90, quantidade: 2 } , 
    {produto: "calca jeans" , preco: 150.00 , quantidade: 1 } , 
    {produto: "tenis" , preco: 199.00 , quantidade: 1 } , 
    
]

//for .. in --> Objeto | Retorna chaves / indice
//for .. for --> Arrays , Strings | Retorna valores

for (const itemDoMercado of carrinho ) {
    //retornar apenas o nome do produto e preco.

    console.log(itemDoMercado.produto);
    console.log(itemDoMercado.preco);
    
}
*/


let chamaBurguer =  [ 

    {produto: "Combo De Batata Frita" , preco: 22.99 , quantidade: 2 } ,

    {produto: "Hamburguer" , preco: 39.00 , quantidade: 2 } , 

    {produto: "Refri 500ml " , preco: 14.99 , quantidade: 1 } , 

    {produto: "Hamburguer De Chedder " , preco: 39.00 , quantidade: 2 } ,
     
    {produto: "Refri 300ml " , preco: 14.99 , quantidade: 1 } ,
]

for (calculo of chamaBurguer ) {

    console.log(calculo.produto + " -- VALOR TOTAL ITEM:" + calculo.preco * calculo.quantidade);
    
}














