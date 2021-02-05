function tabuada(){
    let numero = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')  //select
    if(numero.value.length == 0){   //se no numero nao tiver nada
        alert('Digite um número')
    }else{
        numero = Number(numero.value)
        let i = 1
        tabuada.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${numero} * ${i} = ${numero*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
            i++
        }
    }
}