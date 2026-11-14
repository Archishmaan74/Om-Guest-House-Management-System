package com.omguesthouse.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MediaUploadRequest {

    private String file;
    private String resourceType;
    private String resourceId;
}
