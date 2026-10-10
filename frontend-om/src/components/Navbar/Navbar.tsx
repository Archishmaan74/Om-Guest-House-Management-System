import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import StyledNavbar from "./NavbarStyles";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <StyledNavbar>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar className="navbar-toolbar" disableGutters>
          <Link
            to="/"
            className="navbar-brand"
            aria-label="OM Guest House home"
          >
            <Box className="navbar-logo">
              <ApartmentOutlinedIcon />
            </Box>

            <Box className="navbar-brand-copy">
              <Typography component="span" className="navbar-brand-name">
                OM Guest House
              </Typography>
              <Typography component="span" className="navbar-brand-subtitle">
                Comfort. Care. Hospitality.
              </Typography>
            </Box>
          </Link>

          <Box
            component="nav"
            className="navbar-navigation"
            aria-label="Main navigation"
          >
            <NavLink to="/" end className="navbar-link">
              <HomeOutlinedIcon />
              <span>Home</span>
            </NavLink>

            <NavLink to="/rooms" className="navbar-link">
              <BedOutlinedIcon />
              <span>Rooms</span>
            </NavLink>

            <NavLink to="/about" className="navbar-link">
              <InfoOutlinedIcon />
              <span>About</span>
            </NavLink>

            <NavLink to="/contact" className="navbar-link">
              <PhoneOutlinedIcon />
              <span>Contact</span>
            </NavLink>
          </Box>

          <Box className="navbar-actions">
            <IconButton
              className="navbar-theme-button"
              aria-label="Light and dark mode (coming soon)"
              title="Light and dark mode"
              disabled
            >
              <LightModeOutlinedIcon className="theme-light-icon" />
              <DarkModeOutlinedIcon className="theme-dark-icon" />
            </IconButton>

            <Button
              component={Link}
              to="/login"
              className="navbar-login-button"
              startIcon={<LoginOutlinedIcon />}
            >
              Login
            </Button>

            <Button
              component={Link}
              to="/signup"
              className="navbar-signup-button"
              startIcon={<PersonAddAlt1OutlinedIcon />}
            >
              Sign Up
            </Button>
          </Box>

          <Box className="navbar-mobile-actions">
            <IconButton
              className="navbar-theme-button"
              aria-label="Light and dark mode (coming soon)"
              title="Light and dark mode"
              disabled
            >
              <LightModeOutlinedIcon className="theme-light-icon" />
              <DarkModeOutlinedIcon className="theme-dark-icon" />
            </IconButton>

            <IconButton
              className="navbar-menu-button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
        className="navbar-drawer"
        ModalProps={{ keepMounted: true }}
      >
        <Box className="drawer-header">
          <Link to="/" className="drawer-brand" onClick={closeDrawer}>
            <Box className="navbar-logo">
              <ApartmentOutlinedIcon />
            </Box>
            <Typography className="navbar-brand-name">
              OM Guest House
            </Typography>
          </Link>

          <IconButton onClick={closeDrawer} aria-label="Close navigation menu">
            <CloseOutlinedIcon />
          </IconButton>
        </Box>

        <Box
          component="nav"
          className="drawer-navigation"
          aria-label="Mobile navigation"
        >
          <NavLink to="/" end className="drawer-nav-link" onClick={closeDrawer}>
            <HomeOutlinedIcon />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/rooms"
            className="drawer-nav-link"
            onClick={closeDrawer}
          >
            <BedOutlinedIcon />
            <span>Rooms</span>
          </NavLink>

          <NavLink
            to="/about"
            className="drawer-nav-link"
            onClick={closeDrawer}
          >
            <InfoOutlinedIcon />
            <span>About</span>
          </NavLink>

          <NavLink
            to="/contact"
            className="drawer-nav-link"
            onClick={closeDrawer}
          >
            <PhoneOutlinedIcon />
            <span>Contact</span>
          </NavLink>
        </Box>

        <Box className="drawer-theme-placeholder">
          <LightModeOutlinedIcon />
          <Typography component="span">Light / Dark Mode</Typography>
          <DarkModeOutlinedIcon />
        </Box>

        <Box className="drawer-actions">
          <Button
            component={Link}
            to="/login"
            className="navbar-login-button"
            startIcon={<LoginOutlinedIcon />}
            onClick={closeDrawer}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/signup"
            className="navbar-signup-button"
            startIcon={<PersonAddAlt1OutlinedIcon />}
            onClick={closeDrawer}
          >
            Sign Up
          </Button>
        </Box>
      </Drawer>
    </StyledNavbar>
  );
};

export default Navbar;
