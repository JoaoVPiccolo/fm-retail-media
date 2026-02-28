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
        gap: 3,
        padding: "2rem",
        color: "white",
        width: "100%",
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
      >
        Cases
      </Typography>

      {/* Buttons Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
            sx={{
              color: "white",
              borderColor: "transparent",
              borderRadius: "0px",
              borderBottom: "1px solid white",
              backgroundColor:
                selectedCategory === category ? "#76a86fa8" : "transparent",
              fontWeight: "bold",
              fontSize: ".9vmax",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#ffffff31",
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
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 3,
          width: "100%",
          padding: "2rem",
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
