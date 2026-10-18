package com.omguesthouse.backend.controller;


import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.entity.RoomCategory;
import com.omguesthouse.backend.service.RoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping
    public ApiResponse<List<RoomCategory>> getAllRoomCategories() {
        return new ApiResponse<>(
                true,
                "Room categories retrieved successfully",
                roomService.getAllRoomCategories()
        );
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ApiResponse<RoomCategory>> getRoomCategoryById(@PathVariable Long id) {
        Optional<RoomCategory> category = roomService.getRoomCategoryById(id);

        if (category.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Room category retrieved successfully",
                        category.get()
                )
        );
    }
}
