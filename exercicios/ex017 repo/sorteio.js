function gerar(){
    let res = document.getElementById('p1')
    let min = 1
    let max = 100
    let numero = Math.floor(Math.random() * (max - min)) + min 
    res.innerHTML += `<p>Acabei de pensar no número <mark>${numero}</mark>!</p>`

}

function limpar(){
    let res = document.getElementById('p1')
    res.innerHTML = null
}