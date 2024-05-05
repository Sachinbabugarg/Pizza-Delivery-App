package com.pizzaApp.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class PizzaOrder {
	@Id
	@SequenceGenerator(
			   name ="order_sequence",
	           sequenceName = "order_sequence",
	           allocationSize = 1
	   )
	@GeneratedValue(
	           strategy = GenerationType.SEQUENCE,
	           generator = "order_sequence"
	   )
	private int pizzaOrderId;
	public PizzaOrder(int quantity) {
		super();
		this.quantity = quantity;
	}
	public PizzaOrder(int quantity, int couponId) {
		super();
		this.quantity = quantity;
		this.couponId = couponId;
	}
	private int quantity;
	private String size;
	private double totalCost;
	private int couponId;
	private int customerId;
	private  String pizzaName;
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public String getPizzaName() {
		return pizzaName;
	}
	public void setPizzaName(String pizzaName) {
		this.pizzaName = pizzaName;
	}
	public int getPizzaOrderId() {
		return pizzaOrderId;
	}
	public void setPizzaOrderId(int pizzaOrderId) {
		this.pizzaOrderId = pizzaOrderId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}
	public int getCouponId() {
		return couponId;
	}
	public void setCouponId(int couponId) {
		this.couponId = couponId;
	}
	public PizzaOrder(int pizzaOrderId, int quantity, String size, double totalCost, int couponId) {
		super();
		this.pizzaOrderId = pizzaOrderId;
		this.quantity = quantity;
		this.size = size;
		this.totalCost = totalCost;
		this.couponId = couponId;
	}
	public PizzaOrder(int quantity, String size, double totalCost, int couponId) {
		super();
		this.quantity = quantity;
		this.size = size;
		this.totalCost = totalCost;
		this.couponId = couponId;
	}
	public PizzaOrder() {
		super();
	}
	

}