package com.pizzaApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaApp.Entity.Coupan;
import com.pizzaApp.Services.CouponService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CouponController {
    @Autowired
    CouponService couponService;

    @PostMapping("/addCoupon/{customerId}")
    public Boolean addCoupon(@RequestBody Coupan coupan,@PathVariable int customerId) {

        couponService.addCoupon(coupan,customerId);

        return true;
    }

    @GetMapping("/viewCoupon")
    public List viewCoupon() {

        return couponService.viewCoupon();

    
    }
    
    @DeleteMapping("/deleteCoupan/{coupanId}")
	public ResponseEntity deleteCoupan(@PathVariable int coupanId) 
	{
    	System.out.println(coupanId);
    	couponService.deleteCoupan(coupanId);
		return ResponseEntity.status(HttpStatus.OK).body("Coupan Deleted");
		
	}
}
