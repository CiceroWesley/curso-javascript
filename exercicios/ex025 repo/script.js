function conta() {
    let resu = document.getElementById('p1')
    let final = Number(document.getElementById('num1').value)

    resu.innerHTML += `<h2>Contando de 0 até ${final}</h2>`

    let cont = 0
    while (cont <= final){
        resu.innerHTML += `${cont} &#x1F449; `
        cont++
    }
    resu.innerHTML += '&#x1F3C1;'
 
}