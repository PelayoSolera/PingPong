package com.solera.pingPongBack.service;


import com.solera.pingPongBack.model.User;
import com.solera.pingPongBack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements CommonService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    /*
    @Override
    public User getUserByName(String name) {
       return userRepository.findByName(name);
    }*/


}
