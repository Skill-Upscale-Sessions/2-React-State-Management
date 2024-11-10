import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function SeriesLayout() {
  const style = ({ isActive }) => ({
    color: isActive ? "green" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <div>
      <Typography variant="h2" color="white">SeriesLayout</Typography>
      <Typography variant="body1" color="white">
        Welcome to the Series page. Here you can find all the series you love.
      </Typography>

      <nav>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            mt={2} 
        >
            <Button variant="contained" color="neutral" >
          <NavLink to="tv" style={style}>
            TV Series
          </NavLink>
            </Button>
            <Button variant="contained" color="neutral">
          <NavLink to="anime" style={style}>
            Anime Series
          </NavLink>
            </Button>
        </Box>
      </nav>
      <Outlet />
    </div>
  );
}

export default SeriesLayout;
