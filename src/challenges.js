// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let divide = string.split(' ');
  return divide;
}

// Desafio 4
function concatName(arrayStr) {
  return `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  let maior = Math.max(...arrayNum);
  let repete = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] === maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mesage = '';
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    mesage = 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    mesage = 'cat2';
  } else {
    mesage = 'cat1';
  }
  return mesage;
}

// Desafio 8
function fizzMaisBuzz(ret) {
  for (let i = 0; i < ret.length; i += 1) {
    if ((ret[i] % 3) === 0 && (ret[i] % 5) === 0 && Number.isInteger(ret[i])) {
      ret[i] = 'fizzBuzz';
    }
  }
  return ret;
}

function buzz(ret) {
  for (let i = 0; i < ret.length; i += 1) {
    if ((ret[i] % 5) === 0 && (ret[i] % 3) !== 0 && Number.isInteger(ret[i])) {
      ret[i] = 'buzz';
    }
  }
  return ret;
}

function bug(ret) {
  for (let i = 0; i < ret.length; i += 1) {
    if ((ret[i] % 3) !== 0 && (ret[i] % 5) !== 0 && Number.isInteger(ret[i])) {
      ret[i] = 'bug!';
    }
  }
  return ret;
}

function fizz(ret) {
  for (let i = 0; i < ret.length; i += 1) {
    if ((ret[i] % 3) === 0 && (ret[i] % 5) !== 0 && Number.isInteger(ret[i])) {
      ret[i] = 'fizz';
    }
  }
  return ret;
}

function fizzBuzz(numArray) {
  let divAll = fizzMaisBuzz(numArray);
  let div3 = fizz(divAll);
  let div5 = buzz(div3);
  let bu = bug(div5);
  return bu;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
