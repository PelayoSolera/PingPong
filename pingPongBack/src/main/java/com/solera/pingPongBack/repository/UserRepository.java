package com.solera.pingPongBack.repository;

import com.solera.pingPongBack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

   @Query("SELECT u FROM User u WHERE u.firstname = :firstname")
   User findByName(@Param("firstname") String name);

   @Query("SELECT u FROM User u WHERE u.id = :id")
   User findById(@Param("id") int id);

}
