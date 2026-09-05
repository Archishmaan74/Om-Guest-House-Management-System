package com.omguesthouse.backend.exception;

import com.omguesthouse.backend.dto.ApiResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ApiResponse<?> handleException(Exception e) {
        return new ApiResponse<>(
                false,
                e.getMessage(),
                null
        );
    }
}
