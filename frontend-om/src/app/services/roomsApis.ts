import baseApi from "./baseApi";
import type { ApiResponse } from "../../types/api";
import type { RoomCategory } from "../../types/room";

export const roomsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoomCategories: builder.query<RoomCategory[], void>({
      query: () => "/rooms",
      transformResponse: (response: ApiResponse<RoomCategory[]>) =>
        response.data,
      providesTags: ["Rooms"],
    }),

    getRoomCategoryById: builder.query<RoomCategory, number>({
      query: (id) => `/rooms/${id}`,
      transformResponse: (response: ApiResponse<RoomCategory>) => response.data,
      providesTags: ["Rooms"],
    }),
  }),
});

export const { useGetRoomCategoriesQuery, useGetRoomCategoryByIdQuery } =
  roomsApi;
