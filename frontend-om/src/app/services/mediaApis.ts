import baseApi from "./baseApi";
import type { ApiResponse } from "../../types/api";
import type { Media } from "../../types/media";

export const mediaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMedia: builder.query<Media[], string>({
      query: (resourceType) => ({
        url: "/media",
        params: { resourceType },
      }),
      transformResponse: (response: ApiResponse<Media[]>) => response.data,
      providesTags: ["Media"],
    }),
  }),
});

export const { useGetMediaQuery } = mediaApi;
