package com.omguesthouse.backend.controller;

import com.omguesthouse.backend.dto.LoginRequest;
import com.omguesthouse.backend.dto.LoginResponse;
import com.omguesthouse.backend.dto.RegisterRequest;
import com.omguesthouse.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(
            @RequestBody RegisterRequest request
    ) {
        authService.register(request);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/setup-admin")
    public ResponseEntity<Void> setupAdmin(
            @RequestBody RegisterRequest request,
            @RequestHeader("X-Admin-Setup-Secret") String setupSecret
    ) {
        authService.setupAdmin(request, setupSecret);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request
    ) {
        return ResponseEntity.ok(
                authService.login(request)
        );
    }
}