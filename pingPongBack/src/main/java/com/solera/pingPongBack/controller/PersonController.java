package com.solera.pingPongBack.controller;

import com.solera.pingPongBack.model.Person;
import com.solera.pingPongBack.repository.PersonRepository;
import com.solera.pingPongBack.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/signup")
@CrossOrigin
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private CommonService commonService;


    //http://localhost:8081/signup/personal
    @GetMapping("/personal")
    public List<Person> getAllPerson(Person person) {
        return personRepository.findAll();
    }

}
