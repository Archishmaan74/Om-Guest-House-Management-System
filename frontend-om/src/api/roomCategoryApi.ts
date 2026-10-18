export interface RoomCategory {
  id: number;
  name: string;
  description: string | null;
  totalRooms: number | null;
  maxOccupancy: number | null;
  airConditioned: boolean;
  bathroomType: string | null;
  pricePerNight: number | null;
  imageUrl: string | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export async function getRoomCategories(
  signal?: AbortSignal,
): Promise<RoomCategory[]> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

  if (!baseUrl) {
    throw new Error(
      "The backend URL is not configured. Set VITE_API_BASE_URL in frontend-om/.env.local.",
    );
  }

  const response = await fetch(`${baseUrl}/rooms`, { signal });

  if (!response.ok) {
    throw new Error(`Could not load room categories (HTTP ${response.status}).`);
  }

  const result = (await response.json()) as ApiResponse<RoomCategory[]>;

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error(result.message || "The room categories response was invalid.");
  }

  return result.data;
}
