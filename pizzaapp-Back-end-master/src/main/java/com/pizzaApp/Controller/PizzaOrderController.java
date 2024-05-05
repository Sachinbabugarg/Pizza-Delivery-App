package com.pizzaApp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaApp.Entity.Pizza;
import com.pizzaApp.Entity.PizzaOrder;
import com.pizzaApp.Services.PizzaOrderServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PizzaOrderController {
	@Autowired
	PizzaOrderServices pizzaorderservices;
	@PostMapping("/bookPizzaOrder/{customerId}/{pizzaId}/{couponId}")
	public ResponseEntity bookPizzaOrder(@RequestBody PizzaOrder pizzaOrder,@PathVariable int customerId, @PathVariable int pizzaId, @PathVariable int couponId) 
	{
		pizzaOrder.setCouponId(couponId);		
		pizzaorderservices.bookPizzaOrder(pizzaOrder, customerId, pizzaId);
        return ResponseEntity.status(HttpStatus.OK).body("Pizza Ordered");
	}

	@GetMapping("/viewPizzaOrder/{customerId}")
	public ResponseEntity viewCustomerOrder( @PathVariable int customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(pizzaorderservices.viewPizzaOrder(customerId));
	}

	@GetMapping("/viewOrder/admin/{customerId}")
	public ResponseEntity viewAdminOrder( @PathVariable int customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(pizzaorderservices.viewOrder(customerId));
	}

}