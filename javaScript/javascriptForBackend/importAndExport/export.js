const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const divisao = (a, b) => a / b;
const multiplicacao = (a, b) => a * b;

/* Esta formar de exportar arquivos no node.JS
foi subistituida no ES6 pelo export {soma, subtracao, ...} */
//module.exports = { soma, subtracao, divisao, multiplicacao };

// Este é o padrão ES6 de exportação de modulos em JS.
export { soma, subtracao, divisao, multiplicacao };


// OBS: Não pode se esquecer de colocar no aquivo package.json o atributo "type": "module".