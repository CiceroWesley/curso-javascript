function contar() {
    let resu = document.getElementById('p1')
    resu.innerHTML += '<h3>Contagem Regressiva de 10 a 1</h3>'

    for(let i = 10; i >= 1; i--){
        resu.innerHTML += `${i} &#x2708 `
    }
    resu.innerHTML += '&#x270B'
 
}