
//For Giphy
//On search button click function
$("#btn").on("click", function (event) {
    event.preventDefault();
    //search box input
    let formInput = $("#user").val();
    //for grabbing gif from Giffy

    let grabGif = $.get(
        "https://api.giphy.com/v1/gifs/search?q=" +
        formInput +
        "&api_key=6CjfUAofGjvsi1tn9tiW0Cw4hixSKLFC&limit=1"
    );
    // selects and adds gif to pic div
    let imgTagArray = $(".pic");
    // push each image as you loop through the response array to the image array

    grabGif.done(function (response) {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
            let eachImageUrl = response.data[i].images.original.url;
            // setInterval(eachImageUrl,2000);
            imgTagArray[i].setAttribute("src", eachImageUrl);
        }
    });
});

function addSound() {
    // on every click of button a following function will execute
    $("#btn").on('click', function (e) {
        e.preventDefault();

        // variable key stores the user input it will add a keyword songs in the end of every search, So that it will brings up songs only from youtube
        var key = $('#user').val() + "+songs";

        // variable query stores api key and other keywords and their values 
        var query = "https://www.googleapis.com/youtube/v3/search?q=" + key + "&song&key=AIzaSyDj8nQkKtYUX1DyaGo6E43_gywHp4xWoSY" + "&part=snippet&mine=true&videoEmbeddable=true&type=video&";

        // ajax call
        $.ajax({
            url: query,
            method: 'GET',

        })
            .then(function (responseSong) {

                // to check the object
                // console.log(responseSong);
                var results = responseSong.items;

                // variable video to store video id and always bring up the fourth result from youtube
                var video = results[3].id.videoId;

                // source variable contains the constant url for every search
                const source = "https://www.youtube.com/embed/";

                // to test id obtained from object with every search
                // console.log(video);

                // autoplay is set true to play video without click
                $('#video').attr("src", source + video + "?autoplay=1");
            });
    });
}
addSound();



