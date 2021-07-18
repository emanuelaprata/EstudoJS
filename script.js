function iniciar(){
    setInterval(carregar, 1000)
}

function carregar() {
    var msg = document.getElementById('msg')
    var teste = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML= `Agora são <strong>${hora}:${addZero(minutos)}:${addZero(segundo)}</strong> horas.`
    if (hora >=0 && hora <12) {
        document.body.className = 'fotodia'
        teste.innerHTML = '<strong>Bom dia!</strong>'
    } else if (hora >=12 && hora <=18) {
        document.body.className = 'fototarde'
        teste.innerHTML = '<strong>Boa tarde!</strong>'
    } else {
        teste.innerHtml = '<strong>Boa noite!</strong>'
        document.body.className = 'fotonoite' //className troca tudo, classList você troca só a classe que você quer
        //document.body.classList.add("fotodia")
    }
}
function addZero(numero) {
    if (numero < 10) {
        return '0' + numero 
    } else {
      return numero
    }
}
