function estacao() {
    let mes = prompt('Digite o mês em extenso (ex:Setembro)').toUpperCase()
    let res = document.getElementById('p1')

    switch (mes) {
        case 'JANEIRO':
        case 'FEVEREIRO':
        case 'MARÇO':
            res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <strong>VERÃO</strong>.`
            break
        case 'ABRIL':
        case 'MAIO':
        case 'JUNHO':
            res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <strong>OUTUNO</strong>.`
            break
        case 'JULHO':
        case 'AGOSTO':
        case 'SETEMBRO':
            res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <strong>INVERNO</strong>`
            break
        case 'OUTUBRO':
        case 'NOVEMBRO':
        case 'DEZEMBRO':
            res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <strong>PRIMAVERA</strong>`
            break
        default:
            res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <strong>INDEFINIDA</strong>`
    }
 
}