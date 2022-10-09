//------------------------Em objeto----------------------

const pessoa = {
  nome: 'Rafael',
  idade: '25'
}

const pessoaComTelefone = {
  ...pessoa,
  telefone: 123456789
}

console.log(pessoa);
console.log(pessoaComTelefone);

//-------------------------------------------------------

const nome1 = pessoa.nome;

console.log(nome1);

const { nome } = pessoa

console.log(nome);

//--------------------------------------------------------

function imprimirDados(dados) {
  console.log(dados);
}

//imprimirDados(pessoa);

function imprimirDados(dados) {
  const { nome, idade } = dados;
  console.log(nome, idade);
}

imprimirDados(pessoa)

function imprimirDadosComTelefone({ nome, idade, telefone }) {
  console.log(nome, idade, telefone);
}

//imprimirDadosComTelefone(pessoaComTelefone);

