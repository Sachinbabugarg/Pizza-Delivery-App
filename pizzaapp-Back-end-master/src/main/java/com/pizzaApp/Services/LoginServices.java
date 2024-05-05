package com.pizzaApp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaApp.Entity.Customer;
import com.pizzaApp.Entity.Pizza;
import com.pizzaApp.Entity.User;
import com.pizzaApp.Exceptions.ResourceAlreadyExistException;
import com.pizzaApp.Exceptions.ResourceNotFoundException;
import com.pizzaApp.Repository.CustomerRepository;

@Service
public class LoginServices {
    @Autowired
    CustomerRepository customerRepository;
    public boolean register(Customer customer) {
        Customer cust=customerRepository.findByCustomerEmail(customer.getCustomerEmail());
        if(cust==null){
            customer.settype("user");
            customerRepository.save(customer);
            return true;
        }
        else{
            
            throw new ResourceAlreadyExistException("User Aleady exist");
        }
        

    }
    public Customer login(User customer) {

        Customer cust=customerRepository.findByCustomerEmail(customer.getUserEmail());
        
        if(cust==null){
            throw new ResourceNotFoundException("User not found ");
        }
        else{
            if(cust.getPassword().equals(customer.getUserPassword())){
                cust.setLoginStatus(true);
                customerRepository.save(cust);
                return cust;
            }
        }

        throw new ResourceNotFoundException("Password missmatched ");
        
    }
	public void updateCustomer(Customer customer) 
	{
		if(customerRepository.findById(customer.getCustomerId()).isPresent())
		{
			Customer c=customerRepository.findById(customer.getCustomerId()).get();
			c.setCustomerName(customer.getCustomerName());
			c.setCustomerAddress(customer.getCustomerAddress());
			c.setCustomerMobile(customer.getCustomerMobile());
			customerRepository.save(c);
		}
	}
	public List viewCustomerList() 
	{
		return customerRepository.findAll();
	}
    
}