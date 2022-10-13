// Desafio 10
function techList(tecnologias, nome) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let listaTechOrd = tecnologias.sort();
  let listaTech = [];
  for (let i = 0; i < tecnologias.length; i += 1) {
    let objeto = { tech: listaTechOrd[i], name: nome };
    listaTech.push(objeto);
  }
  return listaTech;
}

// Desafio 11
function zeroOuNove(numeros) {
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] < 0 || numeros[i] > 9) {
      return 'invalido';
    }
  }
  return true;
}
function verificaRep(ant, atual, rep) {
  if (ant === atual) {
    rep += 1;
  }
  return rep;
}

function repetidos(numeros) {
  for (let i = 0; i < numeros.length; i += 1) {
    let quantRep = 0;
    for (let l = 1; l < numeros.length; l += 1) {
      quantRep = verificaRep(numeros[i], numeros[l], quantRep);
    }
    if (quantRep >= 3) {
      return 'repete';
    }
  }
  return true;
}

function generatePhoneNumber(phoneNum) {
  let resultado;
  if (phoneNum.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else if (zeroOuNove(phoneNum) === 'invalido' || repetidos(phoneNum) === 'repete') {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let ddd = `(${phoneNum[0]}${phoneNum[1]})`;
    let parte1 = `${phoneNum[2]}${phoneNum[3]}${phoneNum[4]}${phoneNum[5]}${phoneNum[6]}`;
    let parte2 = `${phoneNum[7]}${phoneNum[8]}${phoneNum[9]}${phoneNum[10]}`;
    resultado = `${ddd} ${parte1}-${parte2}`;
  }
  return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
