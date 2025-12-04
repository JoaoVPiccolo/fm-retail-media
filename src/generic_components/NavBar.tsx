import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "./assets/icons/Logo_fundo escuro.png";
import logoSimbulo from "./assets/icons/Simbolo_fundo escuro.png";
function NavBar() {
  const ButtonNav = styled(NavLink)({
    color: "white",
    fontFamily: "poppins, sans-serif",
    textDecoration: "none",
    fontSize: ".85vmax",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "#98FF8E",
    },
  });
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minHeight: "64px",
          alignItems: "center",
          justifyContent: "space-between",
          top: 0,
          left: 0,
          zIndex: 1300,
          backgroundColor: "black",
          padding: 3,
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            width: "16%",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            paddingLeft: "16px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            width: "70%",
            gap: 4,
            backgroundColor: "",
          }}
        >
          <ButtonNav to={"/"}>Home</ButtonNav>
          <ButtonNav to={"/"}>Quem somos</ButtonNav>
          <ButtonNav to={"/"}>Cases</ButtonNav>
          <ButtonNav to={"/"}>Varejo & Retail Media</ButtonNav>
          <ButtonNav to={"/"}>TV Corporativa</ButtonNav>
          <ButtonNav to={"/"}>Comunicação Interna</ButtonNav>
          <ButtonNav to={"/"}>Contato</ButtonNav>
          <ButtonNav to={"/"}>Blog</ButtonNav>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "15%",
          }}
        >
          <img
            src={logoSimbulo}
            alt=""
            style={{
              width: "16%",
              objectFit: "contain",
            }}
          />
          <Typography color="white">+55 (11) 99999-9999</Typography>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
