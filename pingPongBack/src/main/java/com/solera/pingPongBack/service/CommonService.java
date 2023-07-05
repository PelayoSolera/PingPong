package com.solera.pingPongBack.service;

import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.Person;
import com.solera.pingPongBack.model.User;

public interface CommonService {

    public User saveUser(User user);
    public Person savePerson(Person person);
    public Bank saveBank(Bank bank);

}
