package com.omguesthouse.backend.repository;

import com.omguesthouse.backend.entity.RoomCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomCategoryRepository extends JpaRepository<RoomCategory, Long> {
}
