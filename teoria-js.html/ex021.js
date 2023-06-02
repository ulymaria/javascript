function Botao(){
    var filmes = []
    var nomeFilme = document.getElementById("nomeFilme"). value
    filmes.push(nomeFilme)
    for (var i =0; i < filmes.length ;i++){
        document.getElementById('resultado').innerHTML +=
        `${filmes[i]} <br>`
    }
}