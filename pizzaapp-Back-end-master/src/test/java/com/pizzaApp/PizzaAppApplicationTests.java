	package com.pizzaApp;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.pizzaApp.Entity.Customer;
import com.pizzaApp.Entity.Pizza;
import com.pizzaApp.Repository.CustomerRepository;
import com.pizzaApp.Repository.PizzaRepository;
import com.pizzaApp.Services.LoginServices;
import com.pizzaApp.Services.PizzaServices;

@SpringBootTest
class PizzaAppApplicationTests {

	@Autowired
	CustomerRepository cRepo;
	@Autowired
	LoginServices loginservices;
	
	@Test
	 void test() {
		Customer c= new Customer("souvik","souvikghata21@","souvik");
		cRepo.save(c);
		assertNotNull(cRepo.findAll());

	}
	
	
	//Pizza Module Test Cases
	@Autowired
	PizzaRepository pRepo;
	@Autowired
	PizzaServices pizzaservices;
	@Test
	void addTest() {
		Pizza p= new Pizza("Veg","XYZ","XYZXYZ",250);
		pRepo.save(p);
		assertNotNull(pRepo.findAll());
	
	}
	
	
	@Test
	 void updateTest() {
		Pizza p2= new Pizza(26,"Veg","XYZ","XYZXYZ",250);
		pRepo.save(p2);
		assertNotNull(pRepo.findAll());
	}
	
	
	@Test
	 void viewTest() {
		Pizza p3= new Pizza();
		assertNotNull(pRepo.findAll());

	}

	@Test
	 void deleteTest() {
		Pizza p4= new Pizza(29);
		pRepo.delete(p4);
		assertNotNull(pRepo.findAll());

	}
	
	
	
}
