/**
 * Created by draszy1 on 28.11.2016.
 */
$(function () {

    var locatedLon;
    var locatedLat;
    var airspaceUsers = [];

    setInterval(retrieveAirspaces, 10000);

    getLocation();

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(savePosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    function savePosition(position) {
        locatedLon = position.coords.longitude;
        locatedLat = position.coords.latitude;
    }

    function retrieveAirspaces() {
        $.ajax({
            url: "airspace/get",
            dataType: "text",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function( data, textStatus, jQxhr ){
                $.each(data, function(i, airspace){
                    if ($.inArray(airspace.userId, airspaceUsers) === -1) {
                        airspaceUsers.push(airspace.userId);
                        showAirspacesOnMap(data);
                    }
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }

    function requestAirspace() {

        if (locatedLat === 0.0 && locatedLon === 0.0) {
            alert("Your browser did not did not provide location.\nPlease make sure that geolocation is enabled in your browser and try again.");
        }

        var airspaceDetails = {
            userId : "Grzyb",
            centerLon : locatedLon,
            centerLat : locatedLat,
            radius : "10000"
        };

        $.ajax({
            url: "airspace/add",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(airspaceDetails),
            success: function( data, textStatus, jQxhr ){
                console.log( "SUCCESS" );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }

    $("#requestAirspaceBtn").on("click", function (e) {
        e.preventDefault();
        requestAirspace();
    });

    $("#retrieveAirspaceBtn").on("click", function (e) {
        e.preventDefault();
        retrieveAirspaces();
    });
});
