package com.pizzaApp.Entity;

public class User {
    private String userEmail;
    private String userPassword;

    
    public User(String userEmail, String userPassword) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
    public String getUserEmail() {
        return userEmail;
    }
    public User() {
    }
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public String getUserPassword() {
        return userPassword;
    }
    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
    

    
}
