function verificar(){
    let anterior = Number(prompt('Qual era o preço anterior do produto?'))
    let atual = Number(prompt('Qual é o preço atual do produto?'))
    let res = document.getElementById('p1')

    res.innerHTML = '<h1>Analisando os valores informados</h1>'
    res.innerHTML += `O produto custava R$ ${anterior} e agora custa R$ ${atual}.`
    if (atual > anterior){
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        res.innerHTML += `<p>O preço subiu R$ ${atual - anterior} em relação ao preço anterior.</p>`
        let subiu = 100 * (atual - anterior) / anterior
        res.innerHTML += `<p>Uma variação de ${subiu}% para cima</p>`


    } else {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu R$ ${anterior  - atual} em relação ao preço anterior.</p>`
        let caiu = 100 * (anterior - atual) / anterior
        res.innerHTML += `<p>Uma variação de ${caiu}% para baixo.</p>`

    }
}   