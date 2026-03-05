import { Container, Box, Typography, Divider } from "@mui/material";
import { useEffect } from "react";
import NavBar from "../../generic_components/NavBar";
import Footer from "../../components/Footer";

function ContactRoute() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/43643994.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Detecta submissão do formulário HubSpot com MutationObserver
  useEffect(() => {
    let observer: MutationObserver | null = null;
    let checkInterval: ReturnType<typeof setInterval> | null = null;

    const setupObserver = () => {
      const formContainer = document
        .querySelector(".hs-form-frame")
        ?.closest("div");
      if (!formContainer) return;

      observer = new MutationObserver(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
      });

      observer.observe(formContainer, {
        subtree: true,
        childList: true,
        attributes: true,
      });
    };

    // Tenta configurar o observer após HubSpot carregar
    checkInterval = setInterval(() => {
      if (document.querySelector(".hs-form-frame")) {
        setupObserver();
        if (checkInterval) clearInterval(checkInterval);
      }
    }, 500);

    // Timeout de segurança
    setTimeout(() => {
      if (checkInterval) clearInterval(checkInterval);
      if (!observer) setupObserver();
    }, 5000);

    return () => {
      if (observer) observer.disconnect();
      if (checkInterval) clearInterval(checkInterval);
    };
  }, []);

  return (
    <>
      <NavBar />

      <Container
        disableGutters
        maxWidth={false}
        sx={{
          background: "#0A0A0A",
          minHeight: "90vh",
          width: "100%",
          mt: { xs: "60px", sm: "70px" },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            maxWidth: "95%",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            paddingTop: { xs: "25%", sm: "15%", md: "10%", lg: "0%" },
            paddingBottom: { xs: "10%", md: "8%" },
          }}
        >
          {/* Título */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "clamp(2rem, 5vmax, 3.5rem)",
                background: "#7AAD73",
                borderRadius: 2,
                padding: ".2rem .8rem",
                color: "#FFFFFF",
              }}
            >
              Nos
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "clamp(2rem, 5vmax, 3.5rem)",
                color: "#FFFFFF",
              }}
            >
              Contate
            </Typography>
          </Box>

          {/* Dividers */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: 2,
            }}
          >
            <Divider sx={{ flex: 1, borderColor: "#2A2A2A" }} />
            <Divider sx={{ flex: 5, borderColor: "#2A2A2A" }} />
          </Box>

          {/* Conteúdo */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              width: "100%",
              gap: { xs: 6, lg: 8 },
              justifyContent: "space-between",
            }}
          >
            {/* Coluna esquerda */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: {
                    xs: "clamp(1.25rem, 5vmin, 2rem)",
                    md: "clamp(1.75rem, 3vmax, 2.8rem)",
                  },
                  color: "#FFFFFF",
                  lineHeight: 1.3,
                }}
              >
                Email, ligue ou preencha o formulário. Nos contate da forma que
                preferir.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {[
                  {
                    label: "Email",
                    value: "vendas@flexmedia.com.br",
                    href: "mailto:vendas@flexmedia.com.br",
                  },
                  {
                    label: "Telefone",
                    value: "(11) 5535-0050",
                    href: "tel:+551155350050",
                  },
                  {
                    label: "Suporte Técnico",
                    value: "suporte@flexmedia.com.br",
                    href: "mailto:suporte@flexmedia.com.br",
                  },
                ].map((item) => (
                  <Box key={item.label}>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "1.2rem",
                        color: "#7AAD73",
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Typography
                      component="a"
                      href={item.href}
                      sx={{
                        fontFamily: "Montserrat",
                        fontSize: "1.1rem",
                        color: "#7AAD73",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#98C892",
                        },
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Coluna direita - HubSpot Form */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 1,
                border: "1px solid #7AAD73",
                p: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Montserrat",
                  color: "#0A0A0A",
                  mb: 3,
                }}
              >
                Envie sua mensagem
              </Typography>

              {/* HubSpot Embed */}
              <div
                className="hs-form-frame"
                data-region="na1"
                data-form-id="0ac61131-b5f1-4487-980e-efc7efcf9e99"
                data-portal-id="43643994"
              />
            </Box>
          </Box>
        </Container>
      </Container>

      <Footer />
    </>
  );
}

export default ContactRoute;
