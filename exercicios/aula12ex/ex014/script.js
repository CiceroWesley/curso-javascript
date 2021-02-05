function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        foto.src = 'manha.png'
        document.body.style.background = '#fdf2e1'
    } else if(hora <18){
        //boa tarde
        foto.src = 'tarde.png'
        document.body.style.background = '#c88c56'
    }else{
        //boa noite
        foto.src = 'noite.png'
        document.body.style.background = '#a4c0c5' //código em hexadecimal converti do gimp no w3schools
    }
}
