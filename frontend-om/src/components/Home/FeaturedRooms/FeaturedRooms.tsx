import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FeaturedRoomsStyles from "./FeaturedRoomsStyles";
import { useGetRoomCategoriesQuery } from "../../../app/services/roomsApis";

const FeaturedRooms = () => {
  const { data: rooms, isLoading, isError } = useGetRoomCategoriesQuery();

  console.log(rooms);
  return (
    <FeaturedRoomsStyles>
      <Box component="section" className="rooms-section">
        <Box className="rooms-heading">
          <Box>
            <Typography variant="h4">Our Rooms</Typography>

            <Typography variant="body1" className="section-description">
              Choose from our available room types designed for a comfortable
              and relaxing stay.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/rooms"
            endIcon={<ArrowForwardOutlinedIcon />}
            variant="text"
          >
            View All Rooms
          </Button>
        </Box>

        {isLoading && <Typography role="status">Loading rooms...</Typography>}

        {isError && (
          <Typography color="error" role="alert">
            Unable to load rooms. Please try again later.
          </Typography>
        )}

        {!isLoading && !isError && rooms && rooms.length > 0 && (
          <Box className="rooms-grid">
            {rooms.map((room) => (
              <Box className="room-card" key={room.id}>
                <Box className="room-image-placeholder">
                  {room.imageUrl ? (
                    <Box
                      component="img"
                      src={room.imageUrl}
                      alt={room.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <>
                      <KingBedOutlinedIcon />
                      <Typography variant="body2">Room image</Typography>
                    </>
                  )}
                </Box>

                <Box className="room-card-content">
                  <Typography variant="h6" className="room-name">
                    {room.name}
                  </Typography>

                  <Typography variant="body2" className="room-bathroom">
                    {room.bathroomType}
                  </Typography>

                  <Box className="room-details">
                    <Box className="room-detail">
                      <PersonOutlineOutlinedIcon />
                      <Typography variant="body2">
                        {room.maxOccupancy} Guests
                      </Typography>
                    </Box>

                    <Box className="room-detail">
                      <KingBedOutlinedIcon />
                      <Typography variant="body2">
                        {room.totalRooms} Rooms
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="room-card-footer">
                    <Typography variant="h6" className="room-price">
                      ₹{room.pricePerNight.toLocaleString("en-IN")}{" "}
                      <Typography component="span" variant="body2">
                        / night
                      </Typography>
                    </Typography>

                    <Button
                      component={Link}
                      to="/rooms"
                      endIcon={<ArrowForwardOutlinedIcon />}
                      variant="contained"
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {!isLoading && !isError && rooms?.length === 0 && (
          <Typography>No rooms are currently available.</Typography>
        )}
      </Box>
    </FeaturedRoomsStyles>
  );
};

export default FeaturedRooms;
