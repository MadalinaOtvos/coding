package com.bike.rental.repository;

import com.bike.rental.model.Bike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BikeRepository extends JpaRepository<Bike,Long> {
    List<Bike> findByRentedFalse();
    Bike findBikeById(Long id);
}
