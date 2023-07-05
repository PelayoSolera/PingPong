package com.solera.pingPongBack.repository;

import com.solera.pingPongBack.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {


}
