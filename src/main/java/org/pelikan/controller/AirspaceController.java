package org.pelikan.controller;

import com.mongodb.client.model.geojson.Point;
import com.mongodb.client.model.geojson.Position;
import org.pelikan.model.Airspace;
import org.pelikan.model.AirspaceData;
import org.pelikan.repository.AirspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by draszy1 on 28.11.2016.
 */
@RestController
@RequestMapping("airspace")
public class AirspaceController {

    private AirspaceRepository airspaceRepository;

    @Autowired
    public void setAirspaceRepository(AirspaceRepository airspaceRepository) {
        this.airspaceRepository = airspaceRepository;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<?> add(@RequestBody AirspaceData data) {
        Position position = new Position(data.getLon(), data.getLat());

        Point point = new Point(position);
        airspaceRepository.save(new Airspace(data.getUserId(), point));

        return ResponseEntity.ok().build();
    }
}
