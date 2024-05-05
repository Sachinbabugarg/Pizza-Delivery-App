package com.pizzaApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pizzaApp.Entity.Coupan;
@Repository
public interface CouponRepository extends JpaRepository<Coupan,Integer> {
    
}
