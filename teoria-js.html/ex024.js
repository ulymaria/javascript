var listaFilmes = []

//Buscando as informações dolocalStorage gravadas no navegador
//Utilizo o metodo getItem com o nome exatamente que utilizamos no steItem
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes == []
}
exibirFilmes()

//Exibindo no console a lista de filmes que carregou no vetor
console.log(listaFilmes)

function cadastrar() {
    var filmes = document.getElementById("nome").value
    var foto = document.getElementById("imagem").value

    var cadastro = validarCadastro(filmes, foto)
    if (cadastro == false) {
        alert("Verifique os dados antes de cadastrar")
        return
    }

    var filme = {
        nome: filmes,
        link: foto
    }

    listaFilmes.push(filme)
    //Utilizando o localStorage que irá gravar o nosso vetor  de filmes
    // no metodo setItem,preciso passar como  parametro o nome do espaço 
    //que o navegador irá reservar e passo também o vetor de filmes
    //convertindo em formato JSON

    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))

    exibirFilmes()

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}


function validarCadastro(nomeFilme, imagemFilme) {
    if (nomeFilme != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
}


function botaoIndicado() {
    var nrSorteado = parseInt(Math.random() * filmes.length)
    document.getElementById('resultado').innerHTML =
        `<div>
            <img src='${listaFilmes[nrSorteado].Link}' class='img'> 
            <p>${listaFilmes[nrSorteado].nome}<p>
        </div>`
}



function exibirFilmes() {
    document.getElementById('resultado').innerHTML = ''

    for (var i in listaFilmes) {
        document.getElementById('resultado').innerHTML +=
            `<div>
                    <img src='${listaFilmes[i].link}' class='img'> 
                    <p>${listaFilmes[i].nome}<p>
                <div>`
    }
}
