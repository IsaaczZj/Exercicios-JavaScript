/* Crie uma função que recebe um objeto como parâmetro e retorna um segundo objeto com as chaves e valores do primeiro objeto invertidas*/
function trocaChaveEValor(objeto){
    const pares = Object.entries(objeto)
    const objetoInvertido = {}
    for (par of pares){
        console.log(par)
        objetoInvertido[par[1]] = par[0]
    }
    return objetoInvertido
}

const objeto = {nome:"Maria", idade:"45", id:"8745"}

const objetoInvertido = trocaChaveEValor(objeto)

console.log(objeto)
console.log(objetoInvertido)