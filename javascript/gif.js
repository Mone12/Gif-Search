var topic = [
  "Cowboy Bebop",
  "Naruto",
  "Death Note",
  "Fullmetal Alchemist",
  "Sailor Moon",
  "Dragonball Z",
  "Attach on Titans",
  "Bleach",
  "Pokemon",
  "One Piece",
  "Ghost in the Shell",
  "Yu-Gi-Oh!"
];

function createButtons() {
$("#buttons-display").empty();

for (var i = 0; i < topic.length; i++) {
    // generate buttons for array
    var b = $("<button>");
    // adding class
    b.addClass("shows");

    b.attr("data-name", topic[i]);

    b.text(topic[i]);
    // appending buttons to HTML
     $("#buttons-display").append(b);

 }      
}
