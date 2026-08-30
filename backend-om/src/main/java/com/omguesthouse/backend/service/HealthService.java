package com.omguesthouse.backend.service;

import org.springframework.stereotype.Service;

@Service
public class HealthService {
    public String getHealthStatus() {
        return "Backend is running!";
    }
}
