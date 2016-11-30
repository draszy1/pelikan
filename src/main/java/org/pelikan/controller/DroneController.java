package org.pelikan.controller;

import lombok.extern.slf4j.Slf4j;
import org.pelikan.model.Drone;
import org.pelikan.model.DronePos;
import org.pelikan.repository.DroneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by draszy1 on 28.11.2016.
 */
@RestController
@RequestMapping("drone")
@Slf4j
public class DroneController {

    private DroneRepository droneRepository;

    @Autowired
    public void setDroneRepository(DroneRepository droneRepository) {
        this.droneRepository = droneRepository;
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<Drone>> get() {
        return ResponseEntity.ok(droneRepository.findAll());
    }

    @RequestMapping(value = "/simulate", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> runSimulation() {
        try {
            simlulate();
        } catch (Exception e) {
            log.error("Simulation crashed.");
        }

        return ResponseEntity.ok("SUCCESS");
    }


    private void simlulate() throws Exception{
        Drone drone = new Drone();
        drone.setId("ZZZ1");
        double startLon = 17.0;
        double startLat = 50.0;

        for (int i = 0; i < 20; i++) {
            TimeUnit.SECONDS.sleep(2);
            drone.setLastPosition(new DronePos(startLon, startLat));

            startLat += 0.2;
            startLon += 0.2;

            droneRepository.save(drone);
        }
    }
}


