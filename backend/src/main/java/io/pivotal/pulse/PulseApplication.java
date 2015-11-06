package io.pivotal.pulse;

import io.pivotal.pulse.projects.Project;
import io.pivotal.pulse.projects.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PulseApplication {
    public static void main(String[] args) {
        SpringApplication.run(PulseApplication.class, args);
    }
}
