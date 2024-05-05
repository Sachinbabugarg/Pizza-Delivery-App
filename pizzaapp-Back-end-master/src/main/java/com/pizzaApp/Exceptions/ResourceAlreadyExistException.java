package com.pizzaApp.Exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
@ResponseStatus(value = HttpStatus.CONFLICT)
public class ResourceAlreadyExistException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    public ResourceAlreadyExistException(String message){
        super(message);
    }
    
}
