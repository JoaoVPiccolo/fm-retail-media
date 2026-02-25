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
    fontSize: "1rem",
    fontWeight: 300,
    padding: 0,
    minWidth: 0,
    fontFamily: "Montserrat",
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
    height: "2.8rem",
    color: "white",
    padding: "0.5rem 1rem",
    fontFamily: "Montserrat",
    textTransform: "none",
    textAlign: "start" as const,
    display: "flex",
    justifyContent: "space-between",
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
          maxWidth: "88%",
          display: "flex",
          flexDirection: "column",
          p: { xs: "2rem 1rem", sm: "3rem", md: "5rem" },
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 6, md: 4 }, // Aumentei o gap no mobile para separar bem as seções
          }}
        >
          {/* Contato & Orçamento */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 4,
              flex: 1, // Ocupa o espaço disponível
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  color: "#A2FFA8",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  letterSpacing: "1px",
                }}
              >
                NOS CONTATE
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  width: { xs: "100%", md: "100%" },
                  fontWeight: 600,
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
                minWidth: { xs: "18rem", sm: "18rem", md: "18rem" },
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
                gap: 2,
                mt: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  color: "#A2FFA8",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  letterSpacing: "1px",
                }}
              >
                NOS MANDE UM EMAIL
              </Typography>
              <ButtonFooter
                sx={{
                  minWidth: { xs: "18rem", sm: "18rem", md: "18rem" },
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
              flexDirection: "row", // Garante que fiquem lado a lado
              justifyContent: "flex-start", // Alinha ao início para evitar buracos
              alignItems: "flex-start", // Garante alinhamento no topo
              gap: { xs: 5, md: 10 }, // Espaçamento fixo entre as colunas Links e Infos
              mt: { xs: 2, md: 0 },
            }}
          >
            {/* Links */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  color: "#A2FFA8",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  letterSpacing: "1px",
                }}
              >
                LINKS
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  color: "#A2FFA8",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  letterSpacing: "1px",
                }}
              >
                INFOS
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
          my={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Divider sx={{ width: "100%", borderColor: "white"}} />
        </Box>

        {/* Bottom Section */}
        <Box
          width="100%"
          display={"flex"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography
            fontFamily={"Montserrat"}
            sx={{ color: "white", fontSize: "0.9rem" }}
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
