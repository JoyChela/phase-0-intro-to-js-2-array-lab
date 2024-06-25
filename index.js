
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
