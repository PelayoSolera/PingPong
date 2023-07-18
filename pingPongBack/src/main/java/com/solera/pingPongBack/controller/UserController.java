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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
    public ResponseEntity<User> add(@RequestBody User user) {

        Bank bank = new Bank(user, "O'Hara - Labadie Bank");

        Person person = new Person(1, generarId(),"Arely", "Kertzmann", "-$259.71");
        Person person2 = new Person(2, generarId(), "Ibrahim", "Dickens", "-$140.36");
        Person person3 = new Person(3, generarId(), "Edgar", "Johns", "-$363.14");

        user.setFake_id(generarId());
        commonService.saveUser(user);

        bankRepository.save(bank);
        personRepository.save(person);
        personRepository.save(person2);
        personRepository.save(person3);

        user.setPassword(null);
        return ResponseEntity.ok(user) ;
    }

    //http://localhost:8081/signup/bank?user=1
    @GetMapping("/bank")
    public List<Map<String, Object>> getNameBankById(@RequestParam("user") User user) {
        System.out.println("-------------> " + user);
        List<Bank> banks = bankRepository.findByUserId(user);
        List<Map<String, Object>> bankDetails = new ArrayList<>();
        for (Bank bank : banks) {
            Map<String, Object> bankMap = new HashMap<>();
            bankMap.put("accountId", bank.getAccountId());
            bankMap.put("accountName", bank.getAccountName());
            bankDetails.add(bankMap);
        }
        return bankDetails;
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

    //http://10.33.147.9:8081/signup/2/phone-number
    @PutMapping("/{id}/phone-number")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User updatedUser) {
        User existingUser = userRepository.findById(id);

        // Actualizar los campos modificables del usuario existente
        existingUser.setPhone(updatedUser.getPhone());
        User savedUser = commonService.saveUser(existingUser);

        System.out.println("----------> User: " + savedUser);
        return ResponseEntity.ok(savedUser);
    }


    //http://10.33.147.9:8081/signup/2/delete-bankname
    @DeleteMapping("/{user}/delete-bankname")
    public ResponseEntity<String> deleteBankName(@PathVariable("user") User user, @RequestBody String deleteBank) {
        System.out.println("-------------> " + user);
        List<Bank> banks = bankRepository.findByUserId(user);

        for (Bank bank : banks) {

            String compare = String.valueOf('"' +bank.getAccountName() +'"');

            if (compare.equals(deleteBank)) {
                bankRepository.delete(bank);
            }

        }
        return ResponseEntity.ok("Delete success");
    }


    //http://10.33.147.9:8081/signup/2/delete-bankname
    @DeleteMapping("/{user}/delete-id")
    public ResponseEntity<String> deleteBankId(@PathVariable("user") User user, @RequestBody String deleteBank) {
        System.out.println("-------------> " + user);
        List<Bank> banks = bankRepository.findByUserId(user);

        for (Bank bank : banks) {
            String compare = String.valueOf(bank.getAccountId());

            if (compare.equals(deleteBank)) {
                bankRepository.delete(bank);
            }
        }

        return ResponseEntity.ok("Delete success");
    }

}
