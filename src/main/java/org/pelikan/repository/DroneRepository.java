package org.pelikan.repository;

import org.pelikan.model.Drone;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by draszy1 on 28.11.2016.
 */
@Repository
public interface DroneRepository extends MongoRepository<Drone, String> {
}
