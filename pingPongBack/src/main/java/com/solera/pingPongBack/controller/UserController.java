package com.solera.pingPongBack.controller;


import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.Person;
import com.solera.pingPongBack.model.User;
import com.solera.pingPongBack.repository.BankRepository;
import com.solera.pingPongBack.repository.PersonRepository;
import com.solera.pingPongBack.repository.UserRepository;
import com.solera.pingPongBack.service.CommonService;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

        Person person = new Person(1, generarId(),"Arely", "Kertzmann", "-$259.71");
        Person person2 = new Person(2, generarId(), "Ibrahim", "Dickens", "-$140.36");
        Person person3 = new Person(3, generarId(), "Edgar", "Johns", "-$363.14");

        commonService.saveUser(user);

        bankRepository.save(bank);
        personRepository.save(person);
        personRepository.save(person2);
        personRepository.save(person3);

        return "User added";
    }

    //http://localhost:8081/signup/bank?user=1
    @GetMapping("/bank")
    public List<Map<String, String>> getNameBankById(@RequestParam("user") User user) {
        System.out.println("-------------> " + user);
        List<Bank> banks = bankRepository.findByUserId(user);
        List<Map<String, String>> bankNames = new ArrayList<>();
        for (Bank bank : banks) {
            Map<String, String> bankMap = new HashMap<>();
            bankMap.put("accountName", bank.getAccountName());
            bankNames.add(bankMap);
        }
        return bankNames;
    }

    private static String generarId() {
        String idFalso = RandomStringUtils.randomAlphanumeric(10);
        return idFalso;
    }

    //http://localhost:8081/signup?firstname=David
    @GetMapping
    public User getUsersByName(@RequestParam("firstname") String name) {
        return userRepository.findByName(name);
    }



}
