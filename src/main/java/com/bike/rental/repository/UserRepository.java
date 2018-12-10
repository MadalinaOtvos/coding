package com.bike.rental.repository;


import com.bike.rental.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByEmail(String email);

    User deleteById(Long id);

    User findById(Long id);

    @Modifying
    @Query("UPDATE User u SET u.rentedBikeId = :rentedBikeId WHERE u.email = :email")
    User updateRentedBike(@Param("email") String email, @Param("rentedBikeId") Long rentedBikeId);
}