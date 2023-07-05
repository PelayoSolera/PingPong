package com.solera.pingPongBack.controller;


import com.solera.pingPongBack.model.User;
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

    @PostMapping("/add")
    public String add(@RequestBody User user) {
        commonService.saveUser(user);
        return "Student added";
    }

}
