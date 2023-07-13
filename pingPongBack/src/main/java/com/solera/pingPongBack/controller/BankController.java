package com.solera.pingPongBack.controller;

import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.repository.BankRepository;
import com.solera.pingPongBack.service.CommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signup")
@CrossOrigin
public class BankController {

    @Autowired
    private BankRepository bankRepository;

    @Autowired
    private CommonService commonService;


    //http://localhost:8081/signup/addBank
    @PostMapping("/addBank")
    public String addBank(@RequestBody Bank bank) {
        bankRepository.save(bank);
        return "Bank-account added";
    }



}
