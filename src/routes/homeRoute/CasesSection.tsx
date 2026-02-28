import { Box, Container } from "@mui/material";
import Case from "../../generic_components/Case";
import { casesMock } from "../../generic_components/utils/casesMock";
import { CategorySwiper } from "../../components/CategorySwiper";
import { useCategories } from "../../shared/store";

export default function CasesSection() {
  const categorie = useCategories((state) => (state.categorie))

  const categoriesFiltered = casesMock.filter((caseItem) => caseItem.categoria === categorie);

  return (
    <>
    <Box
        sx={{
            width:"100%"
        }}
    >
      <CategorySwiper>
      </CategorySwiper>
    </Box>
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "grid",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {categoriesFiltered.slice(0, 9).map((caseItem) => (
        <Case
          key={caseItem.empresa}
          name={caseItem.empresa}
          image={caseItem.imagem}
          description_1={caseItem.description_1}
          description_2={caseItem.description_2}
          impactPhrase={caseItem.impactPhrase}
          title={caseItem.title}
        />
      ))}
    </Container>
    </>
  );

}
