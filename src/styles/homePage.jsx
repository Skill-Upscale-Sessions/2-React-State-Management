import { Box, styled } from "@mui/material";
import { Colors, theme } from "../theme";

export const HomepageContainerDarkBackground =
  styled(Box)(({ theme, height }) => ({
    height: "100vh",
    width: "100vw",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    scrollSnapAlign: "center",
    // border: "3px solid red",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: height ? height : "120vh",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  export const ContentSection = styled(Box)(
    ({ position, theme, reverse }) => ({
      display: "flex",
      flexDirection: "row",
      width: "100%",
      position: "relative",
      justifyContent:
        position === "middle"
          ? "center"
          : "flex-start",
      gap: "8%",
      alignItems: "center",
      padding: "0px 5%",
      zIndex: 0,
      // border: "3px solid green",
      [theme.breakpoints.down("md")]: {
        flexDirection: reverse ? "column-reverse" : "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "0px",
        padding: "20px",
      },
    })
  );

export const ImageContainer = styled(Box)(
    ({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // border: "3px solid blue",
        [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        },
    })
    );