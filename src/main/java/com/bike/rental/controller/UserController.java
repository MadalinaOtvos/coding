package com.bike.rental.controller;
import com.bike.rental.model.ApiResponse;
import com.bike.rental.model.User;
import com.bike.rental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public ApiResponse<User> saveUser(@RequestBody User user){
        User userObj = userService.findByEmail(user.getEmail());
        if(userObj != null){
            return new ApiResponse<>(HttpStatus.CONFLICT.value(), String.format("User %s is already registered.",user.getEmail()) , userObj);
        }
        user.setRentedBikeId(0L);
        userObj = userService.save(user);
        return new ApiResponse<>(HttpStatus.OK.value(), "User is fetched successfully.",userObj);
    }

    @GetMapping
    public ApiResponse<List<User>> getUsers(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",userService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<User> getOne(@PathVariable Long id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",userService.findById(id));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        userService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }



}
