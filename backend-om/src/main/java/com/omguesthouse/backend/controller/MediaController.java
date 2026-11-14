
package com.omguesthouse.backend.controller;

import com.omguesthouse.backend.dto.ApiResponse;
import com.omguesthouse.backend.entity.Media;
import com.omguesthouse.backend.service.MediaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/media")
public class MediaController {

    private final MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Media>> uploadMedia(
            @RequestParam("file") MultipartFile file,
            @RequestParam String resourceType,
            @RequestParam String resourceId
    ) throws IOException {

        Media media = mediaService.uploadMedia(
                file,
                resourceType,
                resourceId
        );

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Media uploaded successfully",
                        media
                )
        );
    }

    @PostMapping("/search")
    public ApiResponse<List<Media>> searchMedia(
            @RequestBody Map<String, String> request
    ) {

        List<Media> media = mediaService.searchMedia(
                request.get("resourceType"),
                request.get("resourceId")
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
