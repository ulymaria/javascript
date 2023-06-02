//Criado um arry vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 8, 5, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log ( nomes[1]) 
console.log (novoVetor[1])

//Verificando o atributo detamanho do vetor 
console.log (nomes.lenght)

// indice 0    1    2    3    4
var frutas = ['maçâ', 'Laranja', 'Pera', 'Morango', 'Uva']
//faço um for para percorrer todo o tamanho do vetor
for (var i = 0; 1<= frutas.length; i++) {
    //Coloco o i no indice da frutas para pegar o 
    //Valor de caxda indice de vetor 
console.log ( frutas[i])
}

//Adicionando novo valor no FINAL do vetor
frutas.push('Abacaxi')
for (var i = 0; i < frutas.length; i++) {
    console.log ( frutas [i] )
}

//O método forEach - signifca para cada item do  vetor
//dentro do paranteses colocamos a variábel que ira´
// receber o conteúdo de cada linha do  vetor
//e com o => {} informamos o bloco que irá executar para cada linha

frutas.forEach( item => {
 console.log('Item pelo forEach', item)
}  )
//Quando precisamos do ídice tambem o colocamos entre assim como no exemplo abaixo

frutas.forEach( (item, indice) => {
    console.log('Item pelo forEach', indice , item)
   }  )
   

var novaListaFrutas = []
    novaListaFrutas.push('Limão')
    novaListaFrutas.push('Melancia') 
    console.log(novaListaFrutas)

    //modificando o valor de um indice do vetor
    novaListaFrutas[0] = 'Melão'
    console.log(novasListaFrutas)


 // Para lermos todos os elementos de um  vetor,podemos também utilizar -- for in -- como o exemplo abaixo
 for (var pos in frutas){
    console.log (frutas[pos] )
 } 