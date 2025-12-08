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
        backgroundColor: "black",
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          width: "100%",
          maxWidth: "80%",
        }}
      >
        {/* Form Section */}
        <Box
          sx={{
            backgroundColor: "#7ADAA6",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TextField
            label="Nome"
            variant="standard"
            fullWidth
            InputLabelProps={{
              style: { textAlign: "center", width: "100%", fontWeight: "bold" },
              shrink: false, // impede o label de subir
            }}
            InputProps={{ disableUnderline: true }}
            sx={textFieldStyles}
          />
          <TextField
            label="E-mail"
            variant="standard"
            fullWidth
            InputLabelProps={{
              style: { textAlign: "center", width: "100%", fontWeight: "bold" },
              shrink: false,
            }}
            InputProps={{ disableUnderline: true }}
            sx={textFieldStyles}
          />
          <TextField
            label="Telefone"
            variant="standard"
            fullWidth
            InputLabelProps={{
              style: { textAlign: "center", width: "100%", fontWeight: "bold" },
              shrink: false,
            }}
            InputProps={{ disableUnderline: true }}
            sx={textFieldStyles}
          />
          <TextField
            label="Mensagem"
            variant="standard"
            multiline
            rows={2}
            fullWidth
            InputLabelProps={{
              style: { textAlign: "center", width: "100%", fontWeight: "bold" },
              shrink: false,
            }}
            InputProps={{ disableUnderline: true }}
            sx={textFieldStyles}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              fontWeight: "bold",
              padding: "0.5rem 2rem",
              borderRadius: "4px",
              alignSelf: "center",
            }}
          >
            Enviar
          </Button>
          <Box>
            <Typography
              sx={{
                fontSize: "1vmax",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginTop: "1rem",
                color: "black",
                fontWeight: "bold",
              }}
            >
              E-mail:
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2vmax",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              contato@flexmeda.com.br
            </Typography>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.69)), url(${footerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "2rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.6vmax",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
            }}
          >
            R. Ática, 583 - SP, 04634-042
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2vmax",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            - Campo Belo, São Paulo
          </Typography>
          <Typography
            sx={{
              fontSize: "1.6vmax",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              color: "#7ADAA6",
            }}
          >
            (11) 5535-0050
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LetsTalk;
