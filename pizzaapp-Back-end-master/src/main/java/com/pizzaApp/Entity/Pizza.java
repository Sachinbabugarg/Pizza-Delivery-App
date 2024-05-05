package com.pizzaApp.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
@Entity
@Table
public class Pizza {
	@Id
	@SequenceGenerator(
	           name ="pizza_sequence",
	           sequenceName = "pizza_sequence",
	           allocationSize = 1
	   )
	@GeneratedValue(
	           strategy = GenerationType.SEQUENCE,
	           generator = "pizza_sequence"
	   )
	private int pizzaId;
	private String pizzaType;
	private String pizzaName;
	private String pizzaDescription;
	private double pizzaCost;
	public int getPizzaId() {
		return pizzaId;
	}
	public void setPizzaId(int pizzaId) {
		this.pizzaId = pizzaId;
	}
	public String getPizzaType() {
		return pizzaType;
	}
	public void setPizzaType(String pizzaType) {
		this.pizzaType = pizzaType;
	}
	public String getPizzaName() {
		return pizzaName;
	}
	public void setPizzaName(String pizzaName) {
		this.pizzaName = pizzaName;
	}
	public String getPizzaDescription() {
		return pizzaDescription;
	}
	public void setPizzaDescription(String pizzaDescription) {
		this.pizzaDescription = pizzaDescription;
	}
	public double getPizzaCost() {
		return pizzaCost;
	}
	public void setPizzaCost(double pizzaCost) {
		this.pizzaCost = pizzaCost;
	}
	public Pizza(int pizzaId) {
		super();
		this.pizzaId = pizzaId;
	}
	public Pizza(int pizzaId, String pizzaType, String pizzaName, String pizzaDescription, double pizzaCost) {
	super();
	this.pizzaId = pizzaId;
	this.pizzaType = pizzaType;
	this.pizzaName = pizzaName;
	this.pizzaDescription = pizzaDescription;
	this.pizzaCost = pizzaCost;
}
	public Pizza() {
		super();
	}
	public Pizza(String pizzaType, String pizzaName, String pizzaDescription, double pizzaCost) {
		this.pizzaType = pizzaType;
		this.pizzaName = pizzaName;
		this.pizzaDescription = pizzaDescription;
		this.pizzaCost = pizzaCost;
	}
	


}
