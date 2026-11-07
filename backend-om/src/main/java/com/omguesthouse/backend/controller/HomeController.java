
package com.omguesthouse.backend.controller;

import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.entity.HomePageContent;
import com.omguesthouse.backend.service.HomePageContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    private final HomePageContentService homePageContentService;

    public HomeController(HomePageContentService homePageContentService) {
        this.homePageContentService = homePageContentService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<HomePageContent>> getHomePageContent() {

        return homePageContentService.getHomePageContent()
                .map(content -> ResponseEntity.ok(
                        new ApiResponse<>(
                                true,
                                "Home page content retrieved successfully",
                                content
                        )
                ))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
