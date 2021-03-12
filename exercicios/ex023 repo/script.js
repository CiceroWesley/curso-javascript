function contar() {
    let resu = document.getElementById('p1')
    resu.innerHTML += '<h3>Números pares de 1 até 10</h3>'

    for(let i = 1; i<= 10; i++){
        if(i%2 == 0){
            resu.innerHTML += `${i} &#x2708`
        }
    }
    resu.innerHTML += '&#x270B'
 
}