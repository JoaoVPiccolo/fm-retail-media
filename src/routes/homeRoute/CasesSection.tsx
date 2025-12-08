import { Container } from "@mui/material";
import Case from "../../generic_components/Case";
import { casesMock } from "../../generic_components/utils/casesMock";

export default function CasesSection() {
  return (
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
      {casesMock.slice(0, 9).map((caseItem) => (
        <Case
          key={caseItem.empresa}
          name={caseItem.empresa}
          image={caseItem.imagem}
          route={caseItem.slug}
        />
      ))}
    </Container>
  );
}
