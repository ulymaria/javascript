
    /*
    comentários em 
    multiplas linhas
*/
    //comentário em uma única linha

    //o alert é utilizado para exebir uma mensagem em popup
    //alert("Olá mundo!!!")

    //no console conseguimos visualizar informaçoes sem exeb ir na página

    console.log("Olá mundo, estou utilizando o console")
    console.error("Esta é uma mensagem de erro")
    console.warn("Esta é uma mensagem de alerta")
    console.info("Esta é uma mensagem de informação")
    //criando um função chamada quando clicamos no botão
    //o  nome da função tem que ser igual ao do evento onclick

    function botao1() {
        alert("voce clicou no botão")

    }

    function botaocorfundo() {
        //Alterando no documento html no elemento body o estilo fundo 
        document.body.style.backgroundColor = "pink"
    }

    function botaonome() {
        // No prompt abre opção para digitar algo
        var nome2 = prompt("Qual é o seu nome ?")
        confirm("Olá " + nome2 + ", entendeu variável?")
        confirm(`Olá ${nome2}, entendeu variável`)
    }

    //declarando variáveis
    //string-conjunto de caracteres-declarar com "" ou ''
    var nome = "Julia"
    var sobrenome = "Almeida"
    //number - todo número em JS é do tipo number - 
    // Declarar sem ""
    var idade = 16
    //Boolean - Somente recebe true ou false 
    var aprovado = true

    // Utilizamos o typeof para saber o tipo do dado 
    console.log(typeof nome)
    //Concatenando strings com o +
    console.log(nome + ' ' + sobrenome)

    var n1 = 10
    var n2 = 15
    //Irá somar as 2 variaveis number (25)
    console(n1 + n2)
    var n3 = "10"
    var n4 = "15"
    //Ira concatenar "juntas" as 2 variaveis ("1015")
    console.log(n3 + n4)
    //Se utilizarmos o + com string ele concatena se 
    //utilizar com number soma

    //Uma variavel pode receber o valor de outra variável
    n1 = n2
    console.log("n1 = " + n1 + ' e o n2 = ' + n2)

    //Para atribuir um valolr decimal utilizar . não ,
    var salario = 1290.85
    //Posso também somar a variavel com ela mesmo 
    salario = salario + 200
    console.log(salario)

    //Antigamente para juntar texto e variaveis faziamos assim
    console.log('Olá, ' + nome + ' voce tem ' + idade + 'anos')
    //Hoje utilizamos o TemplateString forma mais simples
    console.log(`Olá $ {nome} voce tem ${idade} anos`)

    function botaosomar() {
        //Recebeber valor1 de um prompt
        var nr1 = prompt("Digite um número:")
        //Receber valor2 de um prompt
        var nr2 = prompt("Digite outro número:")

        //Convertendo a variavel1 e 2 de string para number
        nr1 = parseFloat(nr1)//Podemos utilizar o parseInt()
        //Convertendo a variavel nr1 de string para number
        nr2 = Number(nr2)//Podemos utilizar Number()

        console.log(typeof nr1)//verificando o tipo do dado
        //variável soma Receber valor1 + valor2 
        var soma = nr1 + nr2
        //Exibir em um alert o valor de soma 
        //alert(soma)

        /*Alterando um elemen to buscando ele pelo ID e alterando o conteúdo do HTML,podemos ler da seguinte forma 
        No documento pegar o elemento pelo ID resultadoSoma e Alterar o conteúdo do HTML pela String */
        document.getElementById("res-soma").innerHTML +=  `<br> A soma de ${nr1} + ${nr2} = ${soma}`
    }
    function botaocidade(){
        var cidade = document.getElementById("cidade").value
        document.getElementById("resultadocidade").innerHTML += `<BR> O nome da cidade ${cidade}`
    }
   //Operadores Aritmeticos e Ordem de precedencia
   var opSoma = 5 + 2 // Operador de soma +
   console.log(opSoma) // 7
   var opSubtracao = 5 - 2  // Operador de subtração -
   console.log(opSubtracao) // 3 
   var opMultiplicacao = 5 * 2 // Operador de multiplicacao *
   console.log(opMultiplicacao) // 10
   var opDivisao = 5 / 2 // Operador de divisão /
   console.log(opDivisao) // 2.5
   var opExponenciacao = 5 ** 2 // Operador de exponenciação **
   console.log(opExponenciacao) // 25
   var opResto = 5 % 2 // Operador de restode divisão % 
   console.log(opResto) // 1 
   // ordem de precedencia
   var ordemPrecencia1 = 5 + 3 / 2 
   console.log(ordemPrecencia1) // 6.5
   var ordemPrecedencia2 = (5 + 3) / 2
   console.log(ordemPrecedencia2) // 4
   /*  1º ()
       2º **
       3º * /
       4º %
       5º + -
   */
  //Constantes - o valor não pode ser alterado depois de ser atribuido
  const pi = 3.14
  // pi = 3 - Se o valor for alterado dará erro no javascript

  //Auto atribuição 
  var n = 3 
  n = n + 3 // a variável recebe ela mesmo + 3 
  n += 3 // quer dizer o mesmo que a espressao acima 

  n++ // quando precisamos subtrair -1 ao valor da variável 

  //Operadores Relacionais 
  var n1 = 5 
  var n2 = 6
  console.log (n1 > n2) // > Maior que 
  console.log (n1 < n2) // < menor que 
  console.log(n1 >= n2) // >= Maior ou igual que 
  console.log(n1 <= n2) // >= Menor ou igual que 
  console.log(n1 == n2) // == igual
  console.log(n1 != n2) // != Não igual - diferente 

  //Estrutura condicionais 
  if (n1 > n2){    //Verifivando a condição entre parenteses
// Se a condição for verdadeira "entra" nesse bloco
console.log ("0 n1 é maior que n2")
} else{
    //Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
}

