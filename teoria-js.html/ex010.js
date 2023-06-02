function fechamed() {
    var D1 = document.getElementById("Nome").value
    var D2 = document.getElementById("Senha").value

    if (D1 == "adm" && D2 == 123) {
        document.getElementById("LOGIN").innerHTML += `Bem Vindo! Voce está logado<BR>`
    } else {
        document.getElementById("LOGIN").innerHTML += ` Usuário ou senha inválido<BR>`
    }
}
