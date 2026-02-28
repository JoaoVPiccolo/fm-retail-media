import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { NavLink } from "react-router-dom";
// import styled from "@emotion/styled";
import logo from "./assets/icons/Logo_fundo escuro.png";
import logoSimbulo from "./assets/icons/Simbolo_fundo escuro.png";

// const ButtonNav = styled(NavLink)(() => ({
//    color: "white",
//    fontFamily: "poppins, sans-serif",
//    textDecoration: "none",
//    fontSize: "1rem",
//    transition: "all 0.3s ease-in-out",
//    padding: "8px 16px",
//    ":hover": {
//      color: "#98FF8E",
//    },
//    "&.active": {
//      color: "#98FF8E",
//      borderBottom: "2px solid #98FF8E",
//    },
// }));

function NavBar() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minHeight: "62px",
          alignItems: "center",
          justifyContent: "space-between",
          top: 0,
          left: 0,
          zIndex: 1300,
          backgroundColor: "#111111",
          padding: "0 24px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "22%",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            width: "60%",
            gap: 3,
          }}
        >
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logoSimbulo}
            alt="Simbolo"
            style={{
              width: "20%",
              objectFit: "contain",
            }}
          />
          <Typography color="white" sx={{ fontSize: "1.2vmax" }}>
            (11) 5535-0050
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
