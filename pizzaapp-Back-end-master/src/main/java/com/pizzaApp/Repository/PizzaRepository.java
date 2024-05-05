package com.pizzaApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pizzaApp.Entity.Pizza;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza,Integer>{
	@Query("select u from Pizza u where u.pizzaName=?1")
	Pizza findBypizzaName(String Pizza);

}
