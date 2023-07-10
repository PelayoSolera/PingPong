package com.solera.pingPongBack.controller;


import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.Person;
import com.solera.pingPongBack.model.User;
import com.solera.pingPongBack.repository.BankRepository;
import com.solera.pingPongBack.repository.PersonRepository;
import com.solera.pingPongBack.repository.UserRepository;
import com.solera.pingPongBack.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/signup")
@CrossOrigin
public class UserController {

    //SELECT `account_id`, `account_name`, `user_id` FROM `bank` WHERE user_id = '1';
    @Autowired
    private CommonService commonService;

    @Autowired
    private BankRepository bankRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public String add(@RequestBody User user) {

        Bank bank = new Bank(user, "O'Hara - Labadie Bank");
        Person person = new Person(1, "Arely", "Kertzmann", "-$259.71");
        Person person2 = new Person(2, "Ibrahim", "Dickens", "-$140.36");
        Person person3 = new Person(3, "Edgar", "Johns", "-$363.14");

        commonService.saveUser(user);
        bankRepository.save(bank);
        personRepository.save(person);
        personRepository.save(person2);
        personRepository.save(person3);

        return "User added";
    }


    //http://localhost:8081/signup?firstname=David
    @GetMapping
    public User getUsersByName(@RequestParam("firstname") String name) {
        return userRepository.findByName(name);
    }

    //http://localhost:8081/signup/bank?user=3
    @GetMapping("/bank")
    public Bank getNameBankById(@RequestParam("user") User user) {
        System.out.println("-------------> "+user);
        return bankRepository.findByUserId(user);
    }

    @GetMapping("/personal")
    public List<Person> getAllPerson(Person person) {
        return personRepository.findAll();
    }




}
