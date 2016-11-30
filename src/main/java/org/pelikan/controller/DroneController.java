package org.pelikan.controller;

import lombok.extern.slf4j.Slf4j;
import org.pelikan.model.Drone;
import org.pelikan.model.DronePos;
import org.pelikan.repository.DroneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
        droneRepository.deleteAll();

        Drone drone1 = new Drone();
        drone1.setId("ZZZ1");
        double startLon1 = 17.0;
        double startLat1 = 50.0;

        Drone drone2 = new Drone();
        drone2.setId("ZZZ2");
        double startLon2 = 19.0;
        double startLat2 = 53.0;

        for (int i = 0; i < 20; i++) {
            TimeUnit.SECONDS.sleep(2);
            drone1.setLastPosition(new DronePos(startLon1, startLat1));
            drone2.setLastPosition(new DronePos(startLon2, startLat2));

            startLat1 += 0.2;
            startLon1 += 0.2;
            startLat2 += 0.2;
            startLon2 += 0.2;

            droneRepository.save(drone1);
            droneRepository.save(drone2);
        }
    }
}


