
package com.omguesthouse.backend.repository;

import com.omguesthouse.backend.entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MediaRepository extends JpaRepository<Media, Long> {

    List<Media> findByResourceTypeAndResourceId(
            String resourceType,
            String resourceId
    );
}
