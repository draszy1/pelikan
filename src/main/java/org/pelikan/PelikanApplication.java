package org.pelikan;

import org.pelikan.config.WebSecurityConfig;
import org.pelikan.controller.AirspaceController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = {WebSecurityConfig.class, AirspaceController.class})
public class PelikanApplication {

	public static void main(String[] args) {
		SpringApplication.run(PelikanApplication.class, args);
	}
}
