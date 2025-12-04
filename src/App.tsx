import { useState } from "react";
import { Container } from "@mui/material";
import NavBar from "./generic_components/NavBar";
import { Box } from "@mui/material";
import videoBackground from "./generic_components/assets/videos/green_earth.mp4";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import CardsSection from "./routes/homeRoute/CardsSection";
function App() {
  const ButtonStyled = styled(Button)({
    backgroundColor: "#b2c535",
    color: "black",
    fontWeight: "bold",
    fontSize: ".8vmax",
    margin: "1vmax",
    padding: "1vmax 2vmax",
    borderRadius: "1.8rem",
    textTransform: "none",
    ":hover": {
      color: "white",
      backgroundColor: "black",
    },
  });
  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
        }}
      >
        <Box
          component="video"
          src={videoBackground}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
            textAlign: "center",
            px: 3,
          }}
        >
          <Typography>
            <h1
              style={{
                fontSize: "4vmax",
                fontWeight: "bold",
                textTransform: " uppercase",
                color: "white",
              }}
            >
              Sinalização Digital
            </h1>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
            }}
          >
            <h2
              style={{
                fontSize: "2vmax",
                fontWeight: "bold",
                color: "#A2FFA8",
              }}
            >
              Do varejo
            </h2>
            <h2
              style={{
                fontSize: "2vmax",
                fontWeight: "bold",
                color: "#A2FFA8",
              }}
            >
              Ao Corporativo
            </h2>
          </Typography>
          <Box>
            <ButtonStyled>Peça uma Proposta</ButtonStyled>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                fontWeight: "bold",
                fontSize: ".8vmax",
                margin: "1vmax",
                padding: "1vmax 2vmax",
                borderRadius: "1.8rem",
                textTransform: "none",
                ":hover": {
                  color: "white",
                  backgroundColor: "black",
                  border: "2px solid black",
                },
              }}
            >
              Conheça nossos cases
            </Button>
          </Box>
        </Box>
      </Container>
      <CardsSection></CardsSection>
    </>
  );
}

export default App;
