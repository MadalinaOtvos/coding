package com.bike.rental.controller;

import com.bike.rental.model.User;
import com.bike.rental.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {
    public static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        User userObj = userService.findByEmail(user.getEmail());
        if (userObj != null) {
            logger.warn("User {} is already registered!", user.getEmail());
            return new ResponseEntity<>(userObj, HttpStatus.CONFLICT);
        }

        user.setRentedBikeId(0L);
        userObj = userService.save(user);
        logger.info("User {} successfully registered.", user.getEmail());
        return new ResponseEntity<>(userObj, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> userList = userService.findAll();

        if (userList == null || userList.isEmpty()) {
            return new ResponseEntity<>(userList, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getOne(@PathVariable Long id) {
        User user = userService.findById(id);
        if (user == null) {
            return new ResponseEntity<>(user, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        User user = userService.findById(id);
        if (user == null) {
            return new ResponseEntity<>(String.format("User with id {} doesn't exist!", id), HttpStatus.BAD_REQUEST);
        }

        userService.delete(id);
        return new ResponseEntity<>(String.format("User with id {} removed successfully.", id), HttpStatus.OK);
    }


}
