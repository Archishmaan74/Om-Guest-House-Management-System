package com.omguesthouse.backend.controller;

import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.dto.MediaUploadRequest;
import com.omguesthouse.backend.entity.Media;
import com.omguesthouse.backend.service.MediaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/media")
public class MediaController {

    private final MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Media>> uploadMedia(
            @RequestBody MediaUploadRequest request
    ) throws IOException {

        Media media = mediaService.uploadMedia(
                request.getFile(),
                request.getResourceType(),
                request.getResourceId()
        );

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Media uploaded successfully",
                        media
                )
        );
    }

    @GetMapping
    public ApiResponse<List<Media>> getMedia(
            @RequestParam String resourceType,
            @RequestParam String resourceId
    ) {

        List<Media> media = mediaService.searchMedia(
                resourceType,
                resourceId
        );

        return new ApiResponse<>(
                true,
                "Media retrieved successfully",
                media
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteMedia(
            @PathVariable Long id
    ) throws IOException {

        mediaService.deleteMedia(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Media deleted successfully",
                        null
                )
        );
    }
}
