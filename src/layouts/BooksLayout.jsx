import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import withAuth from "../HOC/withAuth";

function BooksLayout() {
  // const AuthOutlet = withAuth(Outlet);
  return (
    <div>
      <Typography variant="h2" color="white">
        Books Layout
      </Typography>
      <Typography variant="body1" color="white">
        Welcome to the Books page. Here you can find all the Books you love.
      </Typography>
      <Box
        sx={{
          gap: 2,
          mt: 2,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default BooksLayout;
