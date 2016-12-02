package org.pelikan.controller;

import org.pelikan.model.Airspace;
import org.pelikan.repository.AirspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    ResponseEntity<?> add(@RequestBody Airspace airspace) {

        airspaceRepository.save(airspace);

        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Airspace>> get() {
        return ResponseEntity.ok(airspaceRepository.findAll());
    }
}
