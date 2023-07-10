package com.solera.pingPongBack.repository;

import com.solera.pingPongBack.model.Bank;
import com.solera.pingPongBack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankRepository extends JpaRepository<Bank, Integer> {

    @Query("SELECT u FROM Bank u WHERE u.user = :user")
    List<Bank> findByUserId(@Param("user") User user);

}
