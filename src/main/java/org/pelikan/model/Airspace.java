package org.pelikan.model;

import com.mongodb.client.model.geojson.Point;
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
    private String user;
    private Point position;
}
