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
        Filtrar Cases
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
              textTransform: "none",
              ":hover": {
                backgroundColor: "#ffffff31",
              },
            }}
          >
            {category}
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
            route={caseItem.slug}
          />
        ))}
      </Box>
    </Container>
  );
}

export default FilteredCases;
