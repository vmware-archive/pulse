package io.pivotal.pulse;

import io.pivotal.pulse.projects.Project;
import io.pivotal.pulse.projects.ProjectRepository;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;

/**
 * Created by pivotal on 3/2/17.
 */
@Configuration
public class TestConfiguration {

    @Qualifier("mock")
    public ProjectRepository getProjectRepository2() {
        System.out.println("hey!!!!!!!");
        System.err.println("errrrrr");
//        throw new RuntimeException();
//        return null;
        ProjectRepository projectRepository = Mockito.mock(ProjectRepository.class);
        List<Project> projects = new ArrayList<>();
        Project project = new Project();
        project.setName("Our fancy schmancy project");
        projects.add(project);
        given(projectRepository.findAll()).willReturn(projects);
        given(projectRepository.findAll(any())).willReturn(projects);
        given(projectRepository.count()).willReturn(1L);
        return projectRepository;
    }
}
