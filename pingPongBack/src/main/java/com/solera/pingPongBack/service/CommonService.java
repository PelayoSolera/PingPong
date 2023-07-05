package com.solera.pingPongBack.service;

import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.User;

import java.util.List;

public interface CommonService {

    public User saveUser(User user);
    public Bank saveBank(Bank bank);


}
