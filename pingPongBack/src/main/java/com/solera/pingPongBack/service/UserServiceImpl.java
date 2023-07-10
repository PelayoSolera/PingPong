package com.solera.pingPongBack.service;


import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.Person;
import com.solera.pingPongBack.model.User;
import com.solera.pingPongBack.repository.BankRepository;
import com.solera.pingPongBack.repository.PersonRepository;
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
    @Autowired
    private PersonRepository personRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    @Override
    public Bank saveBank(Bank bank) {
        return bankRepository.save(bank);
    }

    public List<Person> getPerson(Person person){
        return personRepository.findAll();
    }





}
