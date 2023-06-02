function Botao() {
    debugger
    var filme=['Velozes e Furiosos', 'Vingadores',  'Filha do Presidente', 'Barbie', 'Harry Potter', 'Star Wars' ]

    for (var i = 0; i < filme.length; i++) {
        document.getElementById("resultado").innerHTML +=`Posição do vetor ${i} - Filme ${filme [i]} <br>`
    }
}