package io.pivotal.pulse;

import io.pivotal.pulse.projects.Project;
import io.pivotal.pulse.projects.ProjectRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = PulseApplication.class)
@WebAppConfiguration
public class PulseApplicationTests {

	@Autowired
	private ProjectRepository projectRepository;

	@Test
	public void contextLoads() {

	}

	@Test
	public void thereExistsProjectData()  {
		Project project = new Project();

		project.setName("Foo");

		projectRepository.save(project);

	}

}
