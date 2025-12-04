import { Container, Box, Typography } from "@mui/material";
import FlipCard from "./components/FlipCard";

function CardsSection() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        padding: "2rem",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "3vmax",
          fontWeight: "700",
          marginBottom: "4vmax",
          textAlign: "center",
          fontFamily: "popper,sans-serif",
        }}
      >
        Soluções Flex para inovar em seu negócio
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 3,
        }}
      >
        <FlipCard title="Varejo" links={["#section1", "#section2"]} />
        <FlipCard title="Corporativo" links={["#section3", "#section4"]} />
        <FlipCard
          title="Comunicação Interna"
          links={["#section5", "#section6"]}
        />
        <FlipCard
          title="Phygital Experiences"
          links={["#section7", "#section8"]}
        />
      </Box>
    </Container>
  );
}

export default CardsSection;
