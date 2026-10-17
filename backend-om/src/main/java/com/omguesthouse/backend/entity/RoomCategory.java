package com.omguesthouse.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "room_categories")
public class RoomCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private Integer totalRooms;

    private Integer maxOccupancy;

    private boolean airConditioned;

    private String bathroomType;

    private Integer pricePerNight;

    private String imageUrl;

    public RoomCategory() {}
}
