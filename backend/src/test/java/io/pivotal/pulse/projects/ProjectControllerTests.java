package io.pivotal.pulse.projects;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)

public class ProjectControllerTests {
    protected MockMvc mockMvc;

    @Value(value = "classpath:Projects.json")
    private Resource projectsJSON;
    private ProjectService projectServiceMock;


    @Before
    public void setup() {
        projectServiceMock = Mockito.mock(ProjectService.class);
        ProjectController projectController = new ProjectController(projectServiceMock);
        mockMvc = MockMvcBuilders.standaloneSetup(projectController).build();
    }

    @Test
    public void getProjectsReturnsProjects() throws Exception {
        String x;
        try (BufferedReader buffer = new BufferedReader(new InputStreamReader(projectsJSON.getInputStream()))) {
            x = buffer.lines().collect(Collectors.joining("\n"));
        }
        when(projectServiceMock.getProjects()).thenReturn(getAllProjects());
        MvcResult result = this.mockMvc.perform(get("/projects")
                .accept(MediaType.parseMediaType("application/json;charset=UTF-8")))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andReturn();
        String responseString = result.getResponse().getContentAsString();
        JSONAssert.assertEquals(x, responseString, true);
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
