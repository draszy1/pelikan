$(function () {

    var olMap = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([37.41, 8.82]),
            zoom: 4
        })
    });

    var imageStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 15,
            snapToPixel: false,
            fill: new ol.style.Fill({color: 'yellow'}),
            stroke: new ol.style.Stroke({color: 'red', width: 1})
        })
    });

    // var temp = {
    //     'type': 'Feature',
    //     'geometry': {
    //         'type': 'Point',
    //         'coordinates': [-6e6, -4e6]
    //     }
    // };

    // var flightsLayer = new ol.layer.Vector({
    //     source: flightsSource
    // });

    // olMap.addLayer(flightsLayer);
    // olMap.render();
});