import { Box, Container } from "@mui/material";
import Case from "../../generic_components/Case";
import { casesMock } from "../../generic_components/utils/casesMock";
import { CategorySwiper } from "../../components/CategorySwiper";
import { useCategories } from "../../shared/store";

export default function CasesSection() {
  const categorie = useCategories((state) => (state.categorie))

  const categoriesFiltered =
    categorie === "Todos" 
      ? casesMock 
      : casesMock?.filter((caseItem) => caseItem.categoria === categorie);

  return (
    <>
    <Box>
      <CategorySwiper>
      </CategorySwiper>
    </Box>
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "100%",
        gridTemplateRows: "repeat(3, auto)",
        overflow: "hidden",
      }}
    >
      {categoriesFiltered.slice(0, 9).map((caseItem) => (
        <Case
          key={caseItem.empresa}
          name={caseItem.empresa}
          image={caseItem.imagem}
          route={caseItem.slug}
        />
      ))}
    </Container>
    </>
  );

}
