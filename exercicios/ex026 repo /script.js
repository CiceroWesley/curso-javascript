function conta() {
    let resu = document.getElementById('p1')
    let inicial = Number(document.getElementById('num1').value)
    let final = Number(document.getElementById('num2').value)


    resu.innerHTML += `<h2>Contando de ${inicial} até ${final}</h2>`

    if(final > inicial){
        for(inicial; inicial <= final; inicial++){
            resu.innerHTML += `${inicial} &#x1F449;`
        }
    } else if(inicial > final){
        for(inicial; inicial >= final; inicial--){
            resu.innerHTML += `${inicial} &#x1F449;`
        }
    } else {
        resu.innerHTML += `Não é possível contar, pois os números são iguais `
    }
    
    resu.innerHTML += '&#x1F3C1;'
 
}