package org.pelikan.model;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Created by draszy1 on 28.11.2016.
 */
@Data
@AllArgsConstructor
public class AirspaceData {
    private double lon;
    private double lat;
    private String userId;
}
