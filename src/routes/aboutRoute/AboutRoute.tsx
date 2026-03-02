import { Box, Typography, Container, Divider } from "@mui/material";
import NavBar from "../../generic_components/NavBar";
import Footer from "../../components/Footer";

function AboutRoute() {
  return (
    <>
      <NavBar />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "#121212",
          mt: { xs: "56px", sm: "62px", md: "70px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: 3,
        }}
      >
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2%",
            gap: 5,
          }}
        >
          <Divider sx={{ borderColor: "#2A2A2A", flex: 3 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: ".5rem",
              flex: { xs: 4, lg: 2 },
              gap: { xs: 1.6, md: 0 },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "clamp(1.75rem, 8vmin, 3rem)",
                  sm: "clamp(2rem, 6vmin, 3rem)",
                  md: "clamp(2.5rem, 4vmax, 3.5rem)",
                  lg: "clamp(2.8rem, 3vmax, 3.8rem)",
                },
                fontFamily: "Montserrat",
                textAlign: "center",
                width: "100%",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              Sobre{" "}
              <span
                style={{
                  backgroundColor: "#7AAD73",
                  padding: ".6rem",
                  borderRadius: ".4rem",
                  fontWeight: "700",
                  marginLeft: "5%",
                  color: "#FFFFFF",
                }}
              >
                Nós
              </span>
            </Typography>

            <Divider
              sx={{
                borderColor: "#2A2A2A",
                width: "100%",
                display: { xs: "block", md: "none" },
              }}
            />
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A", flex: 3 }} />
        </Box>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
          background: "#121212",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "95%", md: "45%" },
              gap: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "justify",
              zIndex: 1,
            }}
          >
            {[
              `A Flexmedia é uma empresa especializada em soluções tecnológicas de alta confiabilidade, com foco em fibra óptica, transmissão de dados, comunicação e automação...`,
              `Nascida com inovação no DNA, a Flexmedia começou desenvolvendo conversores de vídeo analógico pioneiros no Brasil...`,
              `Nas últimas duas décadas, a Flexmedia continuou evoluindo e diversificando suas soluções...`,
            ].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: {
                    xs: "clamp(1rem, 2.5vmin, 1.25rem)",
                    md: "clamp(1.1rem, 1.5vmax, 1.3rem)",
                    lg: "clamp(1.15rem, 1.2vmax, 1.4rem)",
                  },
                  color: "#FFFFFF",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 3, md: 4 },
              p: { xs: 2, md: 4 },
            }}
          >
            <StatsCard number="2003" description="Fundação" />
            <StatsCard number="+8000" description="Clientes" />
            <StatsCard number="+700" description="Cidades Atendidas" />
            <StatsCard
              number="+13M"
              description="Pessoas Impactadas Diariamente"
            />
          </Box>
        </Container>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          background: "#121212",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{ maxWidth: "95%", mx: "auto" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 3, md: 5 },
              mb: { xs: 4, md: 8 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Montserrat",
                fontSize: {
                  xs: "clamp(1.75rem, 6vmin, 2.5rem)",
                  md: "clamp(2rem, 3vmax, 2.8rem)",
                },
                color: "#FFFFFF",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Por que escolher a Flexmedia?
            </Typography>

            <Divider
              sx={{
                borderColor: "#7AAD73",
                backgroundColor: "#7AAD73",
                height: "4px",
                width: { xs: "60px", md: "100px" },
                borderRadius: 1,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            <ValueCard
              title="Experiência"
              description="Mais de 20 anos de atuação no mercado..."
            />
            <ValueCard
              title="Inovação"
              description="Tecnologia de ponta aliada a pesquisa constante..."
            />
            <ValueCard
              title="Qualidade"
              description="Produtos e serviços que atendem aos mais rigorosos padrões..."
            />
            <ValueCard
              title="Suporte 24/7"
              description="Equipe técnica dedicada sempre disponível..."
            />
            <ValueCard
              title="Customização"
              description="Soluções flexíveis adaptadas às necessidades..."
            />
            <ValueCard
              title="Parceria"
              description="Agimos como parceiros do seu negócio..."
            />
          </Box>
        </Container>
      </Container>

      <Footer />
    </>
  );
}

function StatsCard({
  number,
  description,
}: {
  number: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "300px",
        p: { xs: 3, md: 4 },
        backgroundColor: "#7AAD7310",
        border: "2px solid #7AAD73",
        borderRadius: 1,
        gap: 1.5,
        transition: "all 300ms ease-in-out",
        "&:hover": {
          backgroundColor: "#7AAD7320",
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px #7AAD7330",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "clamp(2rem, 5vmax, 3.5rem)",
          fontWeight: 700,
          color: "#7AAD73",
          lineHeight: 1,
        }}
      >
        {number}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "clamp(0.95rem, 1.5vmin, 1.15rem)",
          fontWeight: 600,
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: { xs: 2.5, md: 3.5 },
        backgroundColor: "#7AAD7308",
        border: "1px solid #7AAD7320",
        borderRadius: 1,
        transition: "all 300ms ease-in-out",
        "&:hover": {
          backgroundColor: "#7AAD7315",
          borderColor: "#7AAD7350",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "clamp(1.1rem, 2vmin, 1.4rem)",
          fontWeight: 700,
          color: "#7AAD73",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "clamp(0.95rem, 1.5vmin, 1.1rem)",
          color: "#FFFFFF",
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default AboutRoute;
