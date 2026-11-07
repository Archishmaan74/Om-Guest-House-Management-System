
package com.omguesthouse.backend.service;

import com.omguesthouse.backend.entity.HomePageContent;
import com.omguesthouse.backend.repository.HomePageContentRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class HomePageContentService {

    private final HomePageContentRepository homePageContentRepository;

    public HomePageContentService(
            HomePageContentRepository homePageContentRepository) {
        this.homePageContentRepository = homePageContentRepository;
    }

    public Optional<HomePageContent> getHomePageContent() {
        return homePageContentRepository.findAll()
                .stream()
                .findFirst();
    }
}
