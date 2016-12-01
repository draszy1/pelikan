/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {

    var locatedLon;
    var locatedLat;

    getLocation();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(savePosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    function savePosition(position) {
        console.log("Located!");
        locatedLon = position.coords.longitude;
        locatedLat = position.coords.latitude;
    }

    $("#requestAirspaceBtn").on('click', function (e) {
        e.preventDefault();

        var airspaceDetails = {
            userId : "Grzyb",
            centerLon : locatedLon,
            centerLat : locatedLat,
            radius : "10"
        };

        $.ajax({
            url: 'airspace/add',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(airspaceDetails),
            success: function( data, textStatus, jQxhr ){
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
                showAirspaceOnMap(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    })
});
