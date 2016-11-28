package org.pelikan.repository;

import org.pelikan.model.Airspace;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by draszy1 on 28.11.2016.
 */
@Repository
public interface AirspaceRepository extends MongoRepository<Airspace, String> {
}
