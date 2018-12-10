package com.bike.rental.controller;

import com.bike.rental.model.ApiResponse;
import com.bike.rental.model.Bike;
import com.bike.rental.model.User;
import com.bike.rental.service.BikeService;
import com.bike.rental.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/api")
/**
 * Bike REST controller to expose the API endpoints for Bike status actions.
 */
public class BikeController {
    public static final Logger logger = LoggerFactory.getLogger(BikeController.class);

    @Autowired
    BikeService bikeService;

    @Autowired
    UserService userService;

    /**
     * Retrieve all Bike entries from database.
     *
     * @return list of Bike entries
     */
    @RequestMapping(value = "/bikes/", method = RequestMethod.GET)
    public ApiResponse<List<Bike>> listAllBikes() {
        List<Bike> bikes = bikeService.findAllBikes();
        if (bikes.isEmpty()) {
            return new ApiResponse<>(HttpStatus.NO_CONTENT.value(), "Bike objects list is empty.", bikes);
        }
        return new ApiResponse<>(HttpStatus.OK.value(), "Bike objects fetched successfully.", bikes);
    }


    /**
     * Retrieve all available to rent, Bike entries from database.
     *
     * @return list of available Bike entries
     */
    @RequestMapping(value = "/bikes/available", method = RequestMethod.GET)
    public ApiResponse<List<Bike>> listAvailableBikes() {
        List<Bike> bikes = bikeService.findAvailableBikes();
        if (bikes.isEmpty()) {
            return new ApiResponse<>(HttpStatus.NO_CONTENT.value(), "Bike objects list is empty.", bikes);
        }
        return new ApiResponse<>(HttpStatus.OK.value(), "Bike objects fetched successfully.", bikes);
    }

    /**
     * User endpoint for renting a bike which's id belongs to the User object.
     *
     * @return Bike with rented=true, updated email
     */
    @RequestMapping(value = "/bikes/rent", method = RequestMethod.POST)
    public ApiResponse<Bike> updateBike(@RequestBody User user) {
        Bike bike = bikeService.findBikeById(user.getRentedBikeId());

        if (bike.getRented() == true) {
            return new ApiResponse<>(HttpStatus.CONFLICT.value(), "Bike is already rented!", bike);
        } else {
            bikeService.updateRented(user.getRentedBikeId(), true, user.getName(), user.getEmail());
            return new ApiResponse<>(HttpStatus.OK.value(), "Bike rented by user: " + user.getEmail(), bike);
        }
    }

    /**
     * User endpoint for leaving a bike which's id belongs to the User object.
     *
     * @return Bike with rented=false and updated email empty, name Bike and user's rentedBikeId = 0L
     */
    @RequestMapping(value = "/bikes/leave", method = RequestMethod.POST)
    public ApiResponse<Bike> leaveBike(@RequestBody User user) {
        Bike bike = bikeService.findBikeById(user.getRentedBikeId());
        Long idOfBike = user.getRentedBikeId();

        if (bike.getRented() == null) {
            return new ApiResponse<>(HttpStatus.CONFLICT.value(), "Bike doesn't exist!", null);
        } else {
            bike = bikeService.updateRented(user.getRentedBikeId(), false, "Bike", "");
            user.setRentedBikeId(0L);
            userService.updateRentedBike(user);
            return new ApiResponse<>(HttpStatus.OK.value(), String.format("Bike id %s left by user: %s.", idOfBike, user.getEmail()), bike);
        }
    }
}
