package org.pelikan.controller;

import com.mongodb.client.model.geojson.Point;
import com.mongodb.client.model.geojson.Position;
import org.pelikan.model.Drone;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * Created by draszy1 on 28.11.2016.
 */
@RestController
@RequestMapping("drone")
public class DroneController {


    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Drone>> get() {
        Drone d1 = buildDroneDetails("AAA1", 17, 50);
        Drone d2 = buildDroneDetails("BBB2", 22, 54);
        Drone d3 = buildDroneDetails("CCC3", 19, 53);

        return ResponseEntity.ok(Arrays.asList(d1, d2, d3));
    }

    private Drone buildDroneDetails(String id, double lon, double lat) {
        Point point = new Point(new Position(lon, lat));

        return new Drone(id, point);
    }
}


