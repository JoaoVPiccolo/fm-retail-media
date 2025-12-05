import { Container, Box, Typography, Button } from "@mui/material";
import FlipCard from "./components/FlipCard";
import { Divider } from "@mui/material";
import image_1 from "./assets/img_card1.png";
import image_2 from "./assets/img_card2.png";
import image_3 from "./assets/img_card3.png";
import image_4 from "./assets/img_card4.png";

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
        gap: 5,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "3vmax",
          fontWeight: "700",
          textAlign: "center",
          fontFamily: "popper,sans-serif",
        }}
      >
        Soluções Flex para inovar em seu negócio
      </Typography>
      <Box
        sx={{
          background: "gray",
          width: "6%",
        }}
      >
        <Divider sx={{ borderBottom: "6px solid #76A86F" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 3,
        }}
      >
        <FlipCard
          title="Varejo"
          links={["#section1", "#section2"]}
          image={image_1}
        />
        <FlipCard
          title="Corporativo"
          links={["#section3", "#section4"]}
          image={image_2}
        />
        <FlipCard
          title="Comunicação Interna"
          links={["#section5", "#section6"]}
          image={image_3}
        />
        <FlipCard
          title="Phygital Experiences"
          links={["#section7", "#section8"]}
          image={image_4}
        />
      </Box>
      <Button
        sx={{
          background: "white",
          color: "black",
          padding: ".8rem 2.4rem",
          borderRadius: "2rem",
          textTransform: "none",
          fontSize: "1vmax",
          fontWeight: "bold",
          "&:hover": {
            background: "#76A86F",
          },
        }}
      >
        Descubra Mais
      </Button>
    </Container>
  );
}

export default CardsSection;
