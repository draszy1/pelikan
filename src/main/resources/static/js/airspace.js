/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {

    var airspaceDetails = {
        userId : "Zenon",
        lon: "-34",
        lat: "30"
    }

    $("#requestAirspaceBtn").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'airspace/add',
            dataType: 'text',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(airspaceDetails),
            success: function( data, textStatus, jQxhr ){
                //$('#response pre').html( data );
                console.log( "SUCCESS" );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    })
});
