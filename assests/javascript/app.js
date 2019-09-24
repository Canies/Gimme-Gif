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

$(document).on("click", ".btn", function () {
    //clear previous gifs from show movie
    console.log($(this).val());
    var searchTerm = $(this).val();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.data)
            var results = response.data
            for (let i = 0; i < results.length; i++) {
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.original.url)
                $("#showMovie").append(gifImage)

                var gifDiv = $("<div class='movie'>");
                var rating = response.data[i].rating;

                var rated = $("<p>").text("Rating:" + rating);
                gifDiv.append(rated);

                var gifStill = response.data[i].images.fixed_height_still.url;
                var gifAnimated = response.data[i].images.fixed_height.url;

                var gif = $("<img class='actualGif' state='still'>").attr("src", gifStill);
                gif.attr("data-still", gifStill);
                gif.attr("data-animate", gifAnimated);

                gifDiv.append(gif);
                $("#showMovie").prepend(gifDiv);

            }

            $(document).on("click", "actualGif", function (){

                var state = $(this).attr("state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(".actualGif").attr("state", "animate");

                }
                else if (state === "animated") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(".actualGif").attr("state", "still");
                }
            })
        })
})
