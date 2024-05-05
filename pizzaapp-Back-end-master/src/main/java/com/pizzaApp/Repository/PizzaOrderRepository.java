package com.pizzaApp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pizzaApp.Entity.PizzaOrder;

@Repository
public interface PizzaOrderRepository extends JpaRepository<PizzaOrder,Integer> {
	@Query("select u from PizzaOrder u where u.customerId=?1")
	List<PizzaOrder> findByCustomerId(int customerId);

}