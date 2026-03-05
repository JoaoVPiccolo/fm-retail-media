import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/icons/Logo_fundo escuro.png";
import logoSimbulo from "./assets/icons/Simbolo_fundo escuro.png";

function NavBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Contato", path: "/contato" },
  ];

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          display: "flex",
          width: "100%",
          minHeight: { xs: "60px", md: "80px" },
          alignItems: "center",
          justifyContent: "space-between",
          top: 0,
          left: 0,
          zIndex: 1300,
          backgroundColor: "#111111",
          padding: { xs: "0 16px", md: "0 40px" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* LOGO */}
        <Box sx={{ width: { xs: "120px", sm: "150px", md: "300px" } }}>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100%", display: "block" }}
            />
          </Link>
        </Box>

        {/* DESKTOP NAV & ACTIONS */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: { md: 2, lg: 4 } }}
        >
          {/* Links de Navegação (Escondidos no Mobile) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={Link}
                to={link.path}
                sx={{
                  color: isActive(link.path) ? "#76A86F" : "white",
                  backgroundColor: isActive(link.path)
                    ? "rgba(118, 168, 111, 0.1)"
                    : "transparent",
                  textTransform: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  "&:hover": { color: "#76A86F" },
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* Botão Externo e Telefone (Escondidos em Telas Pequenas) */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              href="https://flexmedia.com.br"
              target="_blank"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: "#76A86F",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#98C892" },
              }}
            >
              Site Flexmedia
            </Button>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={logoSimbulo} alt="Símbolo" style={{ width: "24px" }} />
              <Typography
                sx={{ color: "white", fontWeight: 500, whiteSpace: "nowrap" }}
              >
                (11) 5535-0050
              </Typography>
            </Box>
          </Box>

          {/* MENU HAMBÚRGUER (Aparece apenas no Mobile/Tablet) */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* DRAWER (Menu Lateral Mobile) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "280px",
            backgroundColor: "#111111",
            color: "white",
            p: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((link) => (
            <ListItem key={link.title} disablePadding>
              <ListItemButton
                component={Link}
                to={link.path}
                onClick={handleDrawerToggle}
                selected={isActive(link.path)}
                sx={{ borderRadius: "8px", mb: 1 }}
              >
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          ))}

          <hr style={{ borderColor: "#333", margin: "16px 0" }} />

          {/* Telefone dentro do Drawer para Mobile extremo */}
          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", gap: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={logoSimbulo} alt="Símbolo" style={{ width: "24px" }} />
              <Typography>(11) 5535-0050</Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              href="https://flexmedia.com.br"
              target="_blank"
              sx={{ backgroundColor: "#76A86F" }}
            >
              Site Flexmedia
            </Button>
          </ListItem>
        </List>
      </Drawer>

      {/* Spacer para o conteúdo não ficar atrás da navbar fixa */}
      <Box sx={{ height: { xs: "60px", md: "80px" } }} />
    </>
  );
}

export default NavBar;
