function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#98c1df'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f5c170'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#493858'
    }
}
