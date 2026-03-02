import { Container } from "@mui/material";
import NavBar from "../../generic_components/NavBar";
import FilteredCases from "./FilteredCases";
function CaseHome() {
  return (
    <Container maxWidth={false} disableGutters>
      <NavBar />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          mt: { xs: "56px", sm: "62px", md: "70px" },
        }}
      >
        <FilteredCases />
      </Container>
    </Container>
  );
}
export default CaseHome;
