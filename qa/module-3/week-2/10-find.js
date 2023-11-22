const alunos = [
    { id: 1, nome: 'Maria da Silva' },
    { id: 2, nome: 'João Fernando' },
    { id: 3, nome: 'Pedro dos Santos' },
    { id: 4, nome: 'Silvia Maria' }
  ]
  
  const aluno = alunos.find(aluno => aluno.id === 3)
  
  console.log(aluno.nome) // Pedro dos Santos