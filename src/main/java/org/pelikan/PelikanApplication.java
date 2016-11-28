package org.pelikan;

import org.pelikan.controller.AirspaceController;
import org.pelikan.model.Airspace;
import org.pelikan.repository.AirspaceRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackageClasses = {AirspaceController.class, Airspace.class, AirspaceRepository.class})
@EnableAutoConfiguration
@EnableMongoRepositories
public class PelikanApplication {

	public static void main(String[] args) {
		SpringApplication.run(PelikanApplication.class, args);
	}
}
