package com.bike.rental.service;



import com.bike.rental.model.User;

import java.util.List;

/**
 * Interface for User service methods.
 */
public interface UserService {

    User findById(Long id);

    List<User> findByEmail(String email);

    void saveUser(User user);

    void deleteUserById(Long id);

    List<User> findAllUsers();

    void updateUser(User user);

}