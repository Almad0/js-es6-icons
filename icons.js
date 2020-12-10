$(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family

  class icon {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  }

  const iconsArray = [
    new icon("cat", "fas", "fa-cat", "animals"),
    new icon("crow", "fas", "fa-crow", "animals"),
    new icon("dog", "fas", "fa-dog", "animals"),
    new icon("dove", "fas", "fa-dove", "animals"),
    new icon("dragon", "fas", "fa-dragon", "animals"),
    new icon("horse", "fas", "fa-horse", "animals"),
    new icon("hippo", "fas", "fa-hippo", "animals"),
    new icon("fish", "fas", "fa-fish", "animals"),
    new icon("carrot", "fas", "fa-carrot", "vegetables"),
    new icon("lemon", "fas", "fa-lemon", "vegetables"),
    new icon("apple-alt", "fas", "fa-apple-alt", "vegetables"),
    new icon("chess-king", "fas", "fa-chess-king", "chess-pieces"),
    new icon("chess-queen", "fas", "fa-chess-queen", "chess-pieces"),
    new icon("chess-knight", "fas", "fa-chess-knight", "chess-pieces"),
    new icon("chess-bishop", "fas", "fa-chess-bishop", "chess-pieces"),
    new icon("chess-rook", "fas", "fa-chess-rook", "chess-pieces")
  ]

  console.log(iconsArray);
  // Semezioniamo il container icons

  let container = $(".icons");

  let print = iconsArray.forEach((icon) => {
    container.append(`
      <i class="${icon.prefix} ${icon.type}"></i>
    `);
  });


  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

});



















/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
