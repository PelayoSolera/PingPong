package com.solera.pingPongBack.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountId;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "account_name")
    private String accountName;

}
