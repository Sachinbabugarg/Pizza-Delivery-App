package com.pizzaApp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaApp.Entity.Coupan;
import com.pizzaApp.Entity.Customer;
import com.pizzaApp.Exceptions.NotAdminException;
import com.pizzaApp.Exceptions.ResourceNotFoundException;
import com.pizzaApp.Repository.CouponRepository;
import com.pizzaApp.Repository.CustomerRepository;

@Service
public class CouponService {
    @Autowired
    CouponRepository couponRepository;
    @Autowired
	CustomerRepository customerRepository;

    public boolean addCoupon(Coupan coupan, int customerId){
        System.out.print(customerRepository.findById(customerId));
        Customer cust = customerRepository.findById(customerId).get();
        System.out.print(cust);
        if (cust.gettype().equals("user")) {
            throw new NotAdminException("Access Denied");
        }else{

        couponRepository.save(coupan);
        return true;
        }
    }

    public List viewCoupon(){
        List<Coupan> coupans = couponRepository.findAll();
        return coupans;
    }
    
    public void deleteCoupan(int coupanId) {
		Coupan cp = couponRepository.findById(coupanId).get();
		if (cp == null) {
			throw new ResourceNotFoundException("Coupan not found ");
		
		} else  {
			couponRepository.deleteById(coupanId);
		}
	}
}
