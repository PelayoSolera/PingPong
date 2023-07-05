package com.solera.pingPongBack.service;


import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.User;
import com.solera.pingPongBack.repository.BankRepository;
import com.solera.pingPongBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements CommonService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BankRepository bankRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Bank saveBank(Bank bank) {
        return bankRepository.save(bank);
    }



}
