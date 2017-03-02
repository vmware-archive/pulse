package io.pivotal.pulse;

import io.pivotal.pulse.projects.Project;
import io.pivotal.pulse.projects.ProjectRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//@RunWith(SpringRunner.class)
//@SpringBootTest
////@ContextConfiguration(classes = {TestConfiguration.class})
//@WebAppConfiguration
public class IntegrationTests {

//    final String BASE_URL = "http://localhost:8080/";

    @Autowired
    private WebApplicationContext wac;

//    @Autowired
//    @Qualifier("mock")
//    private ProjectRepository projectRepository;

//    @MockBean
//    private ProjectRepository projectRepository;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    public void testSayHelloWorld() throws Exception{

        this.mockMvc.perform(get("/projects")
                .accept(MediaType.parseMediaType("application/json;charset=UTF-8")))
                .andExpect(status().isOk())
//                .andExpect(content().contentType("application/json;charset=UTF-8"))
                .andExpect(content().string("hey!"));
        ;
//        verify(projectRepository).findAll();
//        verify(projectRepository).findAll(any());
//        verify(projectRepository).count();
    }


}