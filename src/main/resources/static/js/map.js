$(function () {

    var prevDroneLayer;

    function showDroneOnMap(drones) {
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

            iconStyle = [
                new ol.style.Style({
                    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
                        anchor: [0.5, 1],
                        anchorXUnits: 'fraction',
                        anchorYUnits: 'pixels',
                        src: iconPath,
                        opacity: 0.75
                    }))
                }),
                new ol.style.Style({
                    text: new ol.style.Text({
                        text: item.id,
                        offsetY: -5,
                        fill: new ol.style.Fill({
                            color: '#0000FF'
                        })
                    })
                })
            ];

            iconFeature.setStyle(iconStyle);

            features.push(iconFeature);
            //next item...
        }

        var droneLayerSource = new ol.source.Vector({
            features: features
        });

        var droneLayer = new ol.layer.Vector({
            source: droneLayerSource
        });


        if (typeof(prevDroneLayer) !== 'undefined') {
            olMap.removeLayer(prevDroneLayer);
        }

        olMap.addLayer(droneLayer);
        prevDroneLayer = droneLayer;
    }

    function showAirspacesOnMap(airspaces) {
        var features = [];

        for( var i = 0 ; i < airspaces.length ; i++) {
            var airspace = airspaces[i];

            var polyStyle = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'blue',
                    lineDash: [4],
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 255, 0.1)'
                })
            });

            //create Feature... with coordinates
            var airspaceFeature = new ol.Feature({
                geometry: new ol.geom.Circle(
                    ol.proj.transform([airspace.centerLon, airspace.centerLat], 'EPSG:4326', 'EPSG:3857'),
                    airspace.radius,
                    'XY'),
                name: airspace.userId
            });

            airspaceFeature.setStyle(polyStyle);

            features.push(airspaceFeature);

            var airspaceLayerSource = new ol.source.Vector({
                features: features
            });

            var airspaceLayer = new ol.layer.Vector({
                source: airspaceLayerSource,
            });
        }

        olMap.addLayer(airspaceLayer);
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
            zoom: 6,
            minZoom: 1,
            maxZoom: 20
        })
    });


    window.showDroneOnMap = showDroneOnMap;
    window.showAirspacesOnMap = showAirspacesOnMap;
});