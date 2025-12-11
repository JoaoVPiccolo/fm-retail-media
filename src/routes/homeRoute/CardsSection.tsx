import { Container, Box, Typography, Button } from "@mui/material";
import FlipCard from "./components/FlipCard";
import { Divider } from "@mui/material";
import image_1 from "./assets/img_card1.png";
import image_2 from "./assets/img_card2.png";
import image_3 from "./assets/img_card3.png";
import image_4 from "./assets/img_card4.png";
import { casesMock } from "../../generic_components/utils/casesMock";

function getCasesByCategory(category: string) {
  return casesMock
    .filter((c) => c.categoria === category)
    .map((c) => ({ nome: c.empresa, slug: c.slug }));
}

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
        background: "transparent",
        padding: "2rem",
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Divider
          sx={{
            borderBottom: "2px solid #76A86F",
            width: "20%",
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontSize: "2.5vmax",
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "popper,sans-serif",
          }}
        >
          Soluções Flex para inovar <br />
          em seu negócio
        </Typography>
        <Divider
          sx={{
            borderBottom: "2px solid #76A86F",
            width: "20%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
          gap: 1,
        }}
      >
        <FlipCard
          title="Digital Signage"
          cases={getCasesByCategory("digital_signage")}
          image={image_1}
        />
        <FlipCard
          title="Comunicacao Corporativa"
          cases={getCasesByCategory("comunicacao_corporativa")}
          image={image_2}
        />
        <FlipCard
          title="Gestao de Conteudo"
          cases={getCasesByCategory("gestao_de_conteudo")}
          image={image_3}
        />
        <FlipCard
          title="Inovacao"
          cases={getCasesByCategory("inovacao")}
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
