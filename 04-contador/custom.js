function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
        //window.alert('ERRO')
        
    } else {
       res.innerHTML = ''
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (p <= 0) {
        alert('Passo inválido')
       }
        if(i < f) {
            for (var c = i; c <= f; c += p) {
            res.innerHTML  += `${c} \u{1F449}	`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML +=  `${c} \u{1F449}	`
            }
       }
       res.innerHTML += `\u{1F3C1}`
    }
    
}
