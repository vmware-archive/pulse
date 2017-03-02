package io.pivotal.pulse.projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {

        this.projectService = projectService;
    }

    @RequestMapping("/projects")
    public Iterable<Project> getProjects() {
        return projectService.getProjects();
    }
}
