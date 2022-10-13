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
function generatePhoneNumber() {
  // seu código aqui
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
