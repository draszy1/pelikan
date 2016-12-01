package org.pelikan.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by draszy1 on 28.11.2016.
 */
@Document
@Data
@AllArgsConstructor
public class Airspace {
    @Id
    private String userId;
    private double centerLon;
    private double centerLat;
    private int radius;
}
