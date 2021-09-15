"use strict"

//Mostrar elementos do array

const numeros = [3, 12, 70, 21, 17, 2];
console.log("Elementos do array", numeros);

//criar array 50% de desconto

const desconto = (valor) => valor * 0.5
const n50PorcentoDesconto = numeros.map(desconto)
console.log("Desconto de 50%", n50PorcentoDesconto)

// numeros menores que 20

const eMenor20 = (numero) => numero < 20
const numerosMenoresQue20 = numeros.filter(eMenor20)
console.log("Número menor que 20" , numerosMenoresQue20)


// somente numeros pares

const pares = (numero) => numero % 2 == 0
const numerosPares = numeros.filter(pares)
console.log("Somente números pares" , numerosPares)


//soma de todos os números do array

const soma = (a, b) => a + b
const somaDosElementos = numeros.reduce(soma, 0)
console.log ("Soma de todos os elemetos", somaDosElementos )





