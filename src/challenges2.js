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
function teste(sum, dif, outra) {
  if (sum > outra && dif < outra) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let sum1 = lineA + lineB;
  let sum2 = lineB + lineC;
  let sum3 = lineA + lineC;
  let dif1 = Math.abs(lineA - lineB);
  let dif2 = Math.abs(lineB - lineC);
  let dif3 = Math.abs(lineA - lineC);
  if (teste(sum1, dif1, lineC) && teste(sum2, dif2, lineA) && teste(sum3, dif3, lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function justNumbers(string) {
  let reg = /\d/g;
  let num = string.match(reg);
  let numInt = [];
  for (let i = 0; i < num.length; i += 1) {
    numInt[i] = (parseInt(num[i], 10));
  }
  return numInt;
}

function hydrate(bebidas) {
  let numeros = justNumbers(bebidas);
  let soma = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    soma += numeros[i];
  }
  if (soma === 1) {
    return (`${soma} copo de água`);
  }
  return (`${soma} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
