const { edFolha, edGalho } = require('./arrays.js');

function mergeSort(lista1, lista2) {
  let listFinal =[];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  //let atual = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    let produtolista1 = lista1[posicaoAtualLista1];
    let produtolista2 = lista2[posicaoAtualLista2];

    if(produtolista1.price < produtolista2.price) {
      //listFinal[atual] = produtolista1;
      listFinal.push(produtolista1);
      posicaoAtualLista1 +=1;
    } else {
      //listFinal[atual] = produtolista2;
      listFinal.push(produtolista2);
      posicaoAtualLista2 +=1;
    }
    //atual += 1;
  }

  while (posicaoAtualLista1 < lista1.length) {
    //listFinal[atual] = lista1[posicaoAtualLista1];
    listFinal.push(lista1[posicaoAtualLista1]);
    posicaoAtualLista1 +=1;
    //atual += 1;
  }

  while (posicaoAtualLista2 < lista2.length) {
    //listFinal[atual] = lista2[posicaoAtualLista2];
    listFinal.push(lista2[posicaoAtualLista2]);
    posicaoAtualLista2 +=1;
    //atual += 1;
  }

  return listFinal;
} 

console.log(mergeSort(edFolha, edGalho));