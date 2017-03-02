package io.pivotal.pulse.projects;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

public class ProjectServiceTests {

    private ProjectRepository repositoryMock;
    private ProjectService projectService;

    @Before
    public void setup() {
        repositoryMock = Mockito.mock(ProjectRepository.class);
        projectService = new ProjectService(repositoryMock);
    }

    @Test
    public void getProjectsFetchesProjectsFromRepository() {
        when(repositoryMock.findAll()).thenReturn(getAllProjects());
        Iterable<Project> projects = projectService.getProjects();
        assertThat(projects).isEqualTo(getAllProjects());
    }

    private List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<>();
        Project firstProject = new Project();
        firstProject.setId(1L);
        firstProject.setName("First project");
        firstProject.setCodeName("fp");
        projects.add(firstProject);
        Project secondProject = new Project();
        secondProject.setId(2L);
        secondProject.setName("Second project");
        secondProject.setCodeName("sp");
        projects.add(secondProject);
        return projects;
    }
}
