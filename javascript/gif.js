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
console.log(topic);
function createButtons() {
// $("#buttons-display").empty();

for (var i = 0; i < topic.length; i++) {
  console.log(topic[i]);
    // generate buttons for array
    var b = $("</button>");
    // adding class
    b.addClass("shows");

    b.attr("data-name", topic[i]);

    b.text(topic);
    // appending buttons to HTML
     b.append($("#buttons-display"));
     

 }      
};
