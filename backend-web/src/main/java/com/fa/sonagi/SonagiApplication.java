package com.fa.sonagi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SonagiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SonagiApplication.class, args);
	}

}