//Exemplo de condição
var minhaIdade = 16
if(minhaIdade >= 16){
    console.log ("Voce pode votar")
} else {
    console.log('Voce NÃO pode votar')
}
 //Operadores Lógicos 
 // && Representa o E 
 var login = "adm"
 var senha = "123"
 //Para entrar na condução TRUE as 2 condições precisar ser verdadeira
 if (login == "adm" && enha == "123"){
    //Executa esse bloco quando as condiçoes são TRUE
 } else {
 // Executa esse bloco se pelo menos 1 condiçoes for FALSE
 }
 var media = 6 
 //Operador OU - > || (pipe)
 // Para entrar na condição  TRUE pelo menos 1 condição precisa ser verdadeira 


    if (media == 6 || media == 5) {
        //Executa esse bloco quando 1 condição é TRUE  pelo menos 
 } else{
    /*Aqui entra se  TODAS  as condiçoes forem falsas*/
 }
 // Estruturas condicionais encadeadas 
 if (media >= 7){
    console.log("APROVADO")
 }else if (media >= 5){/*Podemos fazer um novo IF  junto com o ELSE*/
    console.log("RECUPERAÇÃO")
}else{
    AbortController.log("REPROVADO")
}
if(media == 10){
    console.log("Otimo aluno") 
}else if (media == 9 || media == 8) {
    console.log("Bom aluno")
} else if (media == 7 || media == 6) {
    console.log("aluno mediano")
} else if (media == 5 || media == 4) {
    console.log("aluno abaixo da média")
} else {
    console.log("Aluno ruim")
}

//debugger
//Podemos utilizar o debugger para analisar o codigo linha a linha
//return
//Quando queremos parar de executar uma função do JS utilizamos o return

//Para sortearmos um bvalor aleatório utilizamos o math.random()
// o valor math.random retorna um número decimal e precisamos multiplicar pelo nr 
//maximo que desejamos
// o parseInt utilizamos para obter apenas a parte interia do número
var nrSorteado = parseInt(Math.random() * 100)
 console.log(nrSorteado)

 //Switch Case
 //É como se fosse vários if else de forma mais simples
 var diaSemana = 3

 switch (diaSemana) {
  case 1:
        console.log("Hoje é:Domingo")
    Break //para o switch case e não verifica as outras opções
    case 2:
        console.log("Hoje é:Segunda")
        break
    case 3:
        console.log("Hoje é:Terça") 
        break
    case 4:
        console.log("Hoje é:Quarta")
        break
    case 5:
        console.log("Hoje é:Quinta")
         break
    case 6:
        console.log("Hoje é:Sexta")
        break
    case 7:
        console.log("Hoje é:Sabado")
        break
    default:
        console.log("Dia invalido")

 }
 //For - Laço de repetição
//1ª Expressão var i = 0
//(Aqui eu inicio o controle de vezes)
//2ªExpressão i <=10
//(Aqui nós verificamos a condição  para se manter no loop)
//3º expressão i ++
//(Aqui acrensentamos na variável + 1 vez)

 for(var i = 1; i <= 10;i++) {
 }


 //Verificando se número é par com while
 var contador = 1 // iniciando o contador de vezes que irá executar
 while (contador <= 10)//Enquanto a }


    var cont = 1 
    while (cont <=5){
        console.log (cont)
        cont++
    }

    for (var cont = 1; cont <=5; cont++){
        console.log(cont)
    }