
package com.omguesthouse.backend.repository;

import com.omguesthouse.backend.entity.HomePageContent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomePageContentRepository
        extends JpaRepository<HomePageContent, Long> {
}
