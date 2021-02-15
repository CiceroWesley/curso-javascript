function calcular(){
    let res = document.getElementById('p1')
    let a = Number(prompt('Qual o valor de a?'))
    let b = Number(prompt('Qual o valor de b?'))
    let c = Number(prompt('Qual o valor de c?'))
    let delta = (b**2) - 4 * a * c
    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    res.innerHTML += `<p>A equação atual é <strong>${a}<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark>`

}