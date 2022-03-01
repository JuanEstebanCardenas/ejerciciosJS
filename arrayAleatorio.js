


const totalTiradas = 0;

const lista = []
const listaCount = {};

//hacer un array aleatorio
let listaDado1 = Array.from({length: 36000}, () => Math.floor(Math.random() * (7 - 1) + 1));
listaDado1.forEach(function(dado1){
    return dado1;
});


//saber el numero veces que esta cada valor en el array

listaDado1.map(
  function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
);
//saber la moda
const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);



    

        
        
    

    



