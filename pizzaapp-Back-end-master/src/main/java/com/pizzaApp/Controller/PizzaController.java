package com.pizzaApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.pizzaApp.Entity.Pizza;
import com.pizzaApp.Services.PizzaServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PizzaController {
	@Autowired
	PizzaServices pizzaservices;
	@PostMapping("/addPizza/{customerId}")
	public ResponseEntity addPizza(@RequestBody Pizza pizza,@PathVariable int customerId) 
	{		
        if(pizzaservices.add(pizza,customerId))
        {
            return ResponseEntity.status(HttpStatus.OK).body(pizza);

        }

        	return ResponseEntity.status(HttpStatus.FOUND).body("pizza already exist");
		}
	@DeleteMapping("/delPizza/{id}/{customerId}")
	public ResponseEntity deletePizza(@PathVariable int id,@PathVariable int customerId) 
	{
		pizzaservices.deletePizza(id,customerId);
		return ResponseEntity.status(HttpStatus.OK).body("Pizza Deleted");
		
	}
	@PutMapping("/updatePizza/{customerId}")
	public ResponseEntity updatePizza(@RequestBody Pizza pizza,@PathVariable int customerId) 
	{		
        
        return ResponseEntity.status(HttpStatus.OK).body(pizzaservices.updatePizza(pizza,customerId));
	}
	@GetMapping("/viewPizza")
	public List viewPizza()
	{
		return pizzaservices.viewPizzaList(	);
		
	}

}