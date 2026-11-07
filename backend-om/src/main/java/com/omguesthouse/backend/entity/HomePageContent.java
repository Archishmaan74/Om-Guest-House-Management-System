
package com.omguesthouse.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "home_page_content")
public class HomePageContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String heroImageUrl;

    private String aboutImageUrl;

    private String assiGhatImageUrl;

    private String gangaGhatsImageUrl;

    private String templeImageUrl;

    private String varanasiImageUrl;

    public HomePageContent() {}
}
