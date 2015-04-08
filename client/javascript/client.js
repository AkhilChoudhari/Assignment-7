$(document).ready(function() {

    console.log("Ready!!");

$("#button").click(function() {
        var url = $("#url").val();
        if (url === undefined) {
            alert("Please enter url in text box");
        } else {
            var UserUrl = JSON.stringify({
                ogurl: url
            });
            $.ajax({

                    type: "POST",
                    url: "/",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: UserUrl
                })
                .done(function(data, status) {

                    $('#result').html("");
                    $('#result').append("<a href=" + data.url + ">" + data.url + "</a>");
                    console.log(status);

                })
                .fail(function(data, status) {
                    console.log("Failed");
                    console.log(data);
                    console.log(status);
                });

        }


    $.ajax({

            type: "get",
            url: "/gettop",
            contentType: "application/json; charset=utf-8",
            dataType: "json",

        })
        .done(function(data, status) {
            var i = 0;

            for (i = 0; i < data.top10.length; i++) {
                $(".row").append("<a href=" + data.top10[i] + ">" + data.top10[i] + "</a><br>");
            }
            console.log(status);
        })
        .fail(function(data, status) {
            console.log("Failed");
            console.log(data);
            console.log(status);
        });


    });

});