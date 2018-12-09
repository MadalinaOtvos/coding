package com.bike.rental.controller;

import com.bike.rental.model.Bike;
import com.bike.rental.service.BikeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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

    /**
     * Retrieve all Bike entries from database.
     * @return list of Bike entries
     */
    @RequestMapping(value = "/bikes/", method = RequestMethod.GET)
    public ResponseEntity<List<Bike>> listAllBikes() {
        List<Bike> bikes = bikeService.findAllBikes();
        if (bikes.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Bike>>(bikes, HttpStatus.OK);
    }


    /**
     * Retrieve all available to rent, Bike entries from database.
     * @return list of available Bike entries
     */
    @RequestMapping(value = "/bikes/available", method = RequestMethod.GET)
    public ResponseEntity<List<Bike>> listAvailableBikes() {
        List<Bike> bikes = bikeService.findAvailableBikes();
        if (bikes.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Bike>>(bikes, HttpStatus.OK);
    }
}
