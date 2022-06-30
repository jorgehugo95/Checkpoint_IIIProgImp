//Passo 1
function criarAluno(nome, nFaltas, notas) {
    return {
        nome: nome,
        nFaltas: nFaltas,
        notas: notas,

        //Passo 2
        calcularMedia() {
            let media = 0;

            for (let i = 0; i < notas.length; i++) {
                media += this.notas[i]
            }
            return (media / this.notas.length).toFixed(2);
        },
        faltas() {
            this.nFaltas += 1;
        },
    };
}

const Aluno0 = new criarAluno('Oscar Alho', 5, [7, 8, 9, 7]);
const Aluno1 = new criarAluno('Paula Tejando', 2, [8, 5, 10, 9]);
const Aluno2 = new criarAluno('Jahlin Habbei', 3, [7, 5, 5, 6]);
const Aluno3 = new criarAluno('Deide Costa', 7, [10, 8, 9, 6]);
const Aluno4 = new criarAluno('Omar Lindju', 1, [10, 9, 8, 9]);


//Passo 3
let listaAlunos = [Aluno0, Aluno1, Aluno2, Aluno3, Aluno4];

let curso = {
    nomeCurso: 'Programação Imperativa',
    notadeAprovacao: 7,
    faltasMax: 5,
    alunos: listaAlunos,

    //Passo 4
    adicionarAluno(nome, nFaltas, notas) {
        let alunos = new criarAluno(nome, nFaltas, notas);
        this.alunos.push(alunos);
    },
    //Passo 5
    statusAluno(alunos){
        let media = alunos.calcularMedia();
        let status;

        if (alunos.nFaltas < this.faltasMax && media >= this.notadeAprovacao) {
            status = console.log(alunos.nome + " aprovado");
        }else if(alunos.nFaltas == this.faltasMax && media >= (this.notadeAprovacao * 1.1)){
            status = console.log(alunos.nome + " aprovado com ressalva");
        }else {
            status = console.log(alunos.nome + " reprovado");
        }
        return status;
    },
    //Passo 6
    listaResultados(){
        let resultadoFinal = [];
        for(let i = 0; i < listaAlunos.length; i++){
            resultadoFinal.push(this.statusAluno(listaAlunos[i]))
        }
        return resultadoFinal;
    },
}

//Teste
curso.adicionarAluno('Tolin Habbando',4,[8,7,7,10]);
curso.listaResultados();











