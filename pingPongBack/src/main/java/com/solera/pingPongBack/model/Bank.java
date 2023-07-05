package com.solera.pingPongBack.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Bank {

    public Bank(User user, String accountName) {
        this.user = user;
        this.accountName = accountName;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountId;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @Column(name = "account_name")
    private String accountName;

}
