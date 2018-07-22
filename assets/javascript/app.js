$("#btn").on("click", function(event) {
    event.preventDefault();
    let formInput = $("#user").val();
    let grabGif = $.get(
      "https://api.giphy.com/v1/gifs/search?q=" +
        formInput +
        "&api_key=6CjfUAofGjvsi1tn9tiW0Cw4hixSKLFC&limit=1"
    );
    
    let imgTagArray = $(".pic");
  
    grabGif.done(function(response) {
      for (let i = 0; i < response.data.length; i++) {
        let eachImageUrl = response.data[i].images.original.url;
        // imageUrlArray.push(eachImageUrl); // push each image as you loop through the response array to the image array
        imgTagArray[i].setAttribute("src", eachImageUrl); 
      }
    });
  });
  




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
    $("#btn").on('click', function (e) {
        e.preventDefault();
        var key = $('#user').val();
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
