function situacao(){
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Primeira nota de ${nome}`))
    let n2 = Number(prompt(`Segunda nota de ${nome}`))
    let media = (n1 + n2)/2
    let res = document.getElementById('res')
    res.innerHTML = `<h1>Analisando as notas de ${nome}</h1>`

    if (media > 6){
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
        res.innerHTML += '<p>Com média acima de 6,0, o aluno está <strong><mark style="background-color: greenyellow;">APROVADO</mark></strong></p>'
    } else if (media >= 3){
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
        res.innerHTML += '<p>Com média entre 3,0 e 6,0, o aluno está em <strong><mark style="background-color: yellow;">RECUPERAÇÂO</mark></strong></p>'
    } else {
        res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
        res.innerHTML += '<p>Com média abaixo de 3,0, o aluno está <strong><mark style="background-color: red;">REPROVADO</mark></strong></p>'
    }
}