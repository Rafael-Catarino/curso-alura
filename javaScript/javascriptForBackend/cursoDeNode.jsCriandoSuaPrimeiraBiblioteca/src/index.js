import fs from 'fs';
import chalk from 'chalk';

function extraiLinks (texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(capitura => ({[capitura[1]]: capitura[2]}));
  return resultados.length !== 0 ? resultados : 'não há links no arquivo.';
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code,'não há arquivos no dietório'));
}

//função assincrona utilizando o async/await.
//async function pegaArquivo(caminhoDoArquivo) {
//arrow async com async.
const pegaArquivo = async (caminhoDoArquivo) => {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

//função assincrona utilizando o them.
/* function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.blue(texto)))
    .catch(erro => trataErro(erro)) //ou .catch(trataErro)
} */

//função sincrona.
/* function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  });
} */

export default pegaArquivo;