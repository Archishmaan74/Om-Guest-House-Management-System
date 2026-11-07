import baseApi from "./baseApi";
import type { ApiResponse } from "../../types/api";
import type { HomePageContent } from "../../types/home";
export const homeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomePageContent: builder.query<HomePageContent, void>({
      query: () => "/api/home",
      transformResponse: (response: ApiResponse<HomePageContent>) =>
        response.data,
    }),
  }),
});

export const { useGetHomePageContentQuery } = homeApi;