const alunos = [
  { nome: "Jõao", nota: 7 },
  { nome: "Maria", nota: 8 },
  { nome: "Felipe", nota: 5 },
  { nome: "Fernanda", nota: 3 },
  { nome: "Claudio", nota: 6 },
];

const aprovados = () => {
  const alunosAprovados = alunos.filter((aluno) => {
    if (aluno.nota >= 6) {
      return aluno;
    }
  });
  return alunosAprovados;
};

console.log(aprovados());
