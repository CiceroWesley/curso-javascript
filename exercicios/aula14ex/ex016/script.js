function contar(){
    let inicio = document.getElementById('inicio')
    let passo = document.getElementById('passo')
    let fim = document.getElementById('fim')
    let resu = document.querySelector('div#resu')
    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0 ){
        //alert('Falta dados!')
        resu.innerHTML= 'Impossível contar'
    } else{
        inicio = Number(inicio.value)
        passo = Number(passo.value)
        fim = Number(fim.value)
        resu.innerHTML = 'Contando: <br/>'
        if(passo<=0){
            alert('Passo inválido. Considerando passo = 1')
            passo = 1
        }
        if(inicio < fim){
            for(let i = inicio; i <= fim; i+= passo){
                resu.innerHTML += `${i} &#128540`
        }
        }else {
            for(let i = inicio; i >= fim; i-= passo){
                resu.innerHTML += `${i} &#128540`
        }
        
        }
        resu.innerHTML+= `&#128512`

}
}