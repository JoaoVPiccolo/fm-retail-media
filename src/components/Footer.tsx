import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Divider,
  styled,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  YouTube, // Adicionado YouTube
  Email, // Alterado de ContentCopy para Email para condizer com a função mailto
  ArrowForward,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import type { ButtonProps } from "@mui/material";

const LinkButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  textAlign: "start",
  display: "flex",
  justifyContent: "start",
  boxShadow: "none",
  textTransform: "none",
  fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
  fontWeight: 400,
  padding: 0,
  minWidth: 0,
  fontFamily: "'Montserrat', sans-serif",
  transition: "all 300ms ease-in-out",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
}));

// Adicione o tipo ButtonProps para ajudar o TS

const ButtonFooter = styled(Button)<ButtonProps>({
  backgroundColor: "#75A535",
  borderRadius: 5,
  height: "clamp(2.25rem, 5vh, 2.8rem)",
  color: "white",
  padding: "0.5rem 1rem",
  fontFamily: "'Montserrat', sans-serif",
  textTransform: "none",
  textAlign: "start" as const,
  display: "flex",
  justifyContent: "space-between",
  fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
  fontWeight: 500,
  transition: "350ms",
  textDecoration: "none",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#7FA57D",
  },
});
function Footer() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511911828983?text=Ol%C3%A1!%20Estava%20navegando%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
      "_blank",
    );
  };

  const handleEmail = () => {
    window.location.href =
      "mailto:vendas@flexmedia.com.br?subject=Olá&body=Gostaria%20de%20saber%20mais%20sobre...";
  };

  return (
    <Container
      sx={{ backgroundColor: "#121212" }}
      disableGutters
      maxWidth={false}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "95%", sm: "92%", md: "88%", lg: "90%" },
          display: "flex",
          flexDirection: "column",
          p: { xs: 2, sm: 3, md: 5, lg: 6 },
          mx: "auto",
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, sm: 5, md: 4, lg: 6 },
          }}
        >
          {/* Contato & Orçamento */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: { xs: 3, md: 4 },
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 2 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  color: "#A2FFA8",
                  fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                  letterSpacing: "0.1em",
                }}
              >
                NOS CONTATE
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(1.25rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.2,
                }}
              >
                Vamos Negociar! <br /> Faça seu orçamento.
              </Typography>
            </Box>

            {/* Botão Whatsapp atualizado */}
            <ButtonFooter
              onClick={handleWhatsAppClick}
              sx={{
                minWidth: { xs: "15rem", sm: "18rem", md: "18rem" },
                color: "white",
              }}
            >
              Fazer Orçamento
              <ArrowForward sx={{ color: "black" }} />
            </ButtonFooter>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 2 },
                mt: { xs: 1.5, md: 2 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  color: "#A2FFA8",
                  fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                  letterSpacing: "0.1em",
                }}
              >
                NOS MANDE UM EMAIL
              </Typography>
              <ButtonFooter
                sx={{
                  minWidth: { xs: "15rem", sm: "18rem", md: "18rem" },
                  color: "white",
                }}
                onClick={handleEmail}
              >
                vendas@flexmedia.com.br
                {/* Ícone trocado para Email para fazer sentido com a função mailto */}
                <Email sx={{ color: "black" }} />
              </ButtonFooter>
            </Box>
          </Box>

          {/* Links & Infos */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: { xs: 4, sm: 5, md: 8, lg: 10 },
              mt: { xs: 2, md: 0 },
            }}
          >
            {/* Links */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 2 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  color: "#A2FFA8",
                  fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                  letterSpacing: "0.1em",
                }}
              >
                LINKS
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 0.75, md: 1 },
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <LinkButton>Home</LinkButton>
                </Link>
                {/* Blog removido */}
              </Box>
            </Box>

            {/* Infos */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 2 },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  color: "#A2FFA8",
                  fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                  letterSpacing: "0.1em",
                }}
              >
                INFOS
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 0.75, md: 1 },
                }}
              >
                <LinkButton>Termos de Uso</LinkButton>
                <LinkButton>Política de Privacidade</LinkButton>
                <LinkButton>Cookies</LinkButton>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          width="100%"
          my={{ xs: 3, md: 5 }}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Divider sx={{ width: "100%", borderColor: "white" }} />
        </Box>

        {/* Bottom Section */}
        <Box
          width="100%"
          display={"flex"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ xs: 2, md: 3 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "white",
              fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Copyright © 2025 Flexmedia
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/flexmedia.ind/"
              target="_blank"
              sx={{
                color: "#91CD89",
                transition: "200ms",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Instagram />
            </IconButton>

            <IconButton
              component="a"
              href="http://facebook.com/flexmedia.ind"
              target="_blank"
              sx={{
                color: "#91CD89",
                transition: "200ms",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Facebook />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.youtube.com/@flexmedia7060"
              target="_blank"
              sx={{
                color: "#91CD89",
                transition: "200ms",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <YouTube />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/@flexmedia7060"
              target="_blank"
              sx={{
                color: "#91CD89",
                transition: "200ms",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <LinkButton />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default Footer;
