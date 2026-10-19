export interface RoomCategory {
  id: number;
  name: string;
  description: string;
  totalRooms: number;
  maxOccupancy: number;
  airConditioned: boolean;
  bathroomType: string;
  pricePerNight: number;
  imageUrl: string;
}
