

function Limpar() {
    listausuario = []
    localStorage.setItem('bdusuarios',JSON.stringify(listausuario))
    exibirusuarios()
}

var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdListaUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
exibirUsuarios()

function validarCadastro(nomeUsuario, usuario, senha, confSenha){
    if (nomeUsuario == '' || usuario == '' || senha == '' || confSenha == '') {
        alert ('Verifique os dados cadastrados. Não pode ter campos vazio.')
        return false
    }

    if (senha != confSenha) {
        alert('As suas senhas não conferem.')
        return false
    }

    return true
}

function botaoCadastro() {
    var nomeUsuario = document.getElementById("nome").value
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    var confSenha = document.getElementById("senha2").value
    
    var possoCadastrar = validarCadastro(nomeUsuario, usuario, senha, confSenha)
    if (possoCadastrar == false) {
        return false
    }
    
    var objUsuario = {
        nome: nomeUsuario,
        login: usuario,
        senha: senha 
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem( 'bdListaUsuarios', JSON.stringify(listaUsuarios)) 

    exibirUsuarios()

    document.getElementById("nome").value = ''
    document.getElementById("usuario").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("senha2").value = ''
    document.getElementById("nome").focus()

    alert ('Usuário cadastro com sucesso')
    window.location.href = 'ex026.html'

}

function exibirUsuarios(){
    document.getElementById('resultado').innerHTML = ''

    listaUsuarios.forEach( (item,indice) => {
        `<div>
        ${item.nome} - <b>Login</b> ${item.login}
        <img src='excluir.svg' class='excluir onclick='excluirUsuario(${indice})'>
       </div> `
    })
}
    
function excluirUsuario(indice){
    listaUsuarios.splice (indice, 1)
    localStorage.setInem('bdListaUsuarios' , JSON.stringify(ListaUsuarios))
    exebirUsuarios()
}
   


        

function botaoLogin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value


     var encontrou = false
    listaUsuarios.forEach ( item => {
     if(usuario == item.login && senha == item.senha) {
        alert(`Bem vindo ao sistema, ${item.nome}`)
        encontrou = true
     }
    })

    if (encontrou == false) {
        alert(`Usuario não encontrado`)
    }

    for (var andar in listaUsuarios){
        if (usuario == listaUsuarios[andar].login && senha == listaUsuarios[andar].senha) {
            alert (`Bem vindo ao sistema, ${listaUsuarios[andar].nome}`)
            return true
        }
    }

    alert('Usuário não encontrado')

}

// for (var andar in listaUsuarios) {
    document.getElementById('resultado').innerHTML +=
    `<div>
        <p>${listaUsuarios[andar].nome} - ${listaUsuarios[andar].login}</p>
    </div>`