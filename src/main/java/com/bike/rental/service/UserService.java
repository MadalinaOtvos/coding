package com.bike.rental.service;

import com.bike.rental.model.User;

import java.util.List;

public interface UserService {

    User save(User user);
    List<User> findAll();
    void delete(Long id);
    User findById(Long id);
    User findByEmail(String email);
}
