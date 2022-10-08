// Formas de importar modulos 

/* Esta formar de importar arquivos no node 
foi subistituida no ES6 pelo import ... from '...' */

//const {soma, subtracao, divisao, multiplicacao} = require('./export.js'); 

// Este é o padrão ES6 de importação de modulos em JS.
import { soma, subtracao, divisao, multiplicacao } from "./export.js";

console.log(soma(6, 3));
console.log(subtracao(6, 3));
console.log(divisao(6, 3));
console.log(multiplicacao(6, 3));

// OBS: Não pode se esquecer de colocar no aquivo package.json o atributo "type": "module".