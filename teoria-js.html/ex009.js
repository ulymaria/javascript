function fechamed() {
    var T1 = document.getElementById("Nome").value
    var T2 = document.getElementById("Idade").value

    if (T2 >= 18) {
        document.getElementById("CNH").innerHTML += `Parabéns ${T1}, voce pode tirar sua CNH<BR>`
        document.getElementById("CNH").innerHTML += `<img class="foto" src="CNH"><BR>`
    } else {
        document.getElementById("CNH").innerHTML += `Infelizmente ${T1}, voce NÃO pode tirar sua CNH<BR>`
        document.getElementById("CNH").innerHTML += `<img class="foto" /Java<BR>`
    }
}
