function contar() {
    let resu = document.getElementById('p1')
    resu.innerHTML += '<h3>Contando de 1 até 10, marcando os pares</h3>'

    for(let i = 1; i<= 10; i++){
        if(i%2 == 1){
            resu.innerHTML += `${i}&#x2708`
        } else {
            resu.innerHTML += `<mark>${i}</mark>&#x2708`
        }
    }
    resu.innerHTML += '&#x270B'
 
}