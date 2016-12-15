/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {
    var allDronesIds = [];
    var droneData = [];

    setInterval(retrieveDrones, 2000);

    function retrieveDrones() {
        $.ajax({
            url: "drone/get",
            dataType: "text",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function( data, textStatus, jQxhr ){
                $.each(data, function(i, item){
                    if ($.inArray(item.id, allDronesIds) === -1) {
                        allDronesIds.push(item.id);
                        $("#drone_list").append("<div class=\"list_item\" data_value=\"" + item.id + "\">" + item.id + "</div>");
                    }
                });

                droneData.push(data);
                showDroneOnMap(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }


    $("#retrieveDronesBtn").on("click", function (e) {
        e.preventDefault();
        retrieveDrones();
    })
});