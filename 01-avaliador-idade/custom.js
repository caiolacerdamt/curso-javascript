function processar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txt')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var sexo = document.getElementsByName('sxm')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'criança10anosM.jpg')
                res.innerHTML = `Criança, do sexo: ${genero}, com ${idade} anos.`
            } else if (idade < 24) {
                img.setAttribute('src', 'jovemM.jpg')
                res.innerHTML = `Jovem, do sexo: ${genero}, com ${idade} anos.`
            } else if (idade < 59) {
                img.setAttribute('src', 'adultoM.jpg')
                res.innerHTML = `Adulto, do sexo: ${genero}, com ${idade} anos.`
            } else if (idade < 99) {
                img.setAttribute('src', 'idosoM.jpg')
                res.innerHTML = `Idoso, do sexo: ${genero}, com ${idade} anos.`
            } else {
                img.setAttribute('src', 'mortin.jpg')
                res.innerHTML = `${idade} anos??? Você já foi de base!`
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança10anosF.jpg')
                res.innerHTML = `Criança, gênero: ${genero} com ${idade} anos.`
            } else if (idade < 24) {
                img.setAttribute('src', 'jovemF.jpg')
                res.innerHTML = `Jovem, gênero: ${genero}, com ${idade} anos.`
            } else if (idade < 59) {
                img.setAttribute('src', 'adultoF.jpg')
                res.innerHTML = `Adulto, gênero: ${genero}, com ${idade} anos.`
            } else if (idade < 99) {
                img.setAttribute('src', 'idosoF.jpg')
                res.innerHTML = `Idoso, gênero: ${genero}, com ${idade} anos.`
            } else {
                img.setAttribute('src', 'mortin.jpg')
                res.innerHTML = `${idade} anos??? Você já foi de base!`
            }
        }
        res.appendChild(img)
    }
}