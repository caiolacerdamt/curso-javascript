function gerar() {
    var num = document.querySelector('input#num')
    var res = document.querySelector('select#txt1')
    var n = Number(num.value)
    var r = Number(num.value)

    if(n == 0) {
        alert('ERRO')
    } else {
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++   
        } 
        
        }
     }
    
