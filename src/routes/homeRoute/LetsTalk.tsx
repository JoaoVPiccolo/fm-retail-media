import { Container, Box, Typography} from "@mui/material";

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
