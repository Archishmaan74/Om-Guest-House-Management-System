
package com.omguesthouse.backend.controller;

import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.entity.RoomCategory;
import com.omguesthouse.backend.exception.ResourceNotFoundException;
import com.omguesthouse.backend.service.RoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<ApiResponse<RoomCategory>> getRoomCategoryById(
            @PathVariable Long id) {

        RoomCategory category = roomService.getRoomCategoryById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Room category not found with id: " + id
                ));

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Room category retrieved successfully",
                        category
                )
        );
    }
}
