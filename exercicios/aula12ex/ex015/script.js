function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//ano atual
    var fano = document.getElementById('txtano')//ano digitado
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                imagem.setAttribute('src','menino.png')
            } else if(idade < 21){
                //jovem
                imagem.setAttribute('src','rapaz.png')
            } else if(idade < 50){
                //adulto
                imagem.setAttribute('src','adulto.png')
            } else{
                //idoso
                imagem.setAttribute('src','idoso.png')
            }
        } else{
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                imagem.setAttribute('src','menina.png')
            } else if(idade < 21){
                //jovem
                imagem.setAttribute('src','moca.png')
            } else if(idade <50){
                //adulto
                imagem.setAttribute('src','adulta.png')
            } else{
                //idoso
                imagem.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(imagem)
    }

}