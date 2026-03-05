import { Container } from "@mui/material";
import Footer from "./components/Footer";
import NavBar from "./generic_components/NavBar";
import { Box } from "@mui/material";
import videoBackground from "./generic_components/assets/videos/green_earth.mp4";
import { Typography } from "@mui/material";
import banner from "./routes/homeRoute/assets/bannerImage.png";
import { Divider } from "@mui/material";
import CasesSection from "./routes/homeRoute/CasesSection";
import WhyBuy from "./routes/homeRoute/WhyBuy";
import LetsTalk from "./routes/homeRoute/LetsTalk";
import TextType from "./generic_components/reactBits/TextType/TextType";

function App() {
  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          src={videoBackground}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        ></Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
            textAlign: "center",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography component="div">
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "white",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              <TextType
                text={[
                  "Sinalização Digital",
                  "Transforme olhares em compras.",
                  "Sua loja mais moderna em 24h.",
                  "A oferta certa, no momento certo.",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="●"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
              />
            </h1>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3, md: 4 },
              mt: { xs: 2, md: 3 },
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#A2FFA8",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Do varejo
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#A2FFA8",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Ao Corporativo
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: { xs: "auto", md: "20vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3, md: 4 },
          gap: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Nossos Segmentos
          </Typography>
          <Divider
            sx={{
              borderBottom: "4px solid #76A86F",
              width: { xs: "80px", md: "120px" },
            }}
          />
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CasesSection></CasesSection>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          pt: { xs: 3, md: 4 },
          minHeight: "auto",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.62)),url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Mais de 5000 clientes atendidas
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#88c280ff",
              fontWeight: "bold",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Projetos feitos sob medida
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#76a86f",
              fontWeight: "bold",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Estamos presentes em todos os 26 estados Brasileiros
          </Typography>
        </Box>
      </Container>
      <WhyBuy></WhyBuy>
      <LetsTalk></LetsTalk>
      <Footer></Footer>
    </>
  );
}

export default App;
