//For YOUTUBE 

function tplawesome(e, t) {
    res = e;
    for (var n = 0; n < t.length; n++) {
        res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) {
            return t[n][r]
        }
        )
    }
    return res
}

function addSound() {
    $(".submit").on('click', function (e) {
        e.preventDefault();
        var key = $('#input').val();
        var query = "https://www.googleapis.com/youtube/v3/search?q=" + key + "&key=AIzaSyDj8nQkKtYUX1DyaGo6E43_gywHp4xWoSY" + "&part=snippet&mine=true&videoEmbeddable=true&type=video&" + "music";

        $.ajax({
            url: query,
            method: 'GET',

        })
            .then(function (responseSong) {
                console.log(responseSong);
                var results = responseSong.items;
                //for(i=0;i<=results.length;i++)
                //{
                var video = results[0].id.videoId;
                const source = "https://www.youtube.com/embed/";
                console.log(video);
                $('#video').attr("src", source + video);
            
            
        //}
        
        
        
                        // e.preventDefault();
                        // var chanelName='uic.ruby';
                        // var request = gapi.client.youtube.search.list({
                        //     q: encodeURIComponent($("#input").val()).replace(/%20/g, "+"),
                        //     order: 'viewcount',
                        //     part: 'snippet',
                        //     type: 'video',
                        //     maxResults: 3,
                        //     publishedAfter: "2015-01-01T00:00:00Z",
                        //     forUsername: chanelName
                        // });
                        // request.execute(function (response) {
                        //     console.log(response);
                        // });
                    });
            });
        }
        addSound();





/*$(document).ready(function () {

    //array 
    var topics = [];
    console.log(topics);

    //for showButtons
    function showButtons() {
        $("#topics-display").empty();

        for (var i = 0; i < topics.length; i++) {
            var newButton = $("<button>").text(topics[i]).attr("data-topic", topics[i]).addClass("topic-button");
            $("#topics-display").append(newButton);
            console.log("ha")
        }
    }


        // for showGifs
        function showGifs() {
            $("#gifs-display").empty();

            var topic = $(this).attr("data-topic");

            //for Giphy Query
            var queryURL = "http://api.giphy.com/v1/gifs/search?q="
                + topic + "&rating=pg&api_key=6CjfUAofGjvsi1tn9tiW0Cw4hixSKLFC&limit=1";
                

            // AJAX GET request
            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .onLoad(function(response) {
                    

                    var results = response.data;

                    // Grab the gifs

                    for (var i = 0; i < results.length; i++) {

                        var topicDiv = $("<div>").addClass("gif-div");

                        var rating = results[i].rating;

                        var still = results[i].images.fixed_height_still.url;

                        var animate = results[i].images.fixed_height.url;

                        var p = $("<p>").text("Rating: " + rating);

                        var topicImage = $("<img>").addClass("gif").attr({"src": still, "data-still": still, "data-animate": animate, "data-state": "still"});

                        topicDiv.append(topicImage);
                        topicDiv.append(p);

                        $("#gifs-display").prepend(topicDiv);
                        console.log(topicDiv);

                    }
                });
            }

            // for animation
        
            function changeAnimate() {
                var state = $(this).attr("data-state");
            
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
              }
            
              //for "On clicks"
              $(document).on("click", ".topic-button", showGifs);
            
              $(document).on("click", ".gif", changeAnimate);
            
              $("#add-topic").on("click", function(event) {
                event.preventDefault();

                var topic= $("#topic-input").val().trim();
                $("#topic-input").val("");
                topics.push(topic);
                showButtons();
              

            
            }); */
              
