import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import withAuth from "../../../HOC/withAuth";

function BookItem() {
  const { id } = useParams();
  const bookItemData = useLoaderData();

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        padding: "24px",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f4f6f8",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold", color: "#333", marginBottom: "16px" }}
      >
        Book Item {id}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ color: "#555", marginBottom: "8px" }}
      >
        {bookItemData.title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#777", marginBottom: "4px" }}>
        <strong>Author:</strong> {bookItemData.author}
      </Typography>
      <Typography variant="body1" sx={{ color: "#777" }}>
        <strong>Year Published:</strong> {bookItemData.year}
      </Typography>
    </Box>
  );
}

// const AuthBookItem = withAuth(BookItem);

export default BookItem;


export const bookItemLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/books/${id}`);

  if (!res.ok) {
    throw Error("Could not find book");
  }
  return res.json();
};
