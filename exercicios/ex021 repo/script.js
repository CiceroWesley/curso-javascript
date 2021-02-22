function contar() {
    let resu = document.getElementById('p1')
    resu.innerHTML += '<h3>Contando de 1 até 10</h3>'

    for(let i = 1; i<= 10; i++){
        resu.innerHTML += `${i}&#x2708`
    }
    resu.innerHTML += '&#x270B'
 
}