package com.solera.pingPongBack.service;

import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.User;

public interface CommonService {

    public User saveUser(User user);
    public Bank saveBank(Bank bank);

    //public User getUserByName(String name);

}
