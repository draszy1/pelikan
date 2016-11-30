package org.pelikan.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by draszy1 on 28.11.2016.
 */
@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Drone {

    @Id
    String id;
    DronePos lastPosition;
}
