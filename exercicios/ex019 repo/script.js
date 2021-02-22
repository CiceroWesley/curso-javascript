function acoes() {
    let num1 = Number(prompt('Primeiro valor?'))
    let num2 = Number(prompt('Segunda valor:'))
    let op = Number(prompt(`Valores informados ${num1} e ${num2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3]Multiplicar\n[4]Dividir`))
    let res = document.querySelector('p#p1')
    res.innerHTML = '<h2>Calculando...</h2>'
    if (op == 1){
        res.innerHTML += `<p>${num1} + ${num2} = ${num1 + num2}</p`
    } else if (op == 2){
        res.innerHTML += `<p>${num1} - ${num2} = ${num1 - num2}</p`
    } else if (op == 3){
        res.innerHTML += `<p>${num1} * ${num2} = ${num1 * num2}</p`
    } else if(op == 4){
        if(num2 != 0){
            res.innerHTML += `<p>${num1} / ${num2} = ${num1 / num2}</p`
        } else {
            res.innerHTML += `<p>Divisor não pode ser ZERO</p`
        }
    } else {
        res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles. `
    }
}