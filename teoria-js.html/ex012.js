var nrSorteando = parseInt(Math.random() *100) +1


var tentativas = 0

function fechamed(){
    var chute = prompt("Qual é o número sorteado ?")

    tentativas++

    if(nrSorteando == chute){

     document.getElementById("resultados").innerHTML +=`<br>Parábens você acertou no Nº ${nrSorteando}  EM ${tentativas} tentativas` 
    }else if (nrSorteando < chute){
     document.getElementById("resultados").innerHTML +=`<br>Você chutou ${chute} Pensei em um número MENOR`
    }else if (nrSorteando < chute){
    document.getElementById("resultados").innerHTML +=`<br>Você chutou ${chute} Pensei em um número MAIOR`
    }
}

function BOTAOLIMPAR(){
    document.getElementById("resultados").innerHTML = ""
    var nrSorteando = parseInt(Math.random()* 100)
    alert(nrSorteando)
    tentativas=0
}