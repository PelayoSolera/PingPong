package com.solera.pingPongBack.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_person;

    private String firstname;
    private String lastname;
    private String amount;

}
