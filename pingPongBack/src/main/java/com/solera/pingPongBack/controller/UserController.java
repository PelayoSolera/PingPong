package com.solera.pingPongBack.controller;


import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.User;
import com.solera.pingPongBack.repository.BankRepository;
import com.solera.pingPongBack.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signup")
@CrossOrigin
public class UserController {

    //SELECT `account_id`, `account_name`, `user_id` FROM `bank` WHERE user_id = '1';

    @Autowired
    private CommonService commonService;

    @Autowired
    private BankRepository bankRepository;

    @PostMapping("/add")
    public String add(@RequestBody User user) {

        Bank bank = new Bank(user, "O'Hara - Labadie Bank");

        commonService.saveUser(user);
        bankRepository.save(bank);

        return "Student added";
    }

}
