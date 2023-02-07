function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO!]  Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade<10){
                //criança
                img.setAttribute('src','crianca_menino.png')
            } else if(idade<21){
                //jovem
                img.setAttribute('src','jovem_homem.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','homem_maduro.png')
            }else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade< 10){
                //criança
                img.setAttribute('src','crianca_menina.png')
            } else if(idade<21){
                //jovem
                img.setAttribute('src','jomem_mulher.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','mulher_madura.png')
            }else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos." 
        res.appendChild(img)
    }
}