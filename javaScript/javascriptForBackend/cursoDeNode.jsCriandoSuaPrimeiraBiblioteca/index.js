import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code,'não há arquivos no dietório'));
}

//função assincrona utilizando o async/await.
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log (chalk.yellow('operação concluída'));
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

pegaArquivo('./arquivos/texto.md');