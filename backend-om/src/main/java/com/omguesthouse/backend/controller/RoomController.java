package com.omguesthouse.backend.controller;


import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.entity.RoomCategory;
import com.omguesthouse.backend.service.RoomService;
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
}
