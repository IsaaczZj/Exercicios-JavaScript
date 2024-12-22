/*Uma professora tem que entregar as notas dos alunos que estão estruturadas como o objeto de exemplo, e essa entrega tem que ser feita de algumas maneiras diferentes:

- Pra diretoria ela deve entregar o nome do aluno e um objeto com as médias dele em cada uma das matérias
- Pro aluno ela deve entregar um objeto com todas as matérias e se o aluno foi aprovado, reprovado ou está de recuperação em cada matéria. (Média maior ou igual a 7 aprovado, média menor que 5.5 reprovado, média entre 5.6 e 6.9 em recuperação)
- Pros pais do aluno ela deve dizer apenas se o aluno foi aprovado, reprovado ou se está de recuperação. Se o aluno for aprovado em todas as matérias, ele está aprovado, se ficou de recuperação em uma matéria e está aprovado nas outras, está de recuperação caso contrário, está reprovado.

*/

const joaozinho = {
	nome: "Joaozinho",
	materias: [
		{
			nome: "Português",
			notas: [7.4, 5.6, 10, 9],
		},
		{
			nome: "Matemática",
			notas: [4.4, 5.0, 8.2, 7.0],
		},
        {
			nome: "Ciências",
			notas: [8.2, 7.6, 8.0, 6.3],
		},
        {
			nome: "Estudos Sociais",
			notas: [9.2, 7.6, 8.5, 7.0],
		},
	],
};

function entregaPraDiretoria(aluno){

    const alunoComMedia = {
        nome : aluno.nome,
        materias: [] 
    }

    for (let materia of aluno.materias){
        let acumulador = 0
        for (nota of materia.notas){
            acumulador += nota
        }
        let mediaAtual = acumulador/(materia.notas.length)
        alunoComMedia.materias.push({nome:materia.nome, media: mediaAtual})
    }

    return alunoComMedia
}


function entregaProAluno(aluno){
    const alunoComMedia = entregaPraDiretoria(aluno)
    const alunoComConceito = {
        nome : alunoComMedia.nome,
        materias: [] 
    }
       for (let materia of alunoComMedia.materias){
            if(materia.media >= 7.0){
                alunoComConceito.materias.push({nome:materia.nome, conceito:"APROVADO"})
            }
            else if(materia.media <= 5.5){
                alunoComConceito.materias.push({nome:materia.nome, conceito:"REPROVADO"})
            }
            else{
                alunoComConceito.materias.push({nome:materia.nome, conceito:"EM RECUPERAÇÃO"})
            }
       }

       return alunoComConceito
}

function entregaProsPais(aluno){
    let alunoComConceitos = entregaProAluno(aluno)
    const alunoComConceitoFinal = {
        nome:alunoComConceitos.nome
    }

    const conceitos = []
    for (materia of alunoComConceitos.materias){
        conceitos.push(materia.conceito)
    }
    if(conceitos.includes("REPROVADO")){
        alunoComConceitoFinal.resultado = "REPROVADO"
    } else if(!conceitos.includes("REPROVADO") && !conceitos.includes("EM RECUPERAÇÃO")){
        alunoComConceitoFinal.resultado = "APROVADO"
    } else if(conceitos.includes("EM RECUPERAÇÃO")){
        let index1 = conceitos.indexOf("EM RECUPERAÇÃO")
        let index2 = conceitos.lastIndexOf("EM RECUPERAÇÃO")
        index1===index2 ?alunoComConceitoFinal.resultado = "EM RECUPERAÇÃO" : alunoComConceitoFinal.resultado = "REPROVADO"

    }

    return alunoComConceitoFinal
}

console.log(entregaPraDiretoria(joaozinho))
console.log(entregaProAluno(joaozinho))
console.log(entregaProsPais(joaozinho))