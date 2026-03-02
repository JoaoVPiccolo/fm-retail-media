import { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import Case from "../../generic_components/Case";
import { casesMock } from "../../generic_components/utils/casesMock";

function FilteredCases() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    ...new Set(casesMock.map((item) => item.categoria)),
  ];
  const categoryDictionary = {
    Todos: "Todos",
    digital_signage: "Sinalização Digital",
    comunicacao_corporativa: "Comunicação Corporativa",
    gestao_de_conteudo: "Gestão de Conteúdo",
    inovacao: "Inovação",
    producao_de_video: "Produção de Vídeo",
  };

  const filteredCases =
    selectedCategory === "Todos"
      ? casesMock
      : casesMock.filter((item) => item.categoria === selectedCategory);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 2, md: 3, lg: 4 },
        p: { xs: 2, sm: 3, md: 4 },
        color: "white",
        width: "100%",
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontFamily: "'Montserrat', sans-serif",
          mb: { xs: 1, md: 2 },
        }}
      >
        Cases
      </Typography>

      {/* Buttons Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 1.5, sm: 2, md: 2.5 },
          justifyContent: "center",
          mb: { xs: 2, md: 3 },
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "4px",
              borderBottom: { xs: "2px solid white", md: "2px solid white" },
              backgroundColor:
                selectedCategory === category ? "#76a86fa8" : "transparent",
              fontWeight: 700,
              fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "none",
              padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" },
              transition: "all 300ms ease-in-out",
              ":hover": {
                backgroundColor: "#ffffff31",
                borderColor: "#76A86F",
              },
            }}
          >
            {categoryDictionary[category as keyof typeof categoryDictionary]}
          </Button>
        ))}
      </Box>

      {/* Cases Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          p: { xs: 1, md: 2 },
        }}
      >
        {filteredCases.map((caseItem) => (
          <Case
            key={caseItem.empresa}
            name={caseItem.empresa}
            image={caseItem.imagem}
            impactPhrase={caseItem.impactPhrase}
            description_1={caseItem.description_1}
            description_2={caseItem.description_2}
            title={caseItem.title}
          />
        ))}
      </Box>
    </Container>
  );
}

export default FilteredCases;
