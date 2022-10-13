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
function encode(frase) {
  let a = frase.replace(/a/gi, 1);
  let e = a.replace(/e/gi, 2);
  let i = e.replace(/i/gi, 3);
  let o = i.replace(/o/gi, 4);
  let u = o.replace(/u/gi, 5);
  return u;
}
function decode(frase) {
  let a1 = frase.replace(/1/gi, 'a');
  let e2 = a1.replace(/2/gi, 'e');
  let i3 = e2.replace(/3/gi, 'i');
  let o4 = i3.replace(/4/gi, 'o');
  let u5 = o4.replace(/5/gi, 'u');
  return u5;
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
