import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";

import InfoIcon from "@mui/icons-material/Info";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import About from "./About";
// import Price from "./Price";
import { CardMedia, Container, FormControl } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router";
import Plans from "./component/Plans";
import BookingSlots from "./component/BookingSlots";
import BookingDisplay from "./component/BookingDisplay";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const nav = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [menudata, setMenudata] = useState("About");

  const drawer = (
    <div>
      <Container>
        <CardMedia
          sx={{ height: 60, marginTop: 0.5 }}
          image="./img/health-gfb26566c1_1280.jpg"
          title="green iguana"
          alt="first name"
        />
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => setMenudata("About")}>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setMenudata("Price")}>
            <ListItemButton>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Plan & Price" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setMenudata("Book Slots")}>
            <ListItemButton>
              <ListItemIcon>
                <BookOnlineIcon />
              </ListItemIcon>
              <ListItemText primary="Book Slots" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setMenudata("Booking")}>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Booking" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => nav("/")}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        <CardMedia
          sx={{ height: 280, marginTop: 0.5 }}
          image="./img/0E71F4CC-089C-493B-AB84-9A47F4E7D346_1_201_a.jpeg"
          title="green iguana"
          alt="first name"
        />
        <h4>Location & Direction</h4>
        <p>
          23, Near Tim, JK road,
          <br />
          Pincode-100093
        </p>
      </Container>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton></IconButton>

          {/* <Box sx={{ '& > :not(style)': { m: 1 } }} >
      <FormControl variant="standard"> */}

          <Box sx={{ display: "flex", justifyContent: "end", width: "95%" }}>
            <AccountCircle />
            &nbsp;
            <Typography>Username</Typography>
          </Box>

          {/* </FormControl>
        </Box> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {menudata === "About" && <About />}
        {menudata === "Price" && <Plans />}
        {menudata === "Book Slots" && <BookingSlots />}
        {menudata === "Booking" && <BookingDisplay />}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
