import { useState } from "react";
import { Container } from "@mui/material";
import NavBar from "./generic_components/NavBar";
import { Box } from "@mui/material";
import videoBackground from "./generic_components/assets/videos/green_earth.mp4";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import CardsSection from "./routes/homeRoute/CardsSection";
import banner from "./routes/homeRoute/assets/bannerImage.png";
import { Divider } from "@mui/material";
import CasesSection from "./routes/homeRoute/CasesSection";
import WhyBuy from "./routes/homeRoute/WhyBuy";
import LetsTalk from "./routes/homeRoute/LetsTalk";

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
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: "10vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.62)),url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            padding: "2vmax",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "2vmax",
            }}
          >
            Mais de 120 grandes clientes
          </Typography>
          <Typography
            sx={{
              fontSize: "2vmax",
              color: "#88c280ff",
              fontWeight: "bold",
            }}
          >
            Mais de 700 cidades atendidas
          </Typography>
          <Typography
            sx={{
              fontSize: "2vmax",
              color: "#76a86f",
              fontWeight: "bold",
            }}
          >
            Mais de 13 milhões de pessoas impactadas diariamente
          </Typography>
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          padding: "2rem",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "3vmax",
              fontWeight: "700",
            }}
          >
            Cases
          </Typography>
          <Divider sx={{ borderBottom: "6px solid #76A86F", width: "30%" }} />
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          flexDirection: "column",
        }}
      >
        <CasesSection></CasesSection>
        <Box>
          <Button
            sx={{
              padding: ".8rem 1.8rem",
              background: "white",
              color: "black",
              borderRadius: "1.5rem",
              fontWeight: "bold",
              fontSize: "1vmax",
              margin: "2rem 0",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#76A86F",
                color: "white",
              },
            }}
          >
            Ver mais cases
          </Button>
        </Box>
      </Container>
      <WhyBuy></WhyBuy>
      <LetsTalk></LetsTalk>
    </>
  );
}

export default App;
