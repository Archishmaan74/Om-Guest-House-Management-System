import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import AppLayout from "./AppLayout";
import PublicLayout from "./PublicLayout";
import theme from "./theme/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/rooms" element={<div>Rooms</div>} />
        <Route path="/rooms/:id" element={<div>Room Details</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/signup" element={<div>Sign Up</div>} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/booking" element={<div>Booking</div>} />
        <Route path="/my-bookings" element={<div>My Bookings</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
