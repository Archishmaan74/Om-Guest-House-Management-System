package com.omguesthouse.backend.service;

import com.omguesthouse.backend.entity.RoomCategory;
import com.omguesthouse.backend.repository.RoomCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    private final RoomCategoryRepository roomCategoryRepository;

    public RoomService(RoomCategoryRepository roomCategoryRepository) {
        this.roomCategoryRepository = roomCategoryRepository;
    }

    public List<RoomCategory> getAllRoomCategories() {
        return roomCategoryRepository.findAll();
    }

    public Optional<RoomCategory> getRoomCategoryById(Long id) {
        return roomCategoryRepository.findById(id);
    }
}
