/*Escreva uma função que recebe um objeto como primeiro parâmetro e como segundo parâmetro o nome de uma propriedade no formato string.
Caso a propriedade não exista no objeto retorne o objeto original. Caso a propriedade exista, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro. 
*/


function removeAtributo(objeto, atributo) {
    let copia = { ...objeto }
    if (copia[atributo]) {
        delete copia[atributo]
        return copia
    }
   return objeto
}

// function removeAtributo(objeto, atributo){
//     const copiaDoObjeto = {... objeto}
//     if(copiaDoObjeto[atributo]){
//         delete copiaDoObjeto[atributo]
//     }
//     return copiaDoObjeto
// }


const pessoa = { nome: "Ana", idade: 20 }

const pessoaAtualizada = removeAtributo(pessoa, "idade")
console.log(pessoaAtualizada)