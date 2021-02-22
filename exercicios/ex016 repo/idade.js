function calcular (){
    let res = document.getElementById('p1')
    let data = new Date
    data = data.getFullYear()
    let anouser = Number(prompt('Em que ano você nasceu?'))
    res.innerHTML = 'Aqui vai aparecer algo...'
    if (anouser > data){
        alert('Ano de nascimento inválido')
    } else {
        res.innerHTML = `Quem nasceu em ${anouser} vai completar ${data - anouser} anos em ${data}`
    }
}