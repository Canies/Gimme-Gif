var movies = ["Juice", "Belly", "Paid In Full", "Love And Basketball", "The Fifth Element", "Clueless", "Coming to America"];
var movieInput; 
var divMovie;


console.log(movies);

//currently undefined
// console.log(movieInput);
// console.log(divMovie);

function renderButtons() {
    // empties button area to avoid dups
    $("#buttons").empty();

    // iterates thru movies array 
    for (var i = 0; i < movies.length; i++) {
        var button = $("<button>");
        button.html(movies[i]);

        button.attr({
            id: "movie-btn",
            value: movies[i],
            class: "btn btn-outline-danger",
        });
        $("#buttons").append(button)

    }
}

renderButtons();

$(document).on("click", ".btn" , function(){
//clear previous gifs from show movie
console.log($(this).val());
var searchTerm = $(this).val();
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
$.ajax({
url: queryURL, 
method: "GET"
})
.then(function(response){
    console.log(response.data)
    var results = response.data
for (let i = 0; i < results.length; i++) {
 var gifImage = $("<img>");
 gifImage.attr("src", results[i].images.original.url)
 $("#showMovie").append(gifImage)
    
}






})
})






// function showGifs() {

// }
   

//     $('#movieImg').html('');

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {

//         console.log(queryURL);
//     })
//     for (let i = 0; i < 10; i++) {

//         var divMovie = $('<div>');
//         divMovie.addClass('divMovie');

//         var rated = $('<p>')
//         rated.text('Rating' + response.data[i].rating);
//         divMovie.append(rated);


//         var pics = $('<img>')

//         pics.attr("src", response.data[i].images.fixed_height_still.url);

//         pics.attr("data-still", response.data[i].fixed_height_still.url);

//         pics.attr("data-animate", response.data[i].fixed_height.url);

//         pics.attr("data-state", "still");

//         pics.addClass("gifMovie");

//         divMovie.append(pics);

//         $('#movieImg').append(divMovie);
//         $('.divMovie').css({ center });
//         $('#movieImg').addClass("col-md-12 col-md-6");



//     }


// }

// $('gifMovie').click(function () {

//     var state = $(this).attr('data-state');

//     if (state === "still") {
//         $(this).attr('src', $(this).attr('data-animate'));
//         $(this).attr('data-state', 'animate');
//     }
//     if (state === 'animate') {
//         $(this).attr('src', $(this).attr('data-still'));
//         $(this).attr('data-state', 'still');

//     }

// });
