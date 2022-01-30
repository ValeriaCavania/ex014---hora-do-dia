function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var saudacao = window.document.getElementById('saudacao')

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12){
        saudacao.innerHTML = 'Bom dia!'
        img.src = 'imagem/manha.png'
        document.body.style.background = '#5c6c69'
    }else if (hora >= 12 && hora <= 18){
        //boa tarde
        saudacao.innerHTML = 'Boa tarde!'
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#e2caa6'
    }else {
        //boa noite, cuidado com a burra
        saudacao.innerHTML = 'Boa noite!'
        img.src = 'imagem/noite.png'
        document.body.style.background = '#3174a7'
    }

}
