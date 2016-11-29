$(function () {

    function showOnMap(drones) {
        var features = [];

        //iterate through array...
        for( var i = 0 ; i < drones.length ; i++){
            var item = drones[i];                                     //get item
            var lon = item.lastPosition.coordinates.values[0];
            var lat = item.lastPosition.coordinates.values[1];
            var iconPath = 'img/dron.png';

            //create Feature... with coordinates
            var iconFeature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857')),
                name: item.id
            });

            //create style for your feature...
            var iconStyle = new ol.style.Style({
                image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: iconPath
                }))
            });

            iconFeature.setStyle(iconStyle);
            features.push(iconFeature);
            //next item...
        }


        var vectorSource = new ol.source.Vector({
            features: features
        });

        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        olMap.addLayer(vectorLayer);
    }

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

    var popupElement = $('#popup');

    var popup = new ol.Overlay({
        element: popupElement[0],
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
    });

    olMap.addOverlay(popup);

    // display popup on click
    olMap.on('click', function(evt) {
        var feature = olMap.forEachFeatureAtPixel(evt.pixel,
            function(feature) {
                return feature;
            });
        if (feature) {
            var coordinates = feature.getGeometry().getCoordinates();
            popup.setPosition(coordinates);
            $(popupElement).html(feature.get('name'));
        } else {
            //??
        }
    });


    window.showOnMap = showOnMap;
});