/*
// ARRAY 

// UM ARRAY E UM TIPO DE DADOS QUE SERVE PARA AMARZENAR VALORES
// SEQUENCIALMENTE EM FORMA DE LISTA 

// ITEM COMECAM DO NUMERO ZERO 


//const numero = [ 1,2,3,4,5 ]
//const nomes = ["Ana" , "Caio" , "Lucas" , "Marta" , "Luiz" , "Pedro"]





//na minha lista de numeros 
// eu quero a posicao 0


//console.log(numero[4]);

//console.log(nomes[2]);





//LENGTH
//E uma propriedade para obter o comprimento de uma array

//console.log(nomes.length);  


//for (let i = 0; i < nomes.length ; i++) {

    //console.log(nomes[i]);
    
//}





// For of 

const frutas = ["Pera" , "Uva" , "Laranja" , "Abacaxi"]

for ( const frutas of frutas ) {

    console.log(frutas);
    
}



// of listaNumeros - Percorra toda a lista !
for (const numero of listaNumeros ) {

    soma += numero

}

console.log("Numeros " , numeros );

console.log("Soma " , soma)
*/




let maior = 0;
const litaNota = [7.5 , 9.0 , 6.5 , 8.8 , 10.0 ,5.5]

for (const nota of litaNota) {
   

    if (nota > maior ) {
        maior = nota
    } 
    
}


console.log(maior);

