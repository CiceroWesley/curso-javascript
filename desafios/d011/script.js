function verifica(){
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))
    let res = document.querySelector('p#p1')

    if((ano%4 == 0 && ano%100 != 0) || ano % 400 == 0){
        res.innerHTML = `<h1>Analisando o ano de ${ano}...</h1>`
        res.innerHTML += `<p>O ano de ${ano} <strong><mark style="background-color: greenyellow;">É BISSEXTO</mark></strong></p>`
    } else {
        res.innerHTML = `<h1>Analisando o ano de ${ano}...</h1>`
        res.innerHTML += `<p>O ano de ${ano} <strong><mark style="background-color: red;"> NÃO É BISSEXTO</mark></strong></p>`
    }

}