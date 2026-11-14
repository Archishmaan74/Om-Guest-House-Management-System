
package com.omguesthouse.backend.service;

import com.cloudinary.Cloudinary;
import com.omguesthouse.backend.entity.Media;
import com.omguesthouse.backend.exception.ResourceNotFoundException;
import com.omguesthouse.backend.repository.MediaRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class MediaService {

    private final Cloudinary cloudinary;
    private final MediaRepository mediaRepository;

    public MediaService(
            Cloudinary cloudinary,
            MediaRepository mediaRepository
    ) {
        this.cloudinary = cloudinary;
        this.mediaRepository = mediaRepository;
    }

    public Media uploadMedia(
            MultipartFile file,
            String resourceType,
            String resourceId
    ) throws IOException {

        Map result = cloudinary.uploader().upload(
                file.getBytes(),
                Map.of()
        );

        Media media = new Media();
        media.setPublicId((String) result.get("public_id"));
        media.setSecureUrl((String) result.get("secure_url"));
        media.setResourceType(resourceType);
        media.setResourceId(resourceId);

        return mediaRepository.save(media);
    }

    public List<Media> searchMedia(
            String resourceType,
            String resourceId
    ) {
        return mediaRepository.findByResourceTypeAndResourceId(
                resourceType,
                resourceId
        );
    }

    public void deleteMedia(Long id) throws IOException {

        Media media = mediaRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Media not found with id: " + id
                        )
                );

        cloudinary.uploader().destroy(
                media.getPublicId(),
                Map.of()
        );

        mediaRepository.delete(media);
    }
}
