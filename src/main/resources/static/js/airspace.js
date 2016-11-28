/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {

    var airspaceDetails = {
        userId : "Zenon",
        lon: "-34",
        lat: "30"
    };

    $("#requestAirspaceBtn").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'airspace/add',
            dataType: 'text',
            type: 'POST',
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

    $("#retrieveAirspaceBtn").on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'airspace/get',
            dataType: 'text',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function( data, textStatus, jQxhr ){
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    })
});
