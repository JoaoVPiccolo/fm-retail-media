import { Container, Box, Typography, Button } from "@mui/material";
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
          marginTop: "12vh",
        }}
      >
        <FilteredCases />
      </Container>
    </Container>
  );
}
export default CaseHome;
