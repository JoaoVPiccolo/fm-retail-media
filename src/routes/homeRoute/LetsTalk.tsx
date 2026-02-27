import { Container, Box, Typography, TextField, Button } from "@mui/material";
import footerImg from "./assets/formsImage.png";
// Padronizando os TextFields para manter consistência visual
const textFieldStyles = {
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "0.5rem",
  display: "flex",
  background: "transparent",
  borderBottom: "2px solid white",
  "& label.Mui-focused": {
    color: "white",
  },
};

function LetsTalk() {
  return (
    <Container
      maxWidth={false}
      sx={{
        color: "white",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        marginTop: "3rem",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "3vmax",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Vamos conversar
        </Typography>
        <Typography
          sx={{
            fontSize: "1.6vmax",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Projetos novos e desafiadores são com a gente!
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderBottom: "6px solid #76A86F",
          width: "10%",
          marginBottom: "2rem",
        }}
      ></Box>

      {/* Form and Contact Section */}
    </Container>
  );
}

export default LetsTalk;
