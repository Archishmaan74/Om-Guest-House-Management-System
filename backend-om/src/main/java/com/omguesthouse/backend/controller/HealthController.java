package com.omguesthouse.backend.controller;

import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.service.HealthService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthController {

  private final HealthService healthService;

  public HealthController(HealthService healthService){
      this.healthService= healthService;
  }

    @GetMapping
    public ApiResponse<String> health(){
       String healthStatus = healthService.getHealthStatus();
       return new ApiResponse<>(
               true,
                "Health check successful",
                healthStatus
       );
    }
}
