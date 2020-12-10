$(function () {

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
    new icon("apple", "fas", "fa-apple-alt", "vegetables"),
    new icon("king", "fas", "fa-chess-king", "chess-pieces"),
    new icon("queen", "fas", "fa-chess-queen", "chess-pieces"),
    new icon("knight", "fas", "fa-chess-knight", "chess-pieces"),
    new icon("bishop", "fas", "fa-chess-bishop", "chess-pieces"),
    new icon("rook", "fas", "fa-chess-rook", "chess-pieces")
  ]

  console.log(iconsArray);

  let container = $(".icons");
  const blue = "blue";
  const purple = "purple";
  const green = "green";

  iconsArray.forEach((icon) => {
      if (icon.family === "animals") {
        icon.color = blue;
      } else if (icon.family === "vegetables") {
        icon.color = green;
      } else {
        icon.color = purple;
      };
  });

  let print = iconsArray.forEach((icon) => {
    container.append(`
      <div>
      <i class="${icon.prefix} ${icon.type}" style="color:${icon.color}"></i>
      <div class="title">${icon.name}</div>
      </div>
    `);
  });

});
