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
  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise we will have repeat buttons)
  $("#display-buttons").empty();
  $("#instruct-text").hide();

  // Looping through the array of movies
  for (var i = 0; i < topic.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button type='button' class= 'btn btn-info'>");
    // Adding a class of movie to our button
    a.addClass("show");
    // Adding a data-attribute
    a.attr("data-name", topic[i]);
    // Providing the initial button text
    a.text(topic[i]);
    // Adding the button to the HTML
    $("#display-buttons").append(a);
  }

  $(".show").on("click", function() {
    event.preventDefault();
    console.log(this);
    var inputTopic = $(this).attr("data-name");
    console.log(inputTopic);
    // keep this info in the array
    // render the buttons
    $("#instruct-text").show();
    search(inputTopic);
  });
}


function search(mytopic) {
  // go to the giphy get the info show the pics
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=DQLvdEyc0zx5Q3i0pVokk1NUEsTjxgRc&q=" +
    mytopic +
    "&limit=25&offset=0&rating=G&lang=en";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var images = response.data;
    renderImages(images);
  });
}


function renderImages(images) {
  $("#images").empty();
  for (var index = 0; index < images.length; index++) {
    const element = images[index];
    // <img src'"" class="gif"></img>
    var a = $("<img>");
    a.attr("src", element.images.downsized_still.url);
    a.attr("alternative-src", element.images.downsized.url);
    a.addClass("show-images");
    $("#images").append(a);
  }
  $(".show-images").on("click", function() {
    event.preventDefault();
    console.log(this);
    var src = $(this).attr("src");
    var altImg = $(this).attr("alternative-src");
    $(this).attr("src", altImg);
    $(this).attr("alternative-src", src);
   
  });
}

$("#add-anime").on("click", function() {
  event.preventDefault();
  var inputTopic = $("#anime-input").val();
  console.log(inputTopic);
  // keep this info in the array
  // render the buttons
  topic.push(inputTopic);
  createButtons();
  search(inputTopic);


});

createButtons();
