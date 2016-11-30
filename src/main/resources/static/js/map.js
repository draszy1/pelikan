$(function () {

    var prevDroneLayer;

    function showOnMap(drones) {
        var features = [];

        //iterate through array...
        for( var i = 0 ; i < drones.length ; i++){
            var item = drones[i];
            var lon = item.lastPosition.lon;
            var lat = item.lastPosition.lat;
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


        if (typeof(prevDroneLayer) !== 'undefined') {
            olMap.removeLayer(prevDroneLayer);
        }

        olMap.addLayer(vectorLayer);
        prevDroneLayer = vectorLayer
    }

    var olMap = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.transform([19.32, 52.09], 'EPSG:4326', 'EPSG:3857'),
            zoom: 6
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