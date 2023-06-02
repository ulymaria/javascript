var ListaCarros = []

//Declarando um objeto e informando os atributos
//Todo objeto declarado com { }

var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}

//Para exebir o atributo  do objeto faço da seguinte forma
//Objeto.atributo
console.log(carro.ano +' - ' + carro.modelo)
console.log(carro.ano - carro.modelo)

ListaCarros.push(carro)

console.log(ListaCarros.lenght)

//Novo Objeto
var carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}

//Adicionando novo objeto carro ao vetor ListaCarros
ListaCarros.push(carro)
console.log (ListaCarros)
//Exebindo uma lista apenas com o modelo do carro 
for ( var pos in ListaCarros) {
    console.log (ListaCarros[pos])
      

}