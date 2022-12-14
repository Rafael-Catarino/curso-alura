function dorme(milissegundos){
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}

//async function incrementaNumero(numero){
  //console.log(numero);
  //await dorme(2000);
  //return incrementaNumero(numero + 1);
//}

// implementando um caso base para que a função saia da recursão infinita.

async function incrementaNumero(numero){
  console.log(numero);
  await dorme(2000);

  if (numero === 10) {
    return 'finalizou';
  }
  return incrementaNumero(numero + 1);
}

incrementaNumero(1);