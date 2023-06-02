function fechamed() {
    var Nome = document.getElementById("Nome").value
    var Idade = document.getElementById("Idade").value

    debugger
    if (Idade >=18  && Idade <= 70) {
        document.getElementById("IDADE").innerHTML= `<strong class="verde"> ${Nome}, você é obrigado a votar </strong>`
    } else  if (Idade >=16 && Idade <18 || Idade > 70){
        document.getElementById("IDADE").innerHTML = `<strong class="azul"> ${Nome}, você pode votar, mas NÃO  é obrigada a votar </strong>`
    } else{   
        document.getElementById("IDADE").innerHTML = `<strong class="vermelho"> ${Nome}, você NÃO pode votar</strong>`
    }
}