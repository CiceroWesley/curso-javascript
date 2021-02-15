let num = [1,2,3]
num[3] = 14 //posição fisica
num.push(9)
num.push(10)
//num.push(11)
let tamanho = num.length
num.sort() //não esta errado, é que ele ordena de acordo com a potuação unicode
console.log(tamanho)
console.log(num)
/*
for(let i =0; i < tamanho; i++){
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
*/
console.log(num.indexOf(14)) // se indexOf retornar menos 1 o valor não foi encontrado
for(let i in num){
    console.log(`A posição ${i} tem valor ${num[i]}`) 
}