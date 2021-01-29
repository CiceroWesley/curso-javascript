var agora = new Date()
var diasemana = agora.getDay()
//diasemana = 7
console.log(`${diasemana}`)

switch(diasemana){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')  
        break 
    case 5:
        console.log('Sexta')
        break
    default:
        console.log('Dia não listado')             
    }