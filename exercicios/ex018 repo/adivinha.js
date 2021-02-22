var numero = 0
function gerar(){
    let min = 1
    let max = 100
    numero = Math.floor(Math.random() * (max - min)) + min 
}

function adivinha(){
    let user = Number(prompt('Qual é o seu palpite?'))
    let mensagem = document.getElementById('p1')
    if (user > numero){
        mensagem.innerHTML += `<p>Você falou ${user}. Meu número é Menor</p>`
    } else if( user < numero){
        mensagem.innerHTML += `<p>Você falou ${user}. Meu número é Maior</p>`
    } else {
        mensagem.innerHTML += `<p>PARABÉNS! Você acertou! Eu tinha sorteado o valor ${numero}!</p>`
        document.getElementById('b1').style.visibility = 'hidden'
    }
}